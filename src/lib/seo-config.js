export const SITE_URL = "https://rogerswildlife.org";
export const SITE_NAME = "Rogers Wildlife Rehabilitation Center";
export const ORG_PHONE = "(972) 225-4000";
export const ORG_ADDRESS = {
  streetAddress: "1430 E Cleveland Rd",
  addressLocality: "Hutchins",
  addressRegion: "TX",
  postalCode: "75141",
  addressCountry: "US",
};
export const OG_IMAGE = `${SITE_URL}/images/Mr-Chitters-on-log.jpg`;

export function generateBreadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
