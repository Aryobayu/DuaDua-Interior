"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Wardrobe", "Bedroom", "Kitchen"] as const;
type Category = (typeof categories)[number];

// Sample portfolio data - replace with real data later
const portfolioItems = [
  {
    id: 1,
    title: "Modern Walk-In Wardrobe",
    category: "Wardrobe" as Category,
    image: "/images/portfolio/wardrobe-01.jpg",
    location: "Jakarta Selatan",
  },
  {
    id: 2,
    title: "Minimalist Kitchen Set",
    category: "Kitchen" as Category,
    image: "/images/portfolio/kitchen-set-01.jpg",
    location: "Tangerang",
  },
  {
    id: 3,
    title: "Luxury Master Bedroom",
    category: "Bedroom" as Category,
    image: "/images/portfolio/bedroom-01.jpg",
    location: "BSD City",
  },
  {
    id: 4,
    title: "Classic Wardrobe Design",
    category: "Wardrobe" as Category,
    image: "/images/portfolio/wardrobe-02.jpg",
    location: "Jakarta Pusat",
  },
  {
    id: 5,
    title: "Contemporary Kitchen",
    category: "Kitchen" as Category,
    image: "/images/portfolio/kitchen-set-02.jpg",
    location: "Bekasi",
  },
  {
    id: 6,
    title: "Elegant Bedroom Suite",
    category: "Bedroom" as Category,
    image: "/images/portfolio/bedroom-02.jpg",
    location: "Depok",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Our Work
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
            Portfolio Gallery
          </h2>

          <p className="text-lg text-neutral-600">
            Explore our recent projects and see quality craftsmanship in action
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "primary" : "outline"}
              size="md"
              onClick={() => setActiveCategory(category)}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">{item.location}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-xs font-semibold text-primary-600">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
