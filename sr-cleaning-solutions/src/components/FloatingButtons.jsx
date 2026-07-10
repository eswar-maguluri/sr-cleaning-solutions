"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Floating Buttons */}

      <div className="hidden md:block">

        <a
          href="tel:+919494239260"
          className="
          fixed
          bottom-24
          right-5
          z-50
          bg-yellow-500
          text-black
          p-4
          rounded-full
          shadow-lg
          hover:scale-110
          transition
          "
        >
          <Phone size={24} />
        </a>

        <a
          href="https://wa.me/919494239260"
          className="
          fixed
          bottom-5
          right-5
          z-50
          bg-green-500
          text-white
          p-4
          rounded-full
          shadow-lg
          animate-pulse
          hover:scale-110
          transition
          "
        >
          <MessageCircle size={24} />
        </a>

      </div>

      {/* Mobile Sticky Bar */}

      <div
        className="
        md:hidden
        fixed
        bottom-0
        left-0
        w-full
        z-50
        bg-[#081120]
        border-t
        border-white/10
        grid
        grid-cols-2
        "
      >

        <a
          href="tel:+919494239260"
          className="
          flex
          items-center
          justify-center
          gap-2
          py-4
          bg-yellow-500
          text-black
          font-bold
          "
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href="https://wa.me/919494239260"
          className="
          flex
          items-center
          justify-center
          gap-2
          py-4
          bg-green-500
          text-white
          font-bold
          "
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

      </div>
    </>
  );
}