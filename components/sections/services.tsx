import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Wardrobe",
    slug: "wardrobe",
    description:
      "Custom walk-in closets and wardrobes designed for maximum storage and elegant aesthetics",
    features: [
      "Sliding & Swing Doors",
      "Built-in Lighting",
      "Custom Compartments",
      "Premium Finishes",
    ],
    image: "/images/services/wardrobe.jpg",
    accent: "from-primary-500 to-primary-600",
  },
  {
    title: "Bedroom Set",
    slug: "bedroom",
    description:
      "Complete bedroom solutions including beds, side tables, and dressing units for ultimate comfort",
    features: [
      "Platform Beds",
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
      className="py-20 lg:py-32 bg-gradient-to-b from-background-cream to-white"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Our Services
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
            Premium Furniture Solutions
          </h2>

          <p className="text-lg text-neutral-600">
            Expertly crafted to match your lifestyle and elevate your living
            spaces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="group relative bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
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
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-neutral-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/projects?category=${service.slug}`}>
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Index Number (Design Element) */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-soft flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-primary-500">
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
