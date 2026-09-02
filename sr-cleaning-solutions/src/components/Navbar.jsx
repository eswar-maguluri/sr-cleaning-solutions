"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   WhatsApp SVG
   ========================================================= */

function WhatsAppIcon({ size = 21 }) {
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
        d="M12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.33 5.02L2.06 21.8l4.88-1.25a10.02 10.02 0 0 0 5.1 1.39h.01c5.52 0 10.01-4.51 10.01-10.04C22.06 6.51 17.56 2 12.04 2Z"
      />

      <path
        fill="#25D366"
        d="M12.04 3.7a8.34 8.34 0 0 0-7.15 12.67l.19.3-.73 2.68 2.75-.72.28.17a8.34 8.34 0 1 0 4.66-15.1Z"
      />

      <path
        fill="#fff"
        d="M17.05 14.35c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.85c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
      />
    </svg>
  );
}

/* =========================================================
   Navigation links
   IMPORTANT:
   We store translation keys instead of English text.
   ========================================================= */

const desktopLinks = [
  {
    key: "services",
    href: "#services",
  },
  {
    key: "rates",
    href: "#rates",
  },
  {
    key: "equipment",
    href: "#equipment",
  },
  {
    key: "terms",
    href: "#terms",
  },
  {
    key: "reviews",
    href: "#reviews",
  },
  {
    key: "about",
    href: "#about",
  },
];

/* =========================================================
   Navbar
   ========================================================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language, changeLanguage, t } = useLanguage();

  const closeMenu = () => {
    setOpen(false);
  };

  /* ---------------------------------------------------------
     Detect scroll
  --------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------------------------------------------------
     Prevent page scrolling while mobile menu is open
  --------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ---------------------------------------------------------
     Close menu when Escape is pressed
  --------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(3,27,82,0.10)] border-b border-[#D8E8F8]"
              : "bg-white/85 backdrop-blur-xl border-b border-white/60"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${
                scrolled
                  ? "h-[68px] md:h-[74px]"
                  : "h-[76px] md:h-[84px]"
              }
            `}
          >
            {/* =================================================
                LOGO + BUSINESS NAME
            ================================================== */}

            <a
              href="#"
              aria-label="SR Cleaning Solutions Home"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                gap-2.5
                sm:gap-3
                md:gap-4
                shrink-0
              "
            >
              {/* Circular logo */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  md:w-14
                  md:h-14
                  rounded-full
                  overflow-hidden
                  bg-white
                  border-2
                  border-[#D8E8F8]
                  shadow-[0_6px_20px_rgba(3,27,96,0.10)]
                  group-hover:border-[#00A3E0]
                  group-hover:shadow-[0_8px_25px_rgba(0,163,224,0.18)]
                  transition-all
                  duration-300
                "
              >
                <img
                  src="/logo.png"
                  alt="SR Cleaning Solutions Logo"
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-full
                    scale-[1.03]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Business name */}

              <div className="flex flex-col leading-none">
                <span
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    font-extrabold
                    tracking-[-0.04em]
                    text-[#031B60]
                    whitespace-nowrap
                  "
                >
                  SR Cleaning
                  <span className="text-[#25D366]">
                    {" "}Solutions
                  </span>
                </span>

                <span
                  className="
                    hidden
                    sm:block
                    mt-1
                    text-[9px]
                    md:text-[10px]
                    lg:text-xs
                    font-semibold
                    tracking-[0.08em]
                    text-[#506482]
                  "
                >
                  PROFESSIONAL CLEANING SERVICES
                </span>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">

              {desktopLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    relative
                    px-3
                    lg:px-3.5
                    py-3
                    text-xs
                    lg:text-sm
                    font-semibold
                    text-[#0B1938]
                    hover:text-[#031B60]
                    transition-colors
                    duration-200
                  "
                >
                  {/* TRANSLATED NAVBAR TEXT */}
                  {t.navbar[link.key]}

                  <span
                    className="
                      absolute
                      bottom-1.5
                      left-3
                      right-3
                      h-px
                      origin-left
                      scale-x-0
                      bg-[#00A3E0]
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </a>
              ))}

              {/* =================================================
                  EMAIL
              ================================================== */}

              <a
                href="mailto:services.srcleaningsolutions@gmail.com"
                className="
                  group
                  relative
                  px-3
                  lg:px-3.5
                  py-3
                  text-xs
                  lg:text-sm
                  font-semibold
                  text-[#0B1938]
                  hover:text-[#031B60]
                  transition-colors
                "
              >
                {t.navbar.email}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-3
                    right-3
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#00A3E0]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </a>

              {/* =================================================
                  LANGUAGE
              ================================================== */}

              <div className="ml-2">
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  aria-label="Select language"
                  className="
                    min-h-[44px]
                    bg-[#F4F9FF]
                    border
                    border-[#D8E8F8]
                    text-[#0B1938]
                    rounded-full
                    px-3
                    lg:px-4
                    pr-8
                    text-xs
                    lg:text-sm
                    font-semibold
                    outline-none
                    cursor-pointer
                    focus:border-[#00A3E0]
                    focus:ring-4
                    focus:ring-[#00A3E0]/10
                    transition-all
                  "
                >
                  <option value="en">English</option>
                  <option value="te">తెలుగు</option>
                </select>
              </div>

              {/* =================================================
                  CALL BUTTON
              ================================================== */}

              <a
                href="tel:+919494239260"
                className="
                  relative
                  overflow-hidden
                  ml-2
                  min-h-[46px]
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  rounded-full
                  bg-[#031B60]
                  text-white
                  text-xs
                  lg:text-sm
                  font-bold
                  shadow-[0_10px_28px_rgba(3,27,96,0.20)]
                  hover:bg-[#062A78]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <Phone size={16} />
                {t.navbar.callNow}
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="
                md:hidden
                w-12
                h-12
                min-h-[48px]
                flex
                items-center
                justify-center
                rounded-full
                bg-[#031B60]
                text-white
                shadow-[0_8px_24px_rgba(3,27,96,0.18)]
                active:scale-95
                transition-transform
              "
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          bg-[#021449]/70
          backdrop-blur-md
          z-[60]
          transition-all
          duration-500
          md:hidden
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-[100dvh]
          w-full
          sm:max-w-md
          bg-[#031B60]
          z-[70]
          flex
          flex-col
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* -----------------------------------------------------
            Mobile header
        ----------------------------------------------------- */}

        <div
          className="
            relative
            flex
            items-center
            justify-between
            px-5
            h-[76px]
            border-b
            border-white/10
            shrink-0
          "
        >
          {/* Logo */}

          <a
            href="#"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-3
              min-w-0
            "
          >
            <div
              className="
                w-11
                h-11
                shrink-0
                rounded-full
                overflow-hidden
                bg-white
                border-2
                border-white/30
                flex
                items-center
                justify-center
              "
            >
              <img
                src="/logo.png"
                alt="SR Cleaning Solutions Logo"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-full
                "
              />
            </div>

            <div className="flex flex-col leading-none min-w-0">
              <span className="text-base font-extrabold text-white whitespace-nowrap">
                SR Cleaning
                <span className="text-[#25D366]">
                  {" "}Solutions
                </span>
              </span>

              <span className="text-[8px] mt-1 text-white/60 tracking-[0.08em]">
                PROFESSIONAL CLEANING SERVICES
              </span>
            </div>
          </a>

          {/* Close */}

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              w-12
              h-12
              min-h-[48px]
              shrink-0
              flex
              items-center
              justify-center
              rounded-full
              bg-white/10
              border
              border-white/15
              text-white
              hover:bg-white/15
              active:scale-95
              transition-all
            "
          >
            <X size={26} />
          </button>
        </div>

        {/* -----------------------------------------------------
            Mobile content
        ----------------------------------------------------- */}

        <div
          className="
            relative
            flex
            flex-col
            flex-1
            px-5
            pt-6
            pb-8
            overflow-y-auto
          "
        >
          {/* Language */}

          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            aria-label="Select language"
            className="
              w-full
              min-h-[52px]
              bg-white/10
              border
              border-white/15
              text-white
              rounded-2xl
              px-4
              py-3
              outline-none
              font-medium
              focus:border-[#25D366]
            "
          >
            <option
              value="en"
              className="bg-[#031B60]"
            >
              English
            </option>

            <option
              value="te"
              className="bg-[#031B60]"
            >
              తెలుగు
            </option>
          </select>

          {/* =================================================
              MOBILE LINKS
          ================================================== */}

          <div className="mt-5 flex flex-col">

            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  min-h-[58px]
                  border-b
                  border-white/10
                  text-white
                  text-xl
                  font-semibold
                  hover:text-[#25D366]
                  transition-colors
                "
              >
                {/* TRANSLATED MOBILE NAVBAR TEXT */}
                <span>{t.navbar[link.key]}</span>

                <span
                  className="
                    text-white/40
                    group-hover:text-[#25D366]
                    group-hover:translate-x-1
                    transition-all
                  "
                >
                  →
                </span>
              </a>
            ))}

            {/* =================================================
                MOBILE EMAIL
            ================================================== */}

            <a
              href="mailto:services.srcleaningsolutions@gmail.com"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                min-h-[58px]
                border-b
                border-white/10
                text-white
                text-xl
                font-semibold
                hover:text-[#25D366]
                transition-colors
              "
            >
              <span>{t.navbar.email}</span>

              <span
                className="
                  text-white/40
                  group-hover:text-[#25D366]
                  group-hover:translate-x-1
                  transition-all
                "
              >
                →
              </span>
            </a>
          </div>

          {/* =================================================
              MOBILE ACTION BUTTONS
          ================================================== */}

          <div className="mt-auto pt-7 flex flex-col gap-3">

            {/* Call */}

            <a
              href="tel:+919494239260"
              onClick={closeMenu}
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                text-[#031B60]
                font-bold
                shadow-lg
                active:scale-[0.98]
                transition-transform
              "
            >
              <Phone size={19} />
              {t.navbar.callNow}
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919494239260?text=Hello%20SR%20Cleaning%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#25D366]
                text-white
                font-bold
                shadow-[0_10px_30px_rgba(37,211,102,0.20)]
                active:scale-[0.98]
                transition-transform
              "
            >
              <WhatsAppIcon size={21} />
              {t.navbar.whatsapp}
            </a>

            {/* Email */}

            <a
              href="mailto:services.srcleaningsolutions@gmail.com"
              onClick={closeMenu}
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/5
                text-white
                font-bold
                active:scale-[0.98]
                transition-transform
              "
            >
              <span>✉</span>
              {t.navbar.emailUs}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}