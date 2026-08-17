"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Equipment() {
  const { t } = useLanguage();
  const e = t.equipment;

  const equipment = [
    {
      name: e.vacuum,
      description: e.vacuumDescription,
      image: "/vacuum-cleaner.jpg",
    },
    {
      name: e.scrubber,
      description: e.scrubberDescription,
      image: "/mini-hand-scrubber.jpg",
    },
    {
      name: e.blower,
      description: e.blowerDescription,
      image: "/mini-blower.jpg",
    },
  ];

  return (
    <section
      id="equipment"
      className="
        relative
        overflow-hidden
        bg-[#F4F9FF]
        py-16
        sm:py-20
        md:py-28
      "
    >
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -right-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#00A3E0]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#25D366]/10
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D8E8F8]
              bg-white
              px-4
              py-2
              text-[11px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#00A3E0]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#25D366]
              "
            />

            {e.label}
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-[#031B60]
            "
          >
            {e.heading}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              text-[#506482]
            "
          >
            {e.subtitle}
          </p>
        </div>

        {/* Equipment cards */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {equipment.map((item) => (
            <article
              key={item.name}
              className="
                group
                overflow-hidden
                rounded-[24px]
                border
                border-[#D8E8F8]
                bg-white
                shadow-[0_12px_35px_rgba(3,27,96,0.07)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#B9DFF1]
                hover:shadow-[0_20px_45px_rgba(3,27,96,0.12)]
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  flex
                  h-[230px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#F7FBFF]
                  sm:h-[250px]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-6
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div className="p-5 sm:p-6">

                <div className="flex items-start gap-3">

                  <span
                    className="
                      mt-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#25D366]/10
                      text-[#1FBD5B]
                    "
                  >
                    ✓
                  </span>

                  <div className="min-w-0">

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        leading-tight
                        text-[#031B60]
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#506482]
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Accuracy note */}

        <div
          className="
            mx-auto
            mt-7
            max-w-3xl
            rounded-2xl
            border
            border-[#D8E8F8]
            bg-white
            p-4
            text-center
            sm:p-5
          "
        >
          <p
            className="
              text-xs
              sm:text-sm
              leading-6
              text-[#506482]
            "
          >
            {e.note}
          </p>
        </div>

      </div>
    </section>
  );
}