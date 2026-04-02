"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/brand";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const defaultMessage = "Halo DuaDuaInterior! Saya ingin berkonsultasi tentang furniture custom.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {expanded && (
        <div className="rounded-2xl bg-white shadow-premium border border-neutral-200 p-5 w-72 animate-slide-up">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-neutral-900 text-sm">Chat dengan Kami</span>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mb-4">
            Tim kami siap membantu Anda dengan konsultasi gratis. Respon dalam 5 menit.
          </p>
          <a
            href={getWhatsAppUrl(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-success-light hover:bg-success text-white font-medium text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Mulai Chat WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 rounded-full bg-success-light hover:bg-success text-white shadow-premium px-5 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp"
      >
        {expanded ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Hubungi Kami</span>
          </>
        )}
      </button>
    </div>
  );
}
