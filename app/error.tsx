"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-red-600">!</span>
        </div>
        <h2 className="text-2xl font-semibold text-neutral-900 font-[var(--nav-font-display)]">
          Terjadi Kesalahan
        </h2>
        <p className="text-neutral-600 font-[var(--nav-font-sans)]">
          Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi atau kembali ke beranda.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} variant="outline">
            Coba Lagi
          </Button>
          <Link href="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
