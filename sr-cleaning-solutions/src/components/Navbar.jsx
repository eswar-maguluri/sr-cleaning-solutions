"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const closeMenu = () => setOpen(false);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
              ? "bg-white/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(3,27,82,0.10)] border-b border-[#d8e8f8]"
              : "bg-white/80 backdrop-blur-xl border-b border-white/50"
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
            {/* Brand */}
            <a
              href="#"
              className="
                group
                relative
                flex
                items-center
                shrink-0
                font-bold
                tracking-tight
              "
            >
              <span
                className="
                  text-[#031B60]
                  text-[19px]
                  sm:text-[21px]
                  md:text-[26px]
                  leading-none
                "
              >
                SR Cleaning
              </span>

              <span
                className="
                  ml-1.5
                  text-[#25D366]
                  text-[19px]
                  sm:text-[21px]
                  md:text-[26px]
                  leading-none
                "
              >
                Solutions
              </span>

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#00A3E0]
                  to-[#25D366]
                  rounded-full
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">

              <a
                href="#services"
                className="
                  group
                  relative
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#0B1938]
                  hover:text-[#031B60]
                "
              >
                {t.navbar.services}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-4
                    right-4
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

              <a
                href="#reviews"
                className="
                  group
                  relative
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#0B1938]
                  hover:text-[#031B60]
                "
              >
                {t.navbar.reviews}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-4
                    right-4
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

              <a
                href="#about"
                className="
                  group
                  relative
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#0B1938]
                  hover:text-[#031B60]
                "
              >
                {t.navbar.about}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-4
                    right-4
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

              <a
                href="mailto:services.srcleaningsolutions@gmail.com"
                className="
                  group
                  relative
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#0B1938]
                  hover:text-[#031B60]
                "
              >
                Email

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-4
                    right-4
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

              {/* Language */}
              <div className="ml-3">
                <select
                  value={language}
                  onChange={(e) =>
                    changeLanguage(e.target.value)
                  }
                  className="
                    min-h-[44px]
                    bg-[#F4F9FF]
                    border
                    border-[#D8E8F8]
                    text-[#0B1938]
                    rounded-full
                    px-4
                    pr-9
                    text-sm
                    font-medium
                    outline-none
                    cursor-pointer
                    appearance-auto
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

              {/* Call CTA */}
              <a
                href="tel:+919494239260"
                className="
                  relative
                  overflow-hidden
                  ml-3
                  min-h-[48px]
                  flex
                  items-center
                  justify-center
                  px-6
                  rounded-full
                  bg-[#031B60]
                  text-white
                  text-sm
                  font-bold
                  shadow-[0_10px_28px_rgba(3,27,96,0.20)]
                  hover:bg-[#062A78]
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_32px_rgba(3,27,96,0.25)]
                "
              >
                <span className="relative z-10">
                  {t.navbar.callNow}
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-700
                    hover:translate-x-full
                  "
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
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
              "
            >
              <Menu size={23} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          bg-[#021449]/65
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

      {/* Mobile menu */}
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
        {/* Decorative glow */}
        <div
          className="
            absolute
            top-0
            right-0
            w-64
            h-64
            rounded-full
            bg-[#00A3E0]/20
            blur-[90px]
            pointer-events-none
          "
        />

        <div
          className="
            relative
            flex
            items-center
            justify-between
            px-5
            sm:px-6
            h-[76px]
            border-b
            border-white/10
          "
        >
          <h2 className="text-white text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              w-12
              h-12
              min-h-[48px]
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
            "
          >
            <X size={26} strokeWidth={2} />
          </button>
        </div>

        <div
          className="
            relative
            flex
            flex-col
            flex-1
            px-5
            sm:px-6
            pt-8
            pb-8
            overflow-y-auto
          "
        >
          {/* Language */}
          <select
            value={language}
            onChange={(e) =>
              changeLanguage(e.target.value)
            }
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
              focus:border-[#00A3E0]
              focus:ring-4
              focus:ring-[#00A3E0]/10
            "
          >
            <option
              value="en"
              className="bg-[#031B60] text-white"
            >
              English
            </option>

            <option
              value="te"
              className="bg-[#031B60] text-white"
            >
              తెలుగు
            </option>
          </select>

          {/* Navigation links */}
          <div className="mt-8 flex flex-col">

            <a
              href="#services"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                min-h-[64px]
                border-b
                border-white/10
                text-white
                text-2xl
                sm:text-3xl
                font-semibold
                hover:text-[#25D366]
              "
            >
              {t.navbar.services}

              <span className="text-white/30 group-hover:text-[#25D366] transition">
                →
              </span>
            </a>

            <a
              href="#reviews"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                min-h-[64px]
                border-b
                border-white/10
                text-white
                text-2xl
                sm:text-3xl
                font-semibold
                hover:text-[#25D366]
              "
            >
              {t.navbar.reviews}

              <span className="text-white/30 group-hover:text-[#25D366] transition">
                →
              </span>
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                justify-between
                min-h-[64px]
                border-b
                border-white/10
                text-white
                text-2xl
                sm:text-3xl
                font-semibold
                hover:text-[#25D366]
              "
            >
              {t.navbar.about}

              <span className="text-white/30 group-hover:text-[#25D366] transition">
                →
              </span>
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-auto pt-8 flex flex-col gap-3">

            <a
              href="tel:+919494239260"
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#031B60]
                font-bold
                shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                active:scale-[0.98]
              "
            >
              {t.navbar.callNow}
            </a>

            <a
              href="https://wa.me/919494239260"
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-white
                font-bold
                shadow-[0_12px_30px_rgba(37,211,102,0.18)]
                active:scale-[0.98]
              "
            >
              {t.navbar.whatsapp}
            </a>

            <a
              href="mailto:services.srcleaningsolutions@gmail.com"
              className="
                min-h-[56px]
                flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                text-white
                font-bold
                active:scale-[0.98]
              "
            >
              📧 Email Us
            </a>

          </div>
        </div>
      </div>
    </>
  );
}