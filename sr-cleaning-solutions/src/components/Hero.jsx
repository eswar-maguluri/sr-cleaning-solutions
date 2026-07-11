"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gold Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 pt-24 md:pt-0">

        {/* Badge */}
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
          Certified Independent Cleaner
        </div>

        {/* Heading */}
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
          A Spotless Home.
          <br />
          No Effort Required.
        </h1>

        {/* Description */}
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
          We handle the dusting, deep scrubbing, and heavy lifting so you
          come home to absolute peace. Thorough, reliable, and tailored
          entirely to your lifestyle.
        </p>

        {/* Buttons */}
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
            Call +91 9494239260
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
            WhatsApp Us
          </a>
        </div>

        {/* Trust Badges */}
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
            ✓ 100% Satisfaction
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-sm">
            ✓ Trusted Service
          </div>

          <div className="hidden sm:block bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-sm">
            ✓ All Supplies Provided
          </div>
        </div>
      </div>

      {/* Desktop Scroll Indicator */}
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