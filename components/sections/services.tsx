import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Lemari & Wardrobe",
    slug: "wardrobe",
    description:
      "Walk-in closet dan lemari pakaian custom yang memaksimalkan ruang penyimpanan dengan desain elegan dan fungsional",
    features: [
      "Pintu sliding & swing door",
      "Lampu LED built-in",
      "Kompartemen sesuai kebutuhan",
      "Finishing premium anti gores",
    ],
    image: "/images/services/wardrobe.jpg",
    accent: "from-primary-500 to-primary-600",
  },
  {
    title: "Bedroom Set",
    slug: "bedroom",
    description:
      "Paket lengkap kamar tidur termasuk bed frame, nakas, dan meja rias untuk kenyamanan maksimal",
    features: [
      "Platform Beds dengan Storage",
      "Storage Solutions",
      "Matching Nightstands",
      "Upholstered Headboards",
    ],
    image: "/images/services/bedroom.jpg",
    accent: "from-accent-copper to-primary-500",
  },
  {
    title: "Kitchen Set",
    slug: "kitchen",
    description:
      "Functional and beautiful kitchen cabinetry with modern design and smart storage solutions",
    features: [
      "Modular Cabinets",
      "Soft-Close Systems",
      "Island Designs",
      "Countertop Integration",
    ],
    image: "/images/services/kitchen-set.jpg",
    accent: "from-neutral-700 to-neutral-800",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-neutral-950 text-neutral-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 shadow-soft backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-accent-gold" />
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-[0.2em] font-[var(--nav-font-sans)]">
              Layanan Kami
            </span>
          </div>

          <h2 className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-semibold text-neutral-100">
            Solusi Furniture
            <span className="text-accent-gold"> Premium</span>
          </h2>

          <p className="text-lg text-neutral-400 font-[var(--nav-font-sans)]">
            Dirancang khusus untuk gaya hidup modern Anda—fungsional, estetis,
            dan tahan lama
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="group relative rounded-4xl overflow-hidden border border-neutral-800 bg-neutral-900/70 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="font-[var(--nav-font-display)] text-2xl font-semibold text-neutral-100 group-hover:text-accent-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed font-[var(--nav-font-sans)]">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-neutral-300 font-[var(--nav-font-sans)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/projects?category=${service.slug}`}>
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between border border-neutral-800 bg-neutral-950/60 text-neutral-200 hover:bg-neutral-800"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Index Number (Design Element) */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 shadow-soft flex items-center justify-center">
                <span className="font-[var(--nav-font-display)] text-lg font-semibold text-accent-gold">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
