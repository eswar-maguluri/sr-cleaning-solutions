"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-[#031B60] border-t border-white/10">

      {/* Decorative glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-[#00A3E0]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-[#25D366]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-14 md:py-20">

        {/* Brand */}
        <div className="text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            SR Cleaning
            <span className="text-[#25D366]"> Solutions</span>
          </h3>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-12
              rounded-full
              bg-gradient-to-r
              from-[#00A3E0]
              to-[#25D366]
            "
          />

          <p className="text-white/70 mt-5 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            {t.footer.text}
          </p>

        </div>


        {/* Contact links */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-3
            gap-3
            max-w-4xl
            mx-auto
          "
        >

          {/* Phone */}
          <a
            href="tel:+919494239260"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              min-h-[58px]
              px-5
              rounded-2xl
              bg-white/[0.06]
              border
              border-white/10
              text-white
              hover:bg-white/[0.1]
              hover:border-[#00A3E0]/50
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-[#00A3E0]/15
                text-[#00A3E0]
                shrink-0
                group-hover:bg-[#00A3E0]
                group-hover:text-white
                transition-all
              "
            >
              <Phone size={19} />
            </span>

            <span className="text-sm md:text-base font-medium">
              📞 +91 9494239260
            </span>
          </a>


          {/* WhatsApp */}
          <a
            href="https://wa.me/919494239260"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              min-h-[58px]
              px-5
              rounded-2xl
              bg-white/[0.06]
              border
              border-white/10
              text-white
              hover:bg-white/[0.1]
              hover:border-[#25D366]/50
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-[#25D366]/15
                text-[#25D366]
                shrink-0
                group-hover:bg-[#25D366]
                group-hover:text-white
                transition-all
              "
            >
              <MessageCircle size={19} />
            </span>

            <span className="text-sm md:text-base font-medium">
              💬 WhatsApp
            </span>
          </a>


          {/* Email */}
          <a
            href="mailto:services.srcleaningsolutions@gmail.com"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              min-h-[58px]
              px-5
              rounded-2xl
              bg-white/[0.06]
              border
              border-white/10
              text-white
              hover:bg-white/[0.1]
              hover:border-[#00A3E0]/50
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-[#00A3E0]/15
                text-[#00A3E0]
                shrink-0
                group-hover:bg-[#00A3E0]
                group-hover:text-white
                transition-all
              "
            >
              <Mail size={19} />
            </span>

            <span className="text-sm md:text-base font-medium break-all">
              📧 services.srcleaningsolutions@gmail.com
            </span>
          </a>

        </div>


        {/* Bottom */}
        <div
          className="
            border-t
            border-white/10
            mt-12
            pt-6
            text-center
            text-white/50
            text-sm
          "
        >
          © 2026 SR Cleaning Solutions. All rights reserved.
        </div>

      </div>

    </footer>
  );
}