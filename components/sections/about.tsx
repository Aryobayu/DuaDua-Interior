import { Container } from "@/components/ui/container";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Only the finest materials and craftsmanship for lasting beauty",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled artisans with decades of combined experience",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-schedule completion with transparent project tracking",
  },
];

const values = [
  "Custom design tailored to your space",
  "Premium materials sourced responsibly",
  "Expert installation and after-sales support",
  "Competitive pricing with transparent quotes",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-soft-xl">
              <Image
                src="/images/about/workshop.jpg"
                alt="Our Workshop and Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl overflow-hidden shadow-premium border-8 border-white">
              <Image
                src="/images/about/team.jpg"
                alt="Our Expert Team"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                About FurniCraft
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Crafting Dreams into
                <span className="block text-primary-500">Living Spaces</span>
              </h2>

              <p className="text-lg text-neutral-600 leading-relaxed">
                For over a decade, we&apos;ve been transforming houses into
                homes with custom furniture that blends timeless elegance with
                modern functionality. Every piece tells a story of precision,
                passion, and unwavering commitment to quality.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values List */}
            <div className="space-y-3 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-DEFAULT flex-shrink-0" />
                  <span className="text-neutral-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
