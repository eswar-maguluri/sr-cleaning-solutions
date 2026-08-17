"use client";

import {
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   WHATSAPP LOGO
========================================================= */

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#25D366"
        d="M12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.33 5.02L2.06 21.8l4.88-1.25a10.02 10.02 0 0 0 5.1 1.39h.01c5.52 0 10.01-4.51 10.01-10.04C22.06 6.51 17.56 2 12.04 2Z"
      />

      <path
        fill="#fff"
        d="M12.04 3.7a8.34 8.34 0 0 0-7.15 12.67l.19.3-.73 2.68 2.75-.72.28.17a8.34 8.34 0 1 0 4.66-15.1Z"
      />

      <path
        fill="#25D366"
        d="M17.05 14.35c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.85c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
      />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#031B60]
        border-t
        border-white/10
      "
    >
      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-[#00A3E0]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-[#25D366]/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-12
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-12
          "
        >

          {/* ===================================================
              BRAND
          ==================================================== */}

          <div>

            <div className="flex items-center gap-4">

              {/* Logo */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-2
                  border-white/20
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                "
              >
                <img
                  src="/logo.png"
                  alt="SR Cleaning Solutions logo"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* Business Name */}

              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  SR Cleaning
                  <span className="text-[#25D366]">
                    {" "}Solutions
                  </span>
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#8FD9FF]
                  "
                >
                  Professional Cleaning Services
                </p>

              </div>

            </div>

            {/* Accent */}

            <div
              className="
                mt-5
                h-1
                w-12
                rounded-full
                bg-gradient-to-r
                from-[#00A3E0]
                to-[#25D366]
              "
            />

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-white/70
              "
            >
              {f.text}
            </p>

          </div>


          {/* ===================================================
              QUICK LINKS
          ==================================================== */}

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-white
              "
            >
              {f.quickLinks}
            </h3>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-3
              "
            >

              <a
                href="#services"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.services}
              </a>

              <a
                href="#rates"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.rates}
              </a>

              <a
                href="#equipment"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.equipment}
              </a>

              <a
                href="#terms"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.terms}
              </a>

              <a
                href="#reviews"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.reviews}
              </a>

              <a
                href="#about"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.about}
              </a>

              <a
                href="#udyam"
                className="
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {f.udyam}
              </a>

            </div>

          </div>


          {/* ===================================================
              CONTACT
          ==================================================== */}

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-white
              "
            >
              {f.contact}
            </h3>

            <div className="mt-5 space-y-4">

              {/* PHONE */}

              <a
                href="tel:+919494239260"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/75
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#00A3E0]
                  "
                />

                <span>
                  +91 9494239260
                </span>
              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/919494239260"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp SR Cleaning Solutions"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/75
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    mt-0.5
                    flex
                    h-[18px]
                    w-[18px]
                    shrink-0
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <WhatsAppIcon size={18} />
                </span>

                <span>
                  {f.whatsapp}
                </span>
              </a>


              {/* EMAIL */}

              <a
                href="mailto:services.srcleaningsolutions@gmail.com"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/75
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#00A3E0]
                  "
                />

                <span className="break-all">
                  services.srcleaningsolutions@gmail.com
                </span>
              </a>


              {/* ADDRESS */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-white/75
                "
              >
                <MapPin
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#25D366]
                  "
                />

                <span>
                  Vengalayapalem, Guntur,
                  <br />
                  Andhra Pradesh – 522005
                </span>
              </div>


              {/* WEBSITE */}

              <a
                href="https://www.srcleaningsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/75
                  transition-colors
                  hover:text-white
                "
              >
                <Globe
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#00A3E0]
                  "
                />

                <span>
                  www.srcleaningsolutions.com
                </span>
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            text-center
          "
        >

          <p
            className="
              text-xs
              sm:text-sm
              text-white/50
            "
          >
            {f.rights}
          </p>

        </div>

      </div>
    </footer>
  );
}