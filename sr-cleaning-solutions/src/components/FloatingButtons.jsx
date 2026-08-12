"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Floating Buttons */}

      <div className="hidden md:flex fixed bottom-6 right-5 z-50 flex-col gap-3">

        <a
          href="tel:+919494239260"
          aria-label="Call SR Cleaning Solutions"
          className="
            group
            relative
            w-14
            h-14
            flex
            items-center
            justify-center
            bg-[#031B60]
            text-white
            rounded-full
            border
            border-white/20
            shadow-[0_12px_30px_rgba(3,27,96,0.25)]
            hover:bg-[#00A3E0]
            hover:scale-110
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <Phone
            size={23}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:rotate-[-8deg]
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              border
              border-[#00A3E0]/0
              group-hover:border-[#00A3E0]/50
              group-hover:scale-125
              transition-all
              duration-500
            "
          />
        </a>


        <a
          href="https://wa.me/919494239260"
          aria-label="WhatsApp SR Cleaning Solutions"
          className="
            group
            relative
            w-14
            h-14
            flex
            items-center
            justify-center
            bg-[#25D366]
            text-white
            rounded-full
            border
            border-white/20
            shadow-[0_12px_30px_rgba(37,211,102,0.25)]
            hover:bg-[#1FBD5B]
            hover:scale-110
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <MessageCircle
            size={23}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              border
              border-[#25D366]/0
              group-hover:border-[#25D366]/50
              group-hover:scale-125
              transition-all
              duration-500
            "
          />
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
          bg-white/95
          backdrop-blur-xl
          border-t
          border-[#D8E8F8]
          grid
          grid-cols-2
          shadow-[0_-10px_35px_rgba(3,27,96,0.12)]
          pb-[env(safe-area-inset-bottom)]
        "
      >

        <a
          href="tel:+919494239260"
          className="
            group
            relative
            flex
            items-center
            justify-center
            gap-2
            min-h-[68px]
            py-4
            bg-[#031B60]
            hover:bg-[#00A3E0]
            text-white
            font-bold
            text-sm
            transition-all
            duration-300
            overflow-hidden
          "
        >
          <span
            className="
              absolute
              inset-0
              -translate-x-full
              group-hover:translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              transition-transform
              duration-700
            "
          />

          <Phone
            size={19}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-active:scale-90
            "
          />

          <span className="relative z-10">
            Call Now
          </span>
        </a>


        <a
          href="https://wa.me/919494239260"
          className="
            group
            relative
            flex
            items-center
            justify-center
            gap-2
            min-h-[68px]
            py-4
            bg-[#25D366]
            hover:bg-[#1FBD5B]
            text-white
            font-bold
            text-sm
            transition-all
            duration-300
            overflow-hidden
          "
        >
          <span
            className="
              absolute
              inset-0
              -translate-x-full
              group-hover:translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform
              duration-700
            "
          />

          <MessageCircle
            size={19}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-active:scale-90
            "
          />

          <span className="relative z-10">
            WhatsApp
          </span>
        </a>

      </div>
    </>
  );
}