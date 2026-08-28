"use client";

import {
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   WHATSAPP SVG ICON
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

/* =========================================================
   INSTAGRAM SVG ICON
========================================================= */

function InstagramIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   FACEBOOK SVG ICON
========================================================= */

function FacebookIcon({ size = 19 }) {
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
        fill="currentColor"
        d="M14 8H16V4H14C10.69 4 8 6.69 8 10V12H5V16H8V22H12V16H15L16 12H12V10C12 8.9 12.9 8 14 8Z"
      />
    </svg>
  );
}

/* =========================================================
   SOCIAL ICON BUTTON
========================================================= */

function SocialIconButton({
  href,
  label,
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/10
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/40
        hover:bg-white/15
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-[#00A3E0]
        focus:ring-offset-2
        focus:ring-offset-[#031B60]
      "
    >
      <span
        className="
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {children}
      </span>
    </a>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const { t } = useLanguage();

  const f = t.footer;

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#031B60]
      "
    >
      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
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

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
        {/* ===================================================
            MAIN FOOTER GRID
        ==================================================== */}

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
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <div className="flex items-center gap-4">

              {/* LOGO */}

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

              {/* BUSINESS NAME */}

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-2xl
                  "
                >
                  SR Cleaning
                  <span className="text-[#25D366]">
                    {" "}
                    Solutions
                  </span>
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#8FD9FF]
                    sm:text-xs
                  "
                >
                  Professional Cleaning Services
                </p>
              </div>
            </div>

            {/* ACCENT */}

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

            {/* DESCRIPTION */}

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

          {/* =================================================
              QUICK LINKS
          ================================================== */}

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

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

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
                href="https://wa.me/919494239260?text=Hello%20SR%20Cleaning%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services."
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

              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}

              <div className="pt-2">

                {/* SOCIAL MEDIA HEADING */}

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    sm:text-sm
                  "
                >
                  {f.socialMedia || "Social Media"}
                </p>

                {/* SOCIAL ICONS */}

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* INSTAGRAM */}

                  <SocialIconButton
                    href="https://www.instagram.com/solutionssrcleaning/"
                    label="Instagram - solutionssrcleaning"
                  >
                    <InstagramIcon size={19} />
                  </SocialIconButton>

                  {/* FACEBOOK */}

                  <SocialIconButton
                    href="https://www.facebook.com/solutionssrcleaning/"
                    label="Facebook - solutionssrcleaning"
                  >
                    <FacebookIcon size={19} />
                  </SocialIconButton>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM COPYRIGHT
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
              text-white/50
              sm:text-sm
            "
          >
            {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}