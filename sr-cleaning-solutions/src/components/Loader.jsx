"use client";

export default function Loader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#031B60]
      "
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#00A3E0]/20
          blur-[100px]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          rounded-full
          bg-[#25D366]/15
          blur-[80px]
          animate-pulse
        "
      />

      {/* Loader content */}
      <div
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        {/* Premium loading mark */}
        <div
          className="
            relative
            w-16
            h-16
            mb-8
            rounded-full
            border
            border-white/15
            bg-white/[0.04]
            backdrop-blur-xl
          "
        >
          <div
            className="
              absolute
              inset-1
              rounded-full
              border-2
              border-transparent
              border-t-[#00A3E0]
              border-r-[#25D366]
              animate-spin
            "
          />

          <div
            className="
              absolute
              inset-[11px]
              rounded-full
              bg-[#031B60]
              border
              border-white/10
            "
          />
        </div>

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-white
            animate-pulse
          "
        >
          SR Cleaning Solutions
        </h1>

        {/* Loading line */}
        <div
          className="
            mt-6
            h-1
            w-24
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <div
            className="
              h-full
              w-1/2
              rounded-full
              bg-gradient-to-r
              from-[#00A3E0]
              to-[#25D366]
              animate-[loader_1.4s_ease-in-out_infinite]
            "
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loader {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
    </div>
  );
}