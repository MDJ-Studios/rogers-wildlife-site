import "@/styles/globals.css";
import "@/utils/fortawesomeconfig";
import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";

export default function App({ Component: Page, pageProps }) {
  const router = useRouter();
  const overlayRef = useRef(null);
  const iframeContainerRef = useRef(null);
  const excludedPaths = useRef(["/how-to-help"]); // Use ref for excludedPaths to avoid re-creating the array

  const cacheBustUrl = useCallback((url) => {
    const parsedUrl = new URL(url);
    const searchParams = new URLSearchParams(parsedUrl.search);
    searchParams.append("cachebust", Date.now());
    parsedUrl.search = searchParams.toString();
    return parsedUrl.toString();
  }, []);

  const adjustIframeContainer = useCallback((e, iframeContainer) => {
    Object.assign(iframeContainer.style, e.matches ? {
      top: "5%",
      bottom: "5%",
      left: "10%",
      right: "10%",
    } : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    });
  }, []);

  const showOverlay = useCallback((overlay, iframeContainer) => {
    overlay.style.display = "block";
    overlay.ariaHidden = "false";
    iframeContainer.style.display = "block";
    iframeContainer.ariaHidden = "false";
    overlay.style.opacity = 1;
    iframeContainer.style.opacity = 1;
  }, []);

  const hideOverlay = useCallback((overlay, iframeContainer) => {
    overlay.style.opacity = 0;
    iframeContainer.style.opacity = 0;
    overlay.style.display = "none";
    overlay.ariaHidden = "true";
    iframeContainer.style.display = "none";
    iframeContainer.ariaHidden = "true";
  }, []);

  useEffect(() => {
    if (excludedPaths.current.includes(router.pathname)) return;

    const formLinkAttr = "zeffy-form-link";
    const iframeId = "zeffy-iframe";

    const hiddenStyle = `
      display: none;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 10000;
      transition: opacity 0.25s ease-in-out;
      opacity: 0;
    `;

    const overlay = document.createElement("div");
    Object.assign(overlay, {
      style: `
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        transition: opacity 0.25s ease-in-out;
        opacity: 0;
      `,
      ariaHidden: "true",
    });
    overlayRef.current = overlay;

    const setupForms = () => {
      const formLinks = document.querySelectorAll(`[${formLinkAttr}]`);
      if (formLinks.length > 0) {
        const formGroups = {};
        formLinks.forEach(link => {
          const formUrl = link.getAttribute(formLinkAttr);
          if (formUrl) {
            if (!formGroups[formUrl]) {
              formGroups[formUrl] = [];
            }
            formGroups[formUrl].push(link);
          }
        });

        document.body.append(overlay);

        Object.keys(formGroups).forEach(formUrl => {
          const iframeContainer = document.createElement("div");
          Object.assign(iframeContainer, { style: hiddenStyle, ariaHidden: "true" });
          iframeContainerRef.current = iframeContainer;

          const iframe = document.createElement("iframe");
          Object.assign(iframe, {
            title: "Form powered and secured by Zeffy",
            style: "width: 100%; height: 100%; border: none; border-radius: 4px;",
            src: cacheBustUrl(formUrl),
            allow: "payment",
          });
          iframeContainer.append(iframe);

          const mediaQuery = window.matchMedia("(min-width: 769px)");
          const adjustIframeContainerBound = adjustIframeContainer.bind(null, mediaQuery, iframeContainer);

          mediaQuery.addEventListener("change", adjustIframeContainerBound);
          adjustIframeContainerBound(mediaQuery);

          document.body.append(iframeContainer);

          overlay.addEventListener("click", () => hideOverlay(overlay, iframeContainer));

          formGroups[formUrl].forEach(link => {
            link.addEventListener("click", () => {
              showOverlay(overlay, iframeContainer);
              iframe.contentWindow.postMessage({ id: iframeId, open: true }, "*");
            });
          });

          const handleEscape = event => {
            if (event.key === "Escape") hideOverlay(overlay, iframeContainer);
          };

          const handleMessage = event => {
            if (event.isTrusted && event.data && event.data.id === iframeId && event.data.close) {
              hideOverlay(overlay, iframeContainer);
            }
          };

          window.addEventListener("keydown", handleEscape);
          window.addEventListener("message", handleMessage, false);

          return () => {
            mediaQuery.removeEventListener("change", adjustIframeContainerBound);
            overlay.removeEventListener("click", () => hideOverlay(overlay, iframeContainer));
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("message", handleMessage, false);
            document.body.removeChild(overlay);
            document.body.removeChild(iframeContainer);
          };
        });
      }
    };

    const cleanup = setupForms();

    return () => {
      if (cleanup) cleanup();
    };
  }, [router.pathname, adjustIframeContainer, cacheBustUrl, hideOverlay, showOverlay]);

  return <Page {...pageProps} />;
}