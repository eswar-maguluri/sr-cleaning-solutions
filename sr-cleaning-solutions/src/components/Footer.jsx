"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050b14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-16">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            SR Cleaning
            <span className="text-yellow-400"> Solutions</span>
          </h3>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm md:text-base">
            {t.footer.text}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="tel:+919494239260"
              className="text-white hover:text-yellow-400 transition"
            >
              📞 +91 9494239260
            </a>
            <a
              href="https://wa.me/919494239260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:services.srcleaningsolutions@gmail.com"
              className="text-white hover:text-blue-400 transition break-all"
            >
              📧 services.srcleaningsolutions@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-slate-500 text-sm">
          © 2026 SR Cleaning Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}