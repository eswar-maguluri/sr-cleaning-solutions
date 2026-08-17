"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Udyam() {
  const { t } = useLanguage();
  const u = t.udyam;

  return (
    <section
      id="udyam"
      className="
        relative
        overflow-hidden
        bg-[#F4F9FF]
        py-14
        sm:py-18
        md:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#D8E8F8]
            bg-gradient-to-br
            from-white
            to-[#F3FFF7]
            p-6
            sm:p-8
            md:p-10
            shadow-[0_16px_45px_rgba(3,27,96,0.06)]
          "
        >
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-48
              w-48
              rounded-full
              bg-[#25D366]/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-48
              w-48
              rounded-full
              bg-[#00A3E0]/10
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="flex items-start gap-3">

              <div
                className="
                  mt-1
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#25D366]/10
                  text-[#031B60]
                "
              >
                ✓
              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#031B60]
                  "
                >
                  {u.businessRegistration}
                </p>

                <h2
                  className="
                    mt-1
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    leading-tight
                    text-[#031B60]
                  "
                >
                  {u.heading}
                </h2>

              </div>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-3xl
                text-sm
                sm:text-base
                leading-7
                text-[#506482]
              "
            >
              {u.description}
            </p>

            {/* =================================================
                UDYAM NUMBER
            ================================================= */}

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-[#D8E8F8]
                bg-white/80
                p-5
                sm:p-6
              "
            >
              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#506482]
                "
              >
                {u.registrationNumber}
              </p>

              <p
                className="
                  mt-2
                  break-all
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  tracking-wide
                  text-[#031B60]
                "
              >
                UDYAM-AP-04-0144332
              </p>
            </div>

            {/* =================================================
                BUSINESS INFORMATION
            ================================================= */}

            <div className="mt-5">

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#506482]
                "
              >
                {u.majorActivity}
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  sm:text-base
                  leading-7
                  text-[#031B60]
                "
              >
                {u.activity}
              </p>

            </div>

            {/* =================================================
                VERIFICATION BUTTON
            ================================================= */}

            <a
              href="https://udyamregistration.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#031B60]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#00A3E0]
              "
            >
              {u.verify}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}