"use client";

import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/brand";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormData: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  service: "Lemari & Wardrobe",
  message: "",
};

const serviceOptions = [
  "Lemari & Wardrobe",
  "Set Kamar Tidur",
  "Kitchen Set",
  "Paket Lengkap (Semua Ruangan)",
  "Hanya Konsultasi Dulu",
] as const;

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: BRAND.phoneDisplay,
    href: `tel:+${BRAND.phoneDigits}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: BRAND.location,
    href: BRAND.mapsUrl,
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{8,15}$/;

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const whatsappMessage = useMemo(
    () => `Halo ${BRAND.name}! Saya tertarik dengan ${formData.service}. 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`,
    [formData],
  );

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid (min. 8 digit)";
    }

    if (formData.message.length > 0 && formData.message.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      handleWhatsApp();
    }
  };

  const inputBase = "w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all";
  const inputNormal = "border-neutral-200";
  const inputError = "border-red-400 focus:ring-red-400";

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

              <h2 className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
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
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? true : undefined}
                  className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                  placeholder="Nama lengkap Anda"
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>}
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
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? true : undefined}
                  className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
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
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  aria-invalid={errors.phone ? true : undefined}
                  className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                  placeholder={BRAND.phoneDisplay}
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                />
                {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">{errors.phone}</p>}
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
                  onChange={handleFieldChange("service")}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
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
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={errors.message ? true : undefined}
                  className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                  placeholder="Ceritakan tentang proyek Anda..."
                  value={formData.message}
                  onChange={handleFieldChange("message")}
                />
                {errors.message && <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>}
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
