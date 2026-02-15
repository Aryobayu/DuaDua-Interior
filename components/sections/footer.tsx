import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

const footerLinks = {
  company: [
    { label: "Tentang Kami", href: "/#about" },
    { label: "Layanan", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Hubungi Kami", href: "/#contact" },
  ],
  services: [
    { label: "Lemari & Wardrobe", href: "/projects?category=wardrobe" },
    { label: "Set Kamar Tidur", href: "/projects?category=bedroom" },
    { label: "Kitchen Set", href: "/projects?category=kitchen" },
    { label: "Desain Custom", href: "/#contact" },
  ],
  social: [
    { icon: Facebook, href: BRAND.facebookUrl, label: "Facebook" },
    { icon: Instagram, href: BRAND.instagramUrl, label: "Instagram" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="font-[var(--nav-font-display)] text-3xl font-bold">
                {BRAND.name}
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Mewujudkan interior impian dengan furniture custom premium.
                Kualitas terbaik, desain timeless, harga kompetitif.
              </p>
              <div className="flex gap-3">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Perusahaan</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Layanan</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-400">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{BRAND.phoneDisplay}</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{BRAND.email}</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{BRAND.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© 2026 {BRAND.name}. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
