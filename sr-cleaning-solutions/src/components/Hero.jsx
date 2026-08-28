"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".hero-image", {
          scale: 1.12,
          duration: 1.8,
          ease: "power2.out",
        })
        .from(
          ".hero-overlay",
          {
            opacity: 0,
            duration: 1.2,
          },
          "-=1.4"
        )
        .from(
          ".hero-badge",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
          },
          "-=0.7"
        )
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 25,
            rotateX: 4,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 28,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );

      gsap.to(".hero-image", {
        yPercent: -3,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-cyan-glow", {
        x: 35,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-green-glow", {
        x: -25,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#031B60]">

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <div
        className="
          hero-image
          absolute
          inset-0
          bg-cover
          bg-center
          will-change-transform
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      {/* =====================================================
          PREMIUM IMAGE TREATMENT
      ====================================================== */}

      <div
        className="
          hero-overlay
          absolute
          inset-0
          bg-gradient-to-b
          from-[#031B60]/95
          via-[#031B60]/82
          to-[#021449]/96
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#031B60]
          via-[#031B60]/65
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#021449]
          via-transparent
          to-[#031B60]/40
        "
      />

      {/* =====================================================
          BRAND GLOWS
      ====================================================== */}

      <div
        className="
          hero-cyan-glow
          absolute
          -top-32
          -right-32
          w-[360px]
          h-[360px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-[#00A3E0]/20
          blur-[100px]
          sm:blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          hero-green-glow
          absolute
          -bottom-32
          -left-32
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-[#25D366]/15
          blur-[100px]
          sm:blur-[140px]
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          min-h-[100svh]
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          pt-32
          pb-28
          md:pt-40
          md:pb-20
          flex
          items-center
        "
      >
        <div className="w-full max-w-5xl">

          {/* =================================================
              BADGE
          ================================================= */}

          <div
            className="
              hero-badge
              inline-flex
              items-center
              gap-2
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              px-4
              py-2.5
              rounded-full
              text-white
              font-medium
              text-xs
              sm:text-sm
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#25D366]
                shadow-[0_0_12px_rgba(37,211,102,0.8)]
              "
            />

            {t.hero.badge}
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              hero-title
              mt-7
              sm:mt-8
              font-bold
              text-white
              leading-[1.08]
              tracking-[-0.025em]
              text-[clamp(2.7rem,9vw,4.5rem)]
              sm:text-5xl
              md:text-6xl
              lg:text-[5.5rem]
              max-w-5xl
              [perspective:800px]
            "
          >
            <span
              className="
                hero-title-line
                block
                whitespace-normal
                break-words
              "
            >
              {t.hero.title1}
            </span>

            <span
              className="
                hero-title-line
                block
                whitespace-normal
                break-words
                text-[#67DFFF]
              "
            >
              {t.hero.title2}
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              hero-text
              mt-7
              sm:mt-8
              text-white/75
              text-[15px]
              sm:text-lg
              md:text-xl
              max-w-2xl
              leading-7
              sm:leading-8
            "
          >
            {t.hero.text}
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              hero-buttons
              flex
              flex-col
              sm:flex-row
              gap-3
              sm:gap-4
              mt-8
              sm:mt-10
              max-w-xl
            "
          >

            {/* CALL */}

            <a
              href="tel:+919494239260"
              className="
                group
                relative
                overflow-hidden
                w-full
                sm:w-auto
                min-h-[54px]
                flex
                items-center
                justify-center
                bg-white
                text-[#031B60]
                px-7
                py-4
                rounded-full
                font-bold
                text-center
                shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                hover:-translate-y-1
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              <span className="relative z-10">
                {t.navbar.callNow}
              </span>

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-[#00A3E0]/20
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                "
              />
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919494239260?text=Hello%20SR%20Cleaning%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                w-full
                sm:w-auto
                min-h-[54px]
                flex
                items-center
                justify-center
                bg-[#25D366]
                text-white
                px-7
                py-4
                rounded-full
                font-bold
                text-center
                shadow-[0_14px_35px_rgba(37,211,102,0.22)]
                hover:bg-[#1FBD5B]
                hover:-translate-y-1
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              <span className="relative z-10">
                {t.navbar.whatsapp}
              </span>

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                "
              />
            </a>

            {/* EMAIL */}

            <a
              href="mailto:services.srcleaningsolutions@gmail.com"
              className="
                w-full
                sm:w-auto
                min-h-[54px]
                flex
                items-center
                justify-center
                bg-white/10
                border
                border-white/20
                backdrop-blur-xl
                text-white
                px-7
                py-4
                rounded-full
                font-bold
                text-center
                hover:bg-white/15
                hover:border-white/30
                hover:-translate-y-1
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              📧 Email Us
            </a>

          </div>

          {/* =================================================
              TRUST ITEMS
          ================================================= */}

          <div
            className="
              mt-10
              sm:mt-12
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              max-w-4xl
            "
          >

            {/* SATISFACTION */}

            <div
              className="
                hero-stat
                relative
                overflow-hidden
                bg-white/[0.08]
                border
                border-white/15
                backdrop-blur-xl
                rounded-2xl
                p-4
                sm:p-5
                text-white
                text-sm
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-16
                  h-px
                  bg-[#25D366]
                "
              />

              <span className="text-[#25D366] font-bold mr-1">
                ✓
              </span>

              {t.hero.satisfaction}
            </div>

            {/* TRUSTED SERVICE */}

            <div
              className="
                hero-stat
                relative
                overflow-hidden
                bg-white/[0.08]
                border
                border-white/15
                backdrop-blur-xl
                rounded-2xl
                p-4
                sm:p-5
                text-white
                text-sm
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-16
                  h-px
                  bg-[#00A3E0]
                "
              />

              <span className="text-[#25D366] font-bold mr-1">
                ✓
              </span>

              {t.hero.trusted}
            </div>

            {/* SUPPLIES */}

            <div
              className="
                hero-stat
                hidden
                sm:block
                relative
                overflow-hidden
                bg-white/[0.08]
                border
                border-white/15
                backdrop-blur-xl
                rounded-2xl
                p-4
                sm:p-5
                text-white
                text-sm
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-16
                  h-px
                  bg-[#25D366]
                "
              />

              <span className="text-[#25D366] font-bold mr-1">
                ✓
              </span>

              {t.hero.supplies}
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          hero-scroll
          hidden
          md:flex
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          items-center
          gap-3
          text-white/60
          text-xs
          tracking-[0.2em]
          uppercase
        "
      >
        <span
          className="
            w-10
            h-px
            bg-white/30
          "
        />

        <span>
          Scroll Down
        </span>

        <span
          className="
            w-10
            h-px
            bg-white/30
          "
        />
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#eef8ff]
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}