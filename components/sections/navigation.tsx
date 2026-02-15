"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "Tentang" },
  { href: "/#services", label: "Layanan" },
  { href: "/projects", label: "Proyek" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const mobileMenuId = "mobile-navigation-panel";

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-screen-xl -translate-x-1/2">
      <div className="flex items-center justify-between gap-4 rounded-full border border-neutral-200/70 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-xl md:px-6 md:py-3 font-[var(--nav-font-sans)] text-neutral-800">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Beranda DuaDuaInterior"
          className="flex items-center gap-2 font-[var(--nav-font-display)] text-lg font-semibold text-neutral-900 transition-colors hover:text-neutral-900"
        >
          <span className="font-light tracking-wide hidden sm:inline">
            DuaDua<span className="font-semibold">Interior</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-300 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70"
            >
              <span className="absolute inset-0 rounded-full bg-background-beige/70 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100" />
              <span className="relative z-10 flex items-center">
                <span className="pr-5">{link.label}</span>
                <ArrowUpRight className="absolute right-0 h-4 w-4 text-primary-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Button
            variant="ghost"
            size="sm"
            className="group border border-neutral-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/80 hover:shadow-soft-lg focus-visible:ring-primary-500/30"
            onClick={() => router.push("/#contact")}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background-beige text-neutral-700 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
              <FileText className="h-4 w-4" />
            </span>
            <span className="relative pr-5">
              Kontak
              <ArrowUpRight className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden rounded-full border border-neutral-200/70 bg-white/70 p-2 text-neutral-700 shadow-soft transition-all duration-300 hover:text-neutral-900 hover:shadow-soft-lg"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id={mobileMenuId} className="lg:hidden">
          <div className="mt-3 rounded-3xl border border-neutral-200/70 bg-white/90 p-4 backdrop-blur-xl shadow-soft-lg animate-slide-down font-[var(--nav-font-sans)] text-neutral-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3 text-neutral-700 transition-all duration-300 hover:bg-background-beige/70 hover:text-neutral-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
              <Button
                variant="ghost"
                size="md"
                className="group mt-2 w-full justify-center border border-neutral-200/80 bg-white/90 text-base font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/80 hover:shadow-soft-lg focus-visible:ring-primary-500/30"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/#contact");
                }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background-beige text-neutral-700 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                  <FileText className="h-4 w-4" />
                </span>
                <span className="relative pr-5">
                  Kontak
                  <ArrowUpRight className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
