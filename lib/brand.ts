export const BRAND = {
  name: "DuaDuaInterior",
  businessTagline: "Interior & Furniture Custom Premium",
  email: "info@furnicraft.com",
  phoneDisplay: "+62 812-3456-7890",
  phoneDigits: "6281234567890",
  location: "Semarang, Indonesia",
  mapsUrl: "https://maps.google.com/?q=Semarang%2C+Indonesia",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
} as const;

export const BRAND_META = {
  defaultTitle: `${BRAND.name} | ${BRAND.businessTagline}`,
  titleTemplate: `%s | ${BRAND.name}`,
  defaultDescription:
    "DuaDuaInterior adalah studio interior dan furniture custom premium untuk hunian dan ruang komersial dengan fokus fungsi, estetika, dan ketahanan.",
} as const;

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${BRAND.phoneDigits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
