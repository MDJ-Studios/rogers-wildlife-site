// import Image from "next/image";
import Link from "next/link";
import styles from "@/components/base/footer/Footer.module.css";
import { SocialIcon } from "@/components/ui/social-icons";

export default function Footer() {
    const linkObjs = [
        { name: "Home", path: "/" },
        { name: "Our Story", path: "/about" },
        { name: "Found a Bird?", path: "/found-a-bird" },
        { name: "How to Help", path: "/how-to-help" },
        { name: "Contact Us", path: "/contact-us" },
    ];

    const linkObjsAlt = [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
    ];

    const links = linkObjs.map((obj) => {
        return (
            <span key={obj.name}>
                <Link href={obj.path}>{obj.name}</Link>
                {obj.path != "/contact-us" ? " | " : null}
            </span>
        );
    });

    const linksAlt = linkObjsAlt.map((obj) => {
        return (
            <span key={obj.name}>
                <Link href={obj.path}>{obj.name}</Link>
                {obj.path != "/terms-of-service" ? " | " : null}
            </span>
        );
    });

    return (
        <div className={styles.parent_container}>
            <div className={styles.socials_container}>
                <SocialIcon type="fb" size="3x" />
                <SocialIcon type="ig" size="3x" />
                <SocialIcon type="pt" size="3x" />
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>{links}</div>
                <div className={styles.footer_links}>{linksAlt}</div>
                <br />
                <address>
                    Rogers Wildlife Rehabilitation Center<br />
                    1430 E Cleveland Rd<br />
                    Hutchins, TX 75141<br />
                    <a href="tel:1-972-225-4000">(972) 225-4000</a>
                </address>
                <br />
                <div>
                    <p>
                        Copyright {new Date().getFullYear()} Rogers Wildlife Rehabilitation Center. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
