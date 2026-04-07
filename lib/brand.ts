export const BRAND = {
  name: "DuaDuaInterior",
  businessTagline: "Interior & Furniture Custom Premium",
  email: "22furnitur@gmail.custom",
  phoneDisplay: "+62 813-2620-1614",
  phoneDigits: "6281326201614",
  location: "Semarang, Indonesia",
  mapsUrl: "https://maps.app.goo.gl/7zVdp5PD9coclearzCoJ9GD6cle",
  instagramUrl: "https://www.instagram.com/duadua_interior",
  facebookUrl: "https://web.facebook.com/p/Duadua-interior-100046135098678/?_rdc=1&_rdr",
  siteUrl: "https://duaduainteriors.com",
} as const;

export const BRAND_META = {
  defaultTitle: `${BRAND.name} | ${BRAND.businessTagline}`,
  titleTemplate: `%s | ${BRAND.name}`,
  defaultDescription:
    "DuaDuaInterior adalah studio interior dan furniture custom premium untuk hunian dan ruang komersial dengan fokus fungsi, estetika, dan ketahanan.",
} as const;

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${BRAND.phoneDigits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND.name,
  description: BRAND_META.defaultDescription,
  url: BRAND.siteUrl,
  telephone: BRAND.phoneDisplay,
  email: BRAND.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressCountry: "ID",
  },
  sameAs: [BRAND.instagramUrl, BRAND.facebookUrl],
  priceRange: "$$",
};

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama waktu pengerjaan furniture custom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan bervariasi antara 3-8 minggu tergantung kompleksitas desain. Lemari & wardrobe biasanya 3-5 minggu, kitchen set 4-6 minggu, dan paket lengkap 6-8 minggu.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada garansi untuk furniture yang dibuat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, semua furniture kami bergaransi 2 tahun untuk struktur kayu dan 1 tahun untuk hardware & finishing. Garansi mencakup perbaikan atau penggantian jika terjadi cacat produksi.",
      },
    },
    {
      "@type": "Question",
      name: "Jenis material apa saja yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan berbagai material premium: kayu solid (jati, mahoni, sungkai), MDF dengan HPL, plywood marine grade, dan bahan finishing melamine, duco, dan lacquer.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa konsultasi desain sebelum memutuskan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu! Kami menyediakan konsultasi desain gratis. Tim designer kami akan membantu merancang furniture yang sesuai dengan ukuran ruang, kebutuhan fungsional, dan gaya yang Anda inginkan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada batas minimum pesanan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada batas minimum. Kami mengerjakan dari satu lemari hingga paket interior lengkap. Setiap proyek diperlakukan dengan standar kualitas yang sama.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana sistem pembayarannya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pembayaran dilakukan bertahap: DP 50% saat konfirmasi desain, 30% saat proses produksi dimulai, dan 20% saat instalasi selesai. Kami menerima transfer bank dan pembayaran tunai.",
      },
    },
  ],
};
