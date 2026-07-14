"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  useEffect(() => {
    gsap.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
    gsap.from(".hero-title", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      delay: 0.2,
    });
    gsap.from(".hero-text", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.8,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2200&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 pt-24 md:pt-0">
        <div
          className="
          hero-badge
          inline-flex
          border
          border-white/20
          backdrop-blur-xl
          px-4
          py-2
          rounded-full
          text-white
          text-xs
          sm:text-sm
          "
        >
          {t.hero.badge}
        </div>
        <h1
          className="
          hero-title
          mt-6
          font-bold
          text-white
          leading-[1]
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-8xl
          max-w-5xl
          "
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </h1>
        <p
          className="
          hero-text
          mt-6
          text-slate-300
          text-base
          sm:text-lg
          md:text-xl
          max-w-3xl
          leading-relaxed
          "
        >
          {t.hero.text}
        </p>
        <div
          className="
          hero-buttons
          flex
          flex-col
          sm:flex-row
          gap-4
          mt-8
          "
        >
          <a
            href="tel:+919494239260"
            className="
            w-full
            sm:w-auto
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            px-6
            py-4
            rounded-full
            font-bold
            text-center
            transition-all
            duration-300
            shadow-lg
            shadow-yellow-500/20
            "
          >
            {t.navbar.callNow}
          </a>
          <a
            href="https://wa.me/919494239260"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-full
            sm:w-auto
            border
            border-white/20
            backdrop-blur-xl
            text-white
            px-6
            py-4
            rounded-full
            text-center
            hover:bg-white/10
            transition-all
            duration-300
            "
          >
            {t.navbar.whatsapp}
          </a>
          <a
            href="mailto:services.srcleaningsolutions@gmail.com"
            className="
            w-full
            sm:w-auto
            border
          border-blue-400/30
          text-white
            px-6
            py-4
            rounded-full
            text-center
          hover:bg-blue-500/10
            transition-all
            duration-300
            "
            >
            📧 Email Us
          </a>
        </div>
        <div
          className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-3
          max-w-4xl
          "
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-sm">
            ✓ {t.hero.satisfaction}
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-sm">
            ✓ {t.hero.trusted}
          </div>
          <div className="hidden sm:block bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-sm">
            ✓ {t.hero.supplies}
          </div>
        </div>
      </div>
      <div
        className="
        hidden md:flex
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-white/60
        text-sm
        animate-bounce
        "
      >
        Scroll Down
      </div>
    </section>
  );
}