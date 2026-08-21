"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ size = 21 }) {
  return (
    <img
      src="/whatsapp.svg"
      alt=""
      aria-hidden="true"
      className="shrink-0 object-contain"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

/* =========================================================
   SERVICES
========================================================= */

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  /* =========================================================
     SELECTED BHK

     Each service has its own selected BHK.
  ========================================================= */

  const [selectedBhk, setSelectedBhk] = useState({
    "01": "1 BHK",
    "02": "1 BHK",
  });

  /* =========================================================
     SERVICE DATA
  ========================================================= */

  const services = [
    {
      number: "01",
      badge: s.routine,

      title: s.standard,
      description: s.standardDescription,

      price: "₹1,799",
      priceLabel: s.startsFrom,
      size: "1 BHK",

      bhkPrices: [
        {
          bhk: "1 BHK",
          price: "₹1,799",
        },
        {
          bhk: "2 BHK",
          price: "₹2,499",
        },
        {
          bhk: "3 BHK",
          price: "₹4,499",
        },
      ],

      method: s.manualCleaning,
      duration: s.confirmedScope,
      items: s.standardItems,

      sectionTitle: s.materials,

      tags: [
        s.generalCleaners,
        s.manualTools,
      ],

      featured: false,

      buttonText: s.bookEnquire,
      buttonType: "phone",
    },

    {
      number: "02",
      badge: s.intensive,

      title: s.deep,
      description: s.deepDescription,

      price: "₹3,499",
      priceLabel: s.startsFrom,
      size: "1 BHK",

      bhkPrices: [
        {
          bhk: "1 BHK",
          price: "₹3,499",
        },
        {
          bhk: "2 BHK",
          price: "₹4,999",
        },
        {
          bhk: "3 BHK",
          price: "₹8,999",
        },
      ],

      method: s.manualEquipment,
      duration: s.confirmedScope,
      items: s.deepItems,

      sectionTitle: s.equipmentMaterials,

      tags: [
        s.vacuum,
        s.miniScrubber,
        s.miniBlower,
        s.professionalCleaners,
      ],

      featured: true,

      buttonText: s.bookEnquire,
      buttonType: "phone",
    },

    {
      number: "03",
      badge: s.moveInOut,

      title: s.move,
      description: s.moveDescription,

      price: s.quote,
      priceLabel: s.pricing,
      size: s.scopeBased,

      method: s.availableEquipment,
      duration: s.confirmedAfterScope,

      items: s.moveItems,

      sectionTitle: s.equipmentWhereSuitable,

      tags: [
        s.vacuum,
        s.miniScrubber,
        s.miniBlower,
      ],

      featured: false,

      buttonText: s.requestQuote,
      buttonType: "whatsapp",
    },
  ];

  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = document.querySelector(
        ".services-header"
      );

      const cards = gsap.utils.toArray(
        ".service-card"
      );

      if (!header || !cards.length) return;

      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 30,
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

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 92%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#eef8ff]
        py-16
        sm:py-20
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#00A3E0]/10
          blur-[110px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#25D366]/10
          blur-[120px]
          sm:h-[450px]
          sm:w-[450px]
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
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="services-header max-w-3xl">
          <span
            className="
              inline-flex
              items-center
              gap-3
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#00A3E0]
              sm:text-xs
            "
          >
            <span className="h-px w-7 bg-[#00A3E0]" />

            {s.label}
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#031B60]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {s.heading}
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#506482]
              sm:text-base
              md:text-lg
            "
          >
            {s.subtitle}
          </p>
        </div>

        {/* ===================================================
            SERVICE CARDS
        ==================================================== */}

        <div
          className="
            services-grid
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            md:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:items-stretch
            lg:gap-6
          "
        >
          {services.map((service) => (
            <article
              key={service.number}
              className={`
                service-card
                group
                relative
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                sm:rounded-[26px]
                sm:p-6
                lg:p-7

                ${
                  service.featured
                    ? `
                      border-[#031B60]
                      bg-[#031B60]
                      shadow-[0_20px_55px_rgba(3,27,96,0.20)]
                    `
                    : `
                      border-[#d5e5f2]
                      bg-white
                      shadow-[0_15px_40px_rgba(3,27,96,0.07)]
                      hover:border-[#9ed9f1]
                      hover:shadow-[0_22px_50px_rgba(3,27,96,0.12)]
                    `
                }
              `}
            >
              {/* =================================================
                  TOP ACCENT
              ================================================== */}

              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full

                  ${
                    service.featured
                      ? "bg-gradient-to-r from-[#25D366] via-[#00A3E0] to-[#25D366]"
                      : "bg-gradient-to-r from-[#00A3E0] to-[#25D366]"
                  }
                `}
              />

              {/* =================================================
                  TITLE

                  BADGES REMOVED
                  No:
                  01 · Routine Cleaning
                  02 · Intensive Cleaning
                  03 · Move-In / Move-Out
              ================================================== */}

              <h3
                className={`
                  mt-3
                  text-xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-2xl
                  md:text-3xl

                  ${
                    service.featured
                      ? "text-white"
                      : "text-[#031B60]"
                  }
                `}
              >
                {service.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  sm:text-[15px]

                  ${
                    service.featured
                      ? "text-white/70"
                      : "text-[#506482]"
                  }
                `}
              >
                {service.description}
              </p>

              {/* =================================================
                  BHK PRICING
                  HORIZONTAL TABS
              ================================================== */}

              {service.bhkPrices ? (
                <div className="mt-7">
                  {/* Small label */}

                  <p
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      sm:text-xs

                      ${
                        service.featured
                          ? "text-white/50"
                          : "text-[#71839c]"
                      }
                    `}
                  >
                    Choose your home size
                  </p>

                  {/* =================================================
                      TABS
                  ================================================== */}

                  <div
                    className={`
                      mt-4
                      grid
                      grid-cols-3
                      border-b

                      ${
                        service.featured
                          ? "border-white/15"
                          : "border-[#d8e8f8]"
                      }
                    `}
                  >
                    {service.bhkPrices.map((item) => {
                      const isSelected =
                        selectedBhk[service.number] ===
                        item.bhk;

                      return (
                        <button
                          key={item.bhk}
                          type="button"
                          onClick={() =>
                            setSelectedBhk(
                              (previous) => ({
                                ...previous,
                                [service.number]:
                                  item.bhk,
                              })
                            )
                          }
                          aria-pressed={isSelected}
                          className="
                            relative
                            flex
                            min-h-[72px]
                            flex-col
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-center
                            transition-all
                            duration-300
                          "
                        >
                          {/* BHK */}

                          <span
                            className={`
                              text-xs
                              font-bold
                              sm:text-sm

                              ${
                                isSelected
                                  ? service.featured
                                    ? "text-white"
                                    : "text-[#031B60]"
                                  : service.featured
                                    ? "text-white/50"
                                    : "text-[#71839c]"
                              }
                            `}
                          >
                            {item.bhk}
                          </span>

                          {/* PRICE */}

                          <span
                            className={`
                              mt-1
                              text-sm
                              font-extrabold
                              tracking-tight
                              sm:text-base

                              ${
                                isSelected
                                  ? service.featured
                                    ? "text-white"
                                    : "text-[#031B60]"
                                  : service.featured
                                    ? "text-white/50"
                                    : "text-[#71839c]"
                              }
                            `}
                          >
                            {item.price}
                          </span>

                          {/* ACTIVE UNDERLINE */}

                          <span
                            className={`
                              absolute
                              bottom-[-1px]
                              left-1/2
                              h-[3px]
                              -translate-x-1/2
                              rounded-full
                              transition-all
                              duration-300

                              ${
                                isSelected
                                  ? service.featured
                                    ? "w-12 bg-[#25D366]"
                                    : "w-12 bg-[#00A3E0]"
                                  : "w-0 bg-transparent"
                              }
                            `}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* =================================================
                      SELECTED PRICE SUMMARY
                  ================================================== */}

                  <div
                    className={`
                      mt-4
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3

                      ${
                        service.featured
                          ? "bg-white/[0.07]"
                          : "bg-[#f4faff]"
                      }
                    `}
                  >
                    <div>
                      <p
                        className={`
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]

                          ${
                            service.featured
                              ? "text-white/40"
                              : "text-[#71839c]"
                          }
                        `}
                      >
                        Selected
                      </p>

                      <p
                        className={`
                          mt-0.5
                          text-sm
                          font-bold

                          ${
                            service.featured
                              ? "text-white"
                              : "text-[#031B60]"
                          }
                        `}
                      >
                        {selectedBhk[service.number]}
                      </p>
                    </div>

                    <p
                      className={`
                        text-xl
                        font-extrabold
                        tracking-tight

                        ${
                          service.featured
                            ? "text-white"
                            : "text-[#031B60]"
                        }
                      `}
                    >
                      {
                        service.bhkPrices.find(
                          (item) =>
                            item.bhk ===
                            selectedBhk[
                              service.number
                            ]
                        )?.price
                      }
                    </p>
                  </div>
                </div>
              ) : (
                /* =================================================
                   MOVE-IN / MOVE-OUT PRICE
                ================================================== */

                <div className="mt-7">
                  <p
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      ${
                        service.featured
                          ? "text-white/50"
                          : "text-[#71839c]"
                      }
                    `}
                  >
                    {service.priceLabel}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-3">
                    <p
                      className={`
                        text-3xl
                        font-extrabold
                        tracking-tight
                        sm:text-4xl

                        ${
                          service.featured
                            ? "text-white"
                            : "text-[#031B60]"
                        }
                      `}
                    >
                      {service.price}
                    </p>

                    <span
                      className={`
                        pb-1
                        text-xs

                        ${
                          service.featured
                            ? "text-white/60"
                            : "text-[#506482]"
                        }
                      `}
                    >
                      {service.size}
                    </span>
                  </div>
                </div>
              )}

              {/* =================================================
                  METHOD / DURATION
              ================================================== */}

              <div className="mt-5 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2">
                <InfoBox
                  label={s.method}
                  value={service.method}
                  featured={service.featured}
                />

                <InfoBox
                  label={s.duration}
                  value={service.duration}
                  featured={service.featured}
                />
              </div>

              {/* =================================================
                  INCLUDED SERVICES
              ================================================== */}

              <ul className="mt-6 space-y-3">
                {service.items.map((item, index) => (
                  <li
                    key={index}
                    className={`
                      flex
                      items-start
                      gap-2.5
                      text-sm
                      leading-5

                      ${
                        service.featured
                          ? "text-white/75"
                          : "text-[#506482]"
                      }
                    `}
                  >
                    <span
                      className={`
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        ${
                          service.featured
                            ? "bg-[#25D366] text-white"
                            : "bg-[#25D366]/10 text-[#1FBD5B]"
                        }
                      `}
                    >
                      <Check
                        size={12}
                        strokeWidth={3}
                      />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* =================================================
                  EQUIPMENT / MATERIALS
              ================================================== */}

              <div
                className={`
                  mt-6
                  border-t
                  pt-5

                  ${
                    service.featured
                      ? "border-white/15"
                      : "border-[#d8e8f8]"
                  }
                `}
              >
                <p
                  className={`
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    sm:text-xs

                    ${
                      service.featured
                        ? "text-white/55"
                        : "text-[#506482]"
                    }
                  `}
                >
                  {service.sectionTitle}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        rounded-full
                        border
                        px-3
                        py-2
                        text-[11px]
                        font-semibold
                        sm:text-xs

                        ${
                          service.featured
                            ? `
                              border-white/15
                              bg-white/10
                              text-white/80
                            `
                            : `
                              border-[#cce7f8]
                              bg-[#f4faff]
                              text-[#08679a]
                            `
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-7 pt-1">
                {service.buttonType === "whatsapp" ? (
                  <a
                    href="https://wa.me/919494239260"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp SR Cleaning Solutions"
                    className="
                      flex
                      min-h-[54px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#031B60]
                      px-5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(3,27,96,0.14)]
                      transition-all
                      duration-300
                      hover:bg-[#25D366]
                    "
                  >
                    <WhatsAppIcon size={21} />

                    {service.buttonText}
                  </a>
                ) : (
                  <a
                    href="tel:+919494239260"
                    aria-label="Call SR Cleaning Solutions"
                    className={`
                      flex
                      min-h-[54px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      px-5
                      text-sm
                      font-bold
                      transition-all
                      duration-300

                      ${
                        service.featured
                          ? `
                            bg-white
                            text-[#031B60]
                            hover:bg-[#25D366]
                            hover:text-white
                          `
                          : `
                            bg-[#031B60]
                            text-white
                            hover:bg-[#00A3E0]
                          `
                      }
                    `}
                  >
                    <Phone size={18} />

                    {service.buttonText}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            PRICING NOTE
        ====================================================== */}

        <div
          className="
            mt-7
            rounded-2xl
            border
            border-[#cfe5f5]
            bg-white/70
            p-4
            sm:p-5
          "
        >
          <p
            className="
              text-xs
              leading-6
              text-[#506482]
              sm:text-sm
            "
          >
            <strong className="text-[#031B60]">
              {s.pricingNoteTitle}
            </strong>{" "}
            {s.pricingNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  label,
  value,
  featured,
}) {
  return (
    <div
      className={`
        min-w-0
        rounded-xl
        border
        px-3.5
        py-3

        ${
          featured
            ? "border-white/15 bg-white/[0.07]"
            : "border-[#d8e8f8] bg-[#f7fbff]"
        }
      `}
    >
      <p
        className={`
          text-[10px]
          font-bold
          uppercase
          tracking-[0.12em]

          ${
            featured
              ? "text-white/50"
              : "text-[#6d829e]"
          }
        `}
      >
        {label}
      </p>

      <p
        className={`
          mt-1
          break-words
          text-xs
          font-bold
          leading-5
          sm:text-sm

          ${
            featured
              ? "text-white"
              : "text-[#031B60]"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}