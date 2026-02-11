import { Container } from "@/components/ui/container";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Award,
    title: "Kualitas Premium",
    description:
      "Hanya material terbaik dan pengerjaan presisi untuk hasil yang tahan lama",
  },
  {
    icon: Users,
    title: "Tim Ahli",
    description:
      "Craftsman berpengalaman dengan total pengalaman puluhan tahun",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description:
      "Pengerjaan sesuai jadwal dengan tracking progres yang transparan",
  },
];

const values = [
  "Desain custom yang pas dengan kebutuhan Anda",
  "Material premium berkualitas ekspor",
  "Instalasi profesional & garansi after-sales",
  "Harga kompetitif dengan penawaran transparan",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[linear-gradient(180deg,#f4f1ed_0%,#f7f4ef_55%,#ffffff_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(255,255,255,0.75),transparent_60%)]" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-soft-xl border border-white/70">
              <Image
                src="/images/about/workshop.jpg"
                alt="Our Workshop and Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl overflow-hidden shadow-premium border border-white/80 bg-white/80 backdrop-blur">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200/80 bg-white/70 shadow-soft backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-accent-gold" />
              <span className="text-xs font-semibold text-neutral-700 uppercase tracking-[0.2em] font-[var(--nav-font-sans)]">
                Tentang DuaDuaInterior
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-semibold text-neutral-900 leading-tight">
                Lebih dari Sekadar
                <span className="block text-neutral-700">Furniture</span>
              </h2>

              <p className="text-lg text-neutral-700/80 leading-relaxed font-[var(--nav-font-sans)]">
                DuaDuaInterior dimulai dari workshop kecil di Semarang dengan
                satu misi: membuat furniture custom berkualitas tinggi yang
                accessible untuk semua orang. Hari ini, kami bangga telah
                melayani lebih dari 500 klien dengan tingkat kepuasan 100%.
              </p>

              <p className="text-base text-neutral-700/80 leading-relaxed font-[var(--nav-font-sans)]">
                Tim kami terdiri dari craftsman berpengalaman yang menguasai
                teknik tradisional dan modern. Setiap proyek dikerjakan dengan
                perhatian detail maksimal, dari pemilihan kayu hingga finishing
                terakhir.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start rounded-2xl border border-neutral-200/70 bg-white/70 p-4 shadow-soft transition-colors hover:bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-900/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-[var(--nav-font-display)] text-neutral-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-700/80 text-sm font-[var(--nav-font-sans)]">
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
                  <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="text-neutral-700 font-[var(--nav-font-sans)]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
