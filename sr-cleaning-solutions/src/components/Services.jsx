"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.standard,
      badge: t.services.maintenance,
      items: t.services.standardItems,
      featured: false,
    },
    {
      title: t.services.deep,
      badge: t.services.requested,
      items: t.services.deepItems,
      featured: true,
    },
    {
      title: t.services.move,
      badge: t.services.vacant,
      items: t.services.moveItems,
      featured: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = document.querySelector(".services-header");
      const cards = gsap.utils.toArray(".service-card");

      if (!header || !cards.length) return;

      /*
       * Header animation
       */
      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            once: true,
          },
        }
      );

      /*
       * Cards animation
       *
       * Important:
       * The cards are only hidden when they are actually
       * close to entering the viewport.
       *
       * This prevents blank cards when navigating directly
       * to #services.
       */
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        md:py-32
        bg-[#eef8ff]
      "
    >

      {/* Ambient cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#00A3E0]/10
          blur-[120px]
        "
      />

      {/* Ambient green glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#25D366]/10
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* Section heading */}

        <div className="services-header max-w-3xl">

          <span
            className="
              inline-flex
              items-center
              gap-3
              text-[#00A3E0]
              uppercase
              tracking-[0.22em]
              text-[11px]
              sm:text-xs
              font-bold
            "
          >
            <span className="w-8 h-px bg-[#00A3E0]" />

            {t.services.label}
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-[#031B60]
              mt-4
              tracking-[-0.045em]
              leading-[0.98]
            "
          >
            {t.services.heading}
          </h2>

          <p
            className="
              text-[#506482]
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
            "
          >
            {t.services.subtitle}
          </p>

        </div>

        {/* Service cards */}

        <div
          className="
            services-grid
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
            mt-12
            sm:mt-14
            lg:mt-20
          "
        >

          {services.map((service, index) => (
            <div
              key={index}
              className={`
                service-card
                group
                relative
                overflow-hidden
                flex
                flex-col
                min-h-[500px]
                sm:min-h-[530px]
                p-6
                sm:p-7
                lg:p-8
                rounded-[24px]
                border
                transition-all
                duration-500
                hover:-translate-y-2
                ${
                  service.featured
                    ? `
                      bg-[#031B60]
                      border-[#031B60]
                      shadow-[0_25px_60px_rgba(3,27,96,0.20)]
                      lg:-translate-y-3
                    `
                    : `
                      bg-white
                      border-[#cfe5f5]
                      shadow-[0_15px_40px_rgba(3,27,82,0.07)]
                      hover:border-[#9ed9f1]
                      hover:shadow-[0_25px_55px_rgba(3,27,82,0.13)]
                    `
                }
              `}
            >

              {/* Top accent */}

              <div
                className={`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  ${
                    service.featured
                      ? "bg-gradient-to-r from-[#25D366] via-[#00A3E0] to-[#25D366]"
                      : "bg-gradient-to-r from-[#00A3E0] to-[#25D366]"
                  }
                `}
              />

              {/* Featured badge */}

              {service.featured && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-[#25D366]
                    text-white
                    text-[10px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    px-3
                    py-2
                    rounded-full
                    shadow-[0_8px_22px_rgba(37,211,102,0.22)]
                  "
                >
                  {t.services.requested}
                </div>
              )}

              {/* Number */}

              <div
                className={`
                  text-5xl
                  sm:text-6xl
                  font-bold
                  tracking-[-0.06em]
                  leading-none
                  ${
                    service.featured
                      ? "text-white/10"
                      : "text-[#031B60]/[0.07]"
                  }
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Badge */}

              <div
                className={`
                  mt-8
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  font-bold
                  ${
                    service.featured
                      ? "text-[#67DFFF]"
                      : "text-[#00A3E0]"
                  }
                `}
              >
                {service.badge}
              </div>

              {/* Title */}

              <h3
                className={`
                  text-2xl
                  sm:text-3xl
                  font-bold
                  mt-3
                  tracking-tight
                  ${
                    service.featured
                      ? "text-white"
                      : "text-[#031B60]"
                  }
                `}
              >
                {service.title}
              </h3>

              {/* Items */}

              <ul className="mt-7 space-y-4 flex-1">

                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className={`
                      flex
                      items-start
                      gap-3
                      text-sm
                      sm:text-[15px]
                      leading-6
                      ${
                        service.featured
                          ? "text-white/75"
                          : "text-[#506482]"
                      }
                    `}
                  >

                    <span
                      className={`
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        shrink-0
                        mt-0.5
                        rounded-full
                        text-[11px]
                        font-bold
                        ${
                          service.featured
                            ? "bg-[#25D366] text-white"
                            : "bg-[#25D366]/10 text-[#1FBD5B]"
                        }
                      `}
                    >
                      ✓
                    </span>

                    <span>{item}</span>

                  </li>
                ))}

              </ul>

              {/* CTA */}

              <a
                href="tel:+919494239260"
                className={`
                  relative
                  overflow-hidden
                  mt-8
                  min-h-[52px]
                  flex
                  items-center
                  justify-center
                  w-full
                  rounded-full
                  font-bold
                  text-sm
                  transition-all
                  duration-300
                  ${
                    service.featured
                      ? `
                        bg-white
                        text-[#031B60]
                        shadow-[0_12px_30px_rgba(0,0,0,0.16)]
                        hover:bg-[#25D366]
                        hover:text-white
                      `
                      : `
                        bg-[#031B60]
                        text-white
                        shadow-[0_10px_25px_rgba(3,27,96,0.14)]
                        hover:bg-[#00A3E0]
                      `
                  }
                `}
              >

                <span className="relative z-10">
                  {t.services.book}
                </span>

                {/* Shine animation */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    hover:translate-x-full
                  "
                />

              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}