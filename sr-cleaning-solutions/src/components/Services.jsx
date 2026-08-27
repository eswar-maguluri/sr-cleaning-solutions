"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Check,
  Sparkles,
  Tag,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ size = 20 }) {
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
   INFO BOX
========================================================= */

function InfoBox({
  label,
  value,
  featured = false,
}) {
  return (
    <div
      className={`
        min-w-0 rounded-xl border px-3 py-2.5
        sm:px-3.5 sm:py-3
        ${
          featured
            ? "border-white/15 bg-white/[0.07]"
            : "border-[#d8e8f8] bg-[#f7fbff]"
        }
      `}
    >
      <p
        className={`
          text-[9px] font-bold uppercase tracking-[0.12em]
          sm:text-[10px]
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
          mt-1 break-words text-[11px] font-bold leading-4
          sm:text-xs sm:leading-5
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

/* =========================================================
   SERVICES
========================================================= */

export default function Services() {
  const { t } = useLanguage();

  const s = t.services;

  /* =========================================================
     SELECTED BHK
  ========================================================= */

  const [selectedBhk, setSelectedBhk] = useState({
    standard: "1 BHK",
    deep: "1 BHK",
    move: "1 BHK",
    tidco: "1 BHK",
  });

  /* =========================================================
     SERVICES DATA
  ========================================================= */

  const services = [
    /* =====================================================
       STANDARD CLEANING
    ===================================================== */

    {
      number: "01",
      title: s.standard,
      description: s.standardDescription,

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

      selectionKey: "standard",

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

    /* =====================================================
       DEEP CLEANING
    ===================================================== */

    {
      number: "02",
      title: s.deep,
      description: s.deepDescription,

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

      selectionKey: "deep",

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

    /* =====================================================
       MOVE-IN / MOVE-OUT
    ===================================================== */

    {
      number: "03",
      title: s.move,
      description: s.moveDescription,

      bhkPrices: [
        {
          bhk: "1 BHK",
          price: "₹6,000",
        },
        {
          bhk: "2 BHK",
          price: "₹7,500",
        },
        {
          bhk: "3 BHK",
          price: "₹8,500",
        },
      ],

      selectionKey: "move",

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

      buttonText: s.bookEnquire,
      buttonType: "phone",
    },

    /* =====================================================
       TIDCO HOUSE - DEEP CLEANING
    ===================================================== */

    {
      number: "04",
      title: s.tidco,
      description: s.tidcoDescription,

      bhkPrices: [
        {
          bhk: "1 BHK",
          price: "₹2,999",
        },
        {
          bhk: "2 BHK",
          price: "₹3,499",
        },
      ],

      selectionKey: "tidco",

      method: s.tidcoMethod,
      duration: s.tidcoDuration,

      items: s.tidcoItems,

      sectionTitle: s.equipmentMaterials,

      tags: [
        s.vacuum,
        s.miniScrubber,
        s.miniBlower,
        s.professionalCleaners,
      ],

      featured: false,

      buttonText: s.bookEnquire,
      buttonType: "phone",
    },
  ];

  /* =========================================================
     COMBO SERVICES
  ========================================================= */

  const combos = [
    {
      number: "C01",

      title: s.combo1Title,

      description: s.combo1Description,

      price: s.combo1Price,

      items: s.combo1Items,

      tags: [
        s.chimney,
        s.refrigerator,
        s.ceilingFan,
      ],
    },

    {
      number: "C02",

      title: s.combo2Title,

      description: s.combo2Description,

      price: s.combo2Price,

      items: s.combo2Items,

      tags: [
        s.kitchenSink,
        s.washBasin,
        s.singleDoor,
        s.gasStove,
      ],
    },
  ];

  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header =
        document.querySelector(".services-header");

      const cards =
        gsap.utils.toArray(".service-card");

      const comboCards =
        gsap.utils.toArray(".combo-card");

      if (header) {
        gsap.fromTo(
          header,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".services-grid",
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      if (comboCards.length) {
        gsap.fromTo(
          comboCards,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".combo-grid",
              start: "top 92%",
              once: true,
            },
          }
        );
      }
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
        py-12
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#00A3E0]/10
          blur-[90px]
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-72
          w-72
          rounded-full
          bg-[#25D366]/10
          blur-[100px]
          sm:h-96
          sm:w-96
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
            HEADER
        ==================================================== */}

        <div className="services-header max-w-3xl">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#00A3E0]
              sm:text-xs
            "
          >
            <span className="h-px w-6 bg-[#00A3E0]" />

            {s.label}
          </span>

          <h2
            className="
              mt-3
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-[#031B60]
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
          >
            {s.heading}
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-xs
              leading-6
              text-[#506482]
              sm:text-sm
              md:text-base
            "
          >
            {s.subtitle}
          </p>
        </div>

        {/* ===================================================
            SERVICE GRID
        ==================================================== */}

        <div
          className="
            services-grid
            mt-7
            grid
            grid-cols-1
            gap-4
            sm:mt-9
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.map((service) => {
            const currentSelection =
              selectedBhk[service.selectionKey];

            const selectedPrice =
              service.bhkPrices?.find(
                (item) =>
                  item.bhk === currentSelection
              )?.price;

            return (
              <article
                key={`service-${service.number}`}
                className={`
                  service-card
                  group
                  relative
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-[20px]
                  border
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  sm:rounded-[24px]
                  sm:p-5
                  md:p-6

                  ${
                    service.featured
                      ? `
                        border-[#031B60]
                        bg-[#031B60]
                        shadow-[0_18px_45px_rgba(3,27,96,0.18)]
                      `
                      : `
                        border-[#d5e5f2]
                        bg-white
                        shadow-[0_12px_32px_rgba(3,27,96,0.06)]
                        hover:border-[#9ed9f1]
                        hover:shadow-[0_18px_40px_rgba(3,27,96,0.10)]
                      `
                  }
                `}
              >
                {/* TOP ACCENT */}

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

                {/* TITLE */}

                <div className="mt-2 flex items-start gap-3">
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full

                      ${
                        service.featured
                          ? "bg-white/10 text-[#25D366]"
                          : "bg-[#031B60] text-white"
                      }
                    `}
                  >
                    <Sparkles size={18} />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={`
                        text-lg
                        font-bold
                        leading-tight
                        tracking-tight
                        sm:text-xl
                        md:text-2xl

                        ${
                          service.featured
                            ? "text-white"
                            : "text-[#031B60]"
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`
                        mt-2
                        text-xs
                        leading-5
                        sm:text-sm
                        sm:leading-6

                        ${
                          service.featured
                            ? "text-white/70"
                            : "text-[#506482]"
                        }
                      `}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* BHK PRICES */}

                <div className="mt-5">
                  <p
                    className={`
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      sm:text-[10px]

                      ${
                        service.featured
                          ? "text-white/50"
                          : "text-[#71839c]"
                      }
                    `}
                  >
                    {s.chooseHomeSize ||
                      "Choose your home size"}
                  </p>

                  <div
                    className={`
                      mt-3
                      grid
                      ${
                        service.bhkPrices.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-3"
                      }
                      gap-2
                    `}
                  >
                    {service.bhkPrices.map(
                      (item, index) => {
                        const active =
                          currentSelection ===
                          item.bhk;

                        return (
                          <button
                            key={`${service.number}-bhk-${index}`}
                            type="button"
                            onClick={() =>
                              setSelectedBhk(
                                (previous) => ({
                                  ...previous,
                                  [service.selectionKey]:
                                    item.bhk,
                                })
                              )
                            }
                            aria-pressed={active}
                            className={`
                              min-w-0
                              rounded-xl
                              border
                              px-2
                              py-3
                              text-center
                              transition-all
                              duration-200

                              ${
                                active
                                  ? service.featured
                                    ? "border-[#25D366] bg-white/10"
                                    : "border-[#00A3E0] bg-[#f1faff]"
                                  : service.featured
                                    ? "border-white/10 bg-white/[0.03]"
                                    : "border-[#d8e8f8] bg-white"
                              }
                            `}
                          >
                            <span
                              className={`
                                block
                                text-[10px]
                                font-bold
                                sm:text-xs

                                ${
                                  active
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

                            <span
                              className={`
                                mt-1
                                block
                                text-base
                                font-extrabold
                                sm:text-lg

                                ${
                                  active
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
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* SELECTED PRICE */}

                  <div
                    className={`
                      mt-3
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-3
                      py-2.5

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
                          text-[8px]
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
                        {s.selected || "Selected"}
                      </p>

                      <p
                        className={`
                          mt-0.5
                          text-xs
                          font-bold

                          ${
                            service.featured
                              ? "text-white"
                              : "text-[#031B60]"
                          }
                        `}
                      >
                        {currentSelection}
                      </p>
                    </div>

                    <p
                      className={`
                        text-lg
                        font-extrabold

                        ${
                          service.featured
                            ? "text-white"
                            : "text-[#031B60]"
                        }
                      `}
                    >
                      {selectedPrice}
                    </p>
                  </div>
                </div>

                {/* METHOD / DURATION */}

                <div className="mt-4 grid grid-cols-2 gap-2">
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

                {/* INCLUDED SERVICES */}

                <div className="mt-5">
                  <h4
                    className={`
                      text-sm
                      font-bold
                      sm:text-base

                      ${
                        service.featured
                          ? "text-white"
                          : "text-[#031B60]"
                      }
                    `}
                  >
                    {s.whatsIncluded ||
                      "What's Included"}
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {service.items.map(
                      (item, index) => (
                        <li
                          key={`${service.number}-included-${index}`}
                          className={`
                            flex
                            items-start
                            gap-2
                            text-xs
                            leading-5
                            sm:text-sm

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
                              h-4
                              w-4
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
                              size={10}
                              strokeWidth={3}
                            />
                          </span>

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* EQUIPMENT / MATERIALS */}

                <div
                  className={`
                    mt-5
                    border-t
                    pt-4

                    ${
                      service.featured
                        ? "border-white/15"
                        : "border-[#d8e8f8]"
                    }
                  `}
                >
                  <p
                    className={`
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      sm:text-[10px]

                      ${
                        service.featured
                          ? "text-white/50"
                          : "text-[#506482]"
                      }
                    `}
                  >
                    {service.sectionTitle}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {service.tags.map(
                      (tag, index) => (
                        <span
                          key={`${service.number}-tag-${index}`}
                          className={`
                            rounded-full
                            border
                            px-2.5
                            py-1.5
                            text-[9px]
                            font-semibold
                            sm:text-[10px]

                            ${
                              service.featured
                                ? "border-white/15 bg-white/10 text-white/80"
                                : "border-[#cce7f8] bg-[#f4faff] text-[#08679a]"
                            }
                          `}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-5">
                  {service.buttonType ===
                  "whatsapp" ? (
                    <a
                      href="https://wa.me/919494239260"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp SR Cleaning Solutions"
                      className="
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#031B60]
                        px-4
                        text-xs
                        font-bold
                        text-white
                        shadow-[0_8px_20px_rgba(3,27,96,0.12)]
                        transition-all
                        duration-300
                        hover:bg-[#25D366]
                        sm:min-h-[52px]
                        sm:text-sm
                      "
                    >
                      <WhatsAppIcon size={18} />

                      {service.buttonText}
                    </a>
                  ) : (
                    <a
                      href="tel:+919494239260"
                      aria-label="Call SR Cleaning Solutions"
                      className={`
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        px-4
                        text-xs
                        font-bold
                        transition-all
                        duration-300
                        sm:min-h-[52px]
                        sm:text-sm

                        ${
                          service.featured
                            ? "bg-white text-[#031B60] hover:bg-[#25D366] hover:text-white"
                            : "bg-[#031B60] text-white hover:bg-[#00A3E0]"
                        }
                      `}
                    >
                      <Phone size={16} />

                      {service.buttonText}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            COMBO SERVICES
        ====================================================== */}

        <div className="mt-10 sm:mt-14">
          <div className="max-w-3xl">
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#00A3E0]
                sm:text-xs
              "
            >
              <span className="h-px w-6 bg-[#00A3E0]" />

              {s.comboLabel}
            </span>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                tracking-tight
                text-[#031B60]
                sm:text-3xl
                md:text-4xl
              "
            >
              {s.comboHeading}
            </h3>

            <p
              className="
                mt-2
                text-xs
                leading-6
                text-[#506482]
                sm:text-sm
              "
            >
              {s.comboSubtitle}
            </p>
          </div>

          {/* COMBO GRID */}

          <div
            className="
              combo-grid
              mt-6
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
            "
          >
            {combos.map((combo) => (
              <article
                key={`combo-${combo.number}`}
                className="
                  combo-card
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#d5e5f2]
                  bg-white
                  p-4
                  shadow-[0_12px_32px_rgba(3,27,96,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#9ed9f1]
                  sm:rounded-[24px]
                  sm:p-5
                  md:p-6
                "
              >
                {/* COMBO HEADER */}

                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#031B60]
                      text-white
                    "
                  >
                    <Tag size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4
                        className="
                          text-lg
                          font-bold
                          leading-tight
                          text-[#031B60]
                          sm:text-xl
                        "
                      >
                        {combo.title}
                      </h4>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          bg-[#eaf8ef]
                          px-2.5
                          py-1
                          text-[10px]
                          font-bold
                          text-[#159447]
                          sm:text-xs
                        "
                      >
                        {s.comboBadge || "COMBO"}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-[#506482]
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {combo.description}
                    </p>
                  </div>
                </div>

                {/* COMBO PRICE */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-[#cfe5f5]
                    bg-[#f4faff]
                    px-4
                    py-3
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#71839c]
                      "
                    >
                      {s.comboPriceLabel ||
                        "Combo Price"}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-2xl
                        font-extrabold
                        text-[#031B60]
                      "
                    >
                      {combo.price}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#031B60]
                      shadow-sm
                    "
                  >
                    <Sparkles size={17} />
                  </div>
                </div>

                {/* COMBO INCLUDED */}

                <div className="mt-5">
                  <h5
                    className="
                      text-sm
                      font-bold
                      text-[#031B60]
                      sm:text-base
                    "
                  >
                    {s.whatsIncluded ||
                      "What's Included"}
                  </h5>

                  <ul className="mt-3 space-y-2">
                    {combo.items.map(
                      (item, index) => (
                        <li
                          key={`${combo.number}-item-${index}`}
                          className="
                            flex
                            items-start
                            gap-2
                            text-xs
                            leading-5
                            text-[#506482]
                            sm:text-sm
                          "
                        >
                          <span
                            className="
                              mt-0.5
                              flex
                              h-4
                              w-4
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#25D366]/10
                              text-[#1FBD5B]
                            "
                          >
                            <Check
                              size={10}
                              strokeWidth={3}
                            />
                          </span>

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* COMBO TAGS */}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {combo.tags.map(
                    (tag, index) => (
                      <span
                        key={`${combo.number}-tag-${index}`}
                        className="
                          rounded-full
                          border
                          border-[#cce7f8]
                          bg-[#f4faff]
                          px-2.5
                          py-1.5
                          text-[9px]
                          font-semibold
                          text-[#08679a]
                          sm:text-[10px]
                        "
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                {/* COMBO CTA */}

                <a
                  href="tel:+919494239260"
                  aria-label={`Call SR Cleaning Solutions for ${combo.title}`}
                  className="
                    mt-5
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#031B60]
                    px-4
                    text-xs
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#00A3E0]
                    sm:min-h-[52px]
                    sm:text-sm
                  "
                >
                  <Phone size={16} />

                  {s.bookEnquire}
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            PRICING NOTE
        ====================================================== */}

        <div
          className="
            mt-6
            rounded-xl
            border
            border-[#cfe5f5]
            bg-white/80
            p-3
            sm:mt-8
            sm:rounded-2xl
            sm:p-4
          "
        >
          <p
            className="
              text-[10px]
              leading-5
              text-[#506482]
              sm:text-xs
              sm:leading-6
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