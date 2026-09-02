"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".about-heading", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(".about-line", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.8,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(".about-text", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.35,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        md:py-32
        bg-[#F4F9FF]
      "
    >
      {/* Background atmosphere */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#00A3E0]/10
          blur-[130px]
          pointer-events-none
        "
      />
      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#25D366]/10
          blur-[130px]
          pointer-events-none
        "
      />
      {/* Subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          pointer-events-none
          bg-[linear-gradient(rgba(3,27,96,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(3,27,96,0.7)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />
      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-5
          sm:px-6
          text-center
        "
      >
        {/* Eyebrow */}
        <div
          className="
            about-eyebrow
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border
            border-[#D8E8F8]
            shadow-[0_8px_25px_rgba(3,27,96,0.06)]
          "
        >
          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-[#25D366]
              shadow-[0_0_12px_rgba(37,211,102,0.7)]
            "
          />
          <span
            className="
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#031B60]
            "
          >
            About
          </span>
        </div>
        {/* Heading */}
        <h2
          className="
            about-heading
            mt-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-[#031B60]
            tracking-[-0.045em]
            leading-[1.05]
          "
        >
          {t.about.heading}
        </h2>
        {/* Accent */}
        <div
          className="
            about-line
            mx-auto
            mt-7
            h-1
            w-16
            sm:w-20
            rounded-full
            bg-gradient-to-r
            from-[#031B60]
            via-[#00A3E0]
            to-[#25D366]
          "
        />
        {/* Content */}
        <div
          className="
            about-text
            relative
            mt-8
            sm:mt-10
            md:mt-12
            rounded-[24px]
            sm:rounded-[30px]
            bg-white/80
            backdrop-blur-xl
            border
            border-[#D8E8F8]
            p-6
            sm:p-8
            md:p-10
            shadow-[0_20px_60px_rgba(3,27,96,0.07)]
          "
        >
          {/* Decorative quote mark */}
          <div
            className="
              absolute
              top-3
              left-5
              sm:top-4
              sm:left-7
              text-6xl
              sm:text-7xl
              font-serif
              font-bold
              text-[#00A3E0]/10
              leading-none
              pointer-events-none
            "
          >
            “
          </div>
          <p
            className="
              relative
              z-10
              text-base
              sm:text-lg
              md:text-xl
              text-[#506482]
              leading-[1.8]
              md:leading-[1.9]
            "
          >
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}