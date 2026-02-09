"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@furnicraft.com",
    href: "mailto:info@furnicraft.com",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    href: "https://maps.google.com",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Lemari & Wardrobe",
    message: "",
  });

  const handleWhatsApp = () => {
    const message = `Halo DuaDua-Interior! Saya tertarik dengan ${formData.service}. 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                  Hubungi Kami
                </span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Wujudkan Interior
                <span className="block text-primary-500">Impian Anda</span>
              </h2>

              <p className="text-lg text-neutral-600">
                Punya proyek dalam pikiran? Kami siap membantu. Kirim pesan dan
                tim kami akan merespons secepat mungkin.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <info.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-600 mb-0.5">
                      {info.label}
                    </div>
                    <div className="font-semibold text-neutral-900">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Quick Button */}
            <div className="p-6 bg-success-light/10 border border-success-light/30 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    Lebih Suka WhatsApp?
                  </div>
                  <div className="text-sm text-neutral-600">
                    Respon instan dari tim kami
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-success-light hover:bg-success-DEFAULT text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat via WhatsApp
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-neutral-50 rounded-4xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Alamat Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Nomor Telepon/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+62 812-3456-7890"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Tertarik Dengan *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="Lemari & Wardrobe">Lemari & Wardrobe</option>
                  <option value="Set Kamar Tidur">Set Kamar Tidur</option>
                  <option value="Kitchen Set">Kitchen Set</option>
                  <option value="Paket Lengkap">
                    Paket Lengkap (Semua Ruangan)
                  </option>
                  <option value="Konsultasi">Hanya Konsultasi Dulu</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Pesan (Opsional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full">
                Kirim via WhatsApp
                <Send className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                Dengan mengirim form ini, Anda setuju untuk dihubungi melalui
                WhatsApp
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
