"use client";
import { Phone } from "lucide-react";
export default function FloatingButtons() {
  return (
    <>
      {/* =====================================================
          DESKTOP FLOATING BUTTONS
      ====================================================== */}

      <div
        className="
          hidden
          md:flex
          fixed
          bottom-6
          right-5
          z-50
          flex-col
          gap-3
        "
      >
        {/* CALL */}
        <a
          href="tel:+919494239260"
          aria-label="Call SR Cleaning Solutions"
          className="
            group
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#031B60]
            text-white
            shadow-[0_12px_30px_rgba(3,27,96,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-110
            hover:bg-[#00A3E0]
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
              transition-all
              duration-500
              group-hover:scale-125
              group-hover:border-[#00A3E0]/50
            "
          />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919494239260"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp SR Cleaning Solutions"
          className="
            group
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#25D366]
            text-white
            shadow-[0_12px_30px_rgba(37,211,102,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-110
            hover:bg-[#1FBD5B]
          "
        >
          <img
            src="/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className="
              relative
              z-10
              h-7
              w-7
              object-contain
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
              transition-all
              duration-500
              group-hover:scale-125
              group-hover:border-[#25D366]/50
            "
          />
        </a>
      </div>

      {/* =====================================================
          MOBILE STICKY BAR
      ====================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          z-50
          grid
          w-full
          grid-cols-2
          border-t
          border-[#D8E8F8]
          bg-white/95
          shadow-[0_-10px_35px_rgba(3,27,96,0.12)]
          backdrop-blur-xl
          md:hidden
          pb-[env(safe-area-inset-bottom)]
        "
      >

        {/* CALL */}
        <a
          href="tel:+919494239260"
          aria-label="Call SR Cleaning Solutions"
          className="
            group
            relative
            flex
            min-h-[68px]
            items-center
            justify-center
            gap-2
            overflow-hidden
            bg-[#031B60]
            py-4
            text-sm
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#00A3E0]
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
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

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919494239260"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp SR Cleaning Solutions"
          className="
            group
            relative
            flex
            min-h-[68px]
            items-center
            justify-center
            gap-2
            overflow-hidden
            bg-[#25D366]
            py-4
            text-sm
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#1FBD5B]
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
          <img
            src="/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className="
              relative
              z-10
              h-6
              w-6
              object-contain
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