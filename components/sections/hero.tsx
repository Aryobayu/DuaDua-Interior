"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(90deg,#e7e3de_0%,#d9d5cf_40%,#b8b4af_70%,#7a7775_100%)]">
      {/* Soft highlight + right-side depth */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_20%,rgba(255,255,255,0.7),transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.55)_100%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-28">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/60 px-4 py-2 text-xs font-medium text-neutral-700 shadow-soft backdrop-blur font-[var(--nav-font-sans)]">
              <span className="h-2 w-2 rounded-full bg-neutral-900/80" />
              Premium Interior Studio
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-[var(--nav-font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
                Wujudkan Ruangan
                <span className="block text-neutral-700 mt-2">Impian Anda</span>
              </h1>

              <p className="font-[var(--nav-font-sans)] text-lg lg:text-xl text-neutral-700/80 max-w-xl leading-relaxed">
                Furniture custom premium yang dirancang khusus untuk gaya hidup
                Anda. Dari lemari minimalis hingga kitchen set modern—kami
                hadirkan interior yang sempurna untuk rumah Anda.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="primary"
                onClick={scrollToPortfolio}
                className="group bg-neutral-900 text-white hover:bg-neutral-800 shadow-soft-lg"
              >
                Jelajahi Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-neutral-400 text-neutral-800 hover:bg-white/60"
              >
                Dapatkan Konsultasi Gratis
              </Button>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="relative animate-slide-up">
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-premium border border-white/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.35)_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_20%_15%,rgba(255,255,255,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
            </div>

            {/* Floating Card - Quality Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-neutral-200/70 bg-white/90 shadow-soft-xl p-6 max-w-[210px] backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neutral-900/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-success-DEFAULT"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-[var(--nav-font-display)] font-semibold text-neutral-900">
                    Premium
                  </div>
                  <div className="text-sm text-neutral-600 font-[var(--nav-font-sans)]">
                    Quality Guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
