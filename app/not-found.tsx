import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-8xl font-bold text-neutral-200 font-[var(--nav-font-display)]">404</div>
        <h2 className="text-2xl font-semibold text-neutral-900 font-[var(--nav-font-display)]">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-neutral-600 font-[var(--nav-font-sans)]">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link href="/">
          <Button>Kembali ke Beranda</Button>
        </Link>
      </div>
    </div>
  );
}
