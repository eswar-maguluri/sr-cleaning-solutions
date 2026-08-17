"use client";

import { useState } from "react";
import {
  ChevronDown,
  Check,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ size = 18 }) {
  return (
    <img
      src="/whatsapp.svg"
      alt=""
      aria-hidden="true"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="
        shrink-0
        object-contain
        transition-transform
        duration-300
      "
    />
  );
}

/* =========================================================
   RATE CARDS
========================================================= */

export default function RateCards() {
  const { t } = useLanguage();
  const r = t.rates;

  /*
    ONLY ONE INDIVIDUAL SERVICE CAN BE OPEN AT A TIME.

    null = nothing is open
    "washroom" = washroom is open
    "chimney" = chimney is open
    etc.
  */
  const [openService, setOpenService] = useState(null);

  /* =========================================================
     STANDARD CLEANING
  ========================================================= */

  const standardCleaning = [
    {
      label: "1 BHK",
      price: "₹1,799",
    },
    {
      label: "2 BHK",
      price: "₹2,499",
    },
    {
      label: "3 BHK",
      price: "₹4,499",
    },
  ];

  /* =========================================================
     DEEP CLEANING
  ========================================================= */

  const deepCleaning = [
    {
      label: "1 BHK",
      price: "₹3,499",
    },
    {
      label: "2 BHK",
      price: "₹4,999",
    },
    {
      label: "3 BHK",
      price: "₹8,999",
    },
  ];

  /* =========================================================
     INDIVIDUAL SERVICES
  ========================================================= */

  const individualServices = [
    {
      id: "washroom",
      title: r.washroom,
      options: [
        {
          label: r.single,
          price: "₹549",
        },
        {
          label: r.double,
          price: "₹999",
        },
        {
          label: r.triple,
          price: "₹1,449",
        },
      ],
    },

    {
      id: "chimney",
      title: r.chimney,
      options: [
        {
          label: r.basicLevel,
          price: "₹499",
        },
      ],
    },

    {
      id: "refrigerator",
      title: r.refrigerator,
      options: [
        {
          label: r.singleDoor,
          price: "₹399",
        },
        {
          label: r.doubleDoor,
          price: "₹549",
        },
      ],
    },

    {
      id: "microwave",
      title: r.microwave,
      options: [
        {
          label: r.basicCavity,
          price: "₹199",
        },
      ],
    },

    {
      id: "kitchen-sink",
      title: r.kitchenSink,
      options: [
        {
          label: r.basicBasin,
          price: "₹125",
        },
      ],
    },

    {
      id: "gas-stove",
      title: r.gasStove,
      options: [
        {
          label: r.basicBurner,
          price: "₹99",
        },
      ],
    },

    {
      id: "ceiling-fan",
      title: r.ceilingFan,
      options: [
        {
          label: r.oneRoom,
          price: "₹99",
        },
        {
          label: r.twoRooms,
          price: "₹199",
        },
        {
          label: r.threeRooms,
          price: "₹299",
        },
      ],
    },

    {
      id: "cobwebs",
      title: r.cobwebs,
      options: [
        {
          label: r.singleRoom,
          price: "₹199",
        },
      ],
    },

    {
      id: "exhaust-fan",
      title: r.exhaustFan,
      options: [
        {
          label: r.basicMesh,
          price: "₹79",
        },
      ],
    },

    {
      id: "glass-partition",
      title: r.glassPartition,
      options: [
        {
          label: r.upTo20SqFt,
          price: "₹199",
        },
      ],
    },

    {
      id: "wash-basin",
      title: r.washBasin,
      options: [
        {
          label: r.singleTop,
          price: "₹99",
        },
      ],
    },

    {
      id: "wooden-doors",
      title: r.woodenDoors,
      options: [
        {
          label: r.plainDoor,
          price: "₹99",
        },
      ],
    },

    {
      id: "mirror",
      title: r.mirror,
      options: [
        {
          label: r.basicWiping,
          price: "₹49",
        },
      ],
    },
  ];

  /* =========================================================
     TOGGLE INDIVIDUAL SERVICE

     IMPORTANT:
     Only ONE service can be open at a time.

     Example:
     Washroom open
       ↓
     Click Chimney
       ↓
     Washroom closes
     Chimney opens
  ========================================================= */

  const toggleService = (id) => {
    setOpenService((current) => {
      /*
        If the user clicks the SAME service again,
        close it.
      */
      if (current === id) {
        return null;
      }

      /*
        If the user clicks a DIFFERENT service,
        the previous one automatically closes
        and the new one opens.
      */
      return id;
    });
  };

  return (
    <section
      id="rates"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
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
          blur-[110px]
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
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#cfe5f5]
              bg-[#f4faff]
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#0b5ed7]
              sm:text-xs
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

            {r.label}
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#031B60]
              sm:text-4xl
              md:text-5xl
            "
          >
            {r.heading}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#506482]
              sm:text-base
              md:text-lg
            "
          >
            {r.subtitle}
          </p>

        </div>

        {/* ===================================================
            PACKAGE PRICING
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >

          <RateCard
            title={r.standard}
            subtitle={r.routinePackage}
            prices={standardCleaning}
            accent="blue"
            enquiryText={r.enquire}
            packageText={r.package}
          />

          <RateCard
            title={r.deep}
            subtitle={r.detailedPackage}
            prices={deepCleaning}
            accent="green"
            enquiryText={r.enquire}
            packageText={r.package}
          />

        </div>

        {/* ===================================================
            INDIVIDUAL SERVICES
        ==================================================== */}

        <div
          id="individual-services"
          className="
            mt-14
            sm:mt-16
            md:mt-20
          "
        >

          <div className="mb-7">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#00A3E0]
              "
            >
              {r.individual}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
                text-[#031B60]
                sm:text-3xl
                md:text-4xl
              "
            >
              {r.chooseService}
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-[#506482]
                sm:text-base
              "
            >
              {r.chooseServiceText}
            </p>

          </div>

          {/* =================================================
              SERVICE GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {individualServices.map((service) => {

              /*
                IMPORTANT:
                This checks ONE value instead of checking
                a Set of many values.
              */
              const isOpen = openService === service.id;

              return (
                <div
                  key={service.id}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "border-[#00A3E0] shadow-[0_12px_35px_rgba(3,27,96,0.10)]"
                        : "border-[#d8e8f8] shadow-[0_8px_25px_rgba(3,27,96,0.05)]"
                    }
                  `}
                >

                  {/* =================================================
                      SERVICE BUTTON
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-[64px]
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-4
                      text-left
                      sm:px-5
                      hover:bg-[#f7fbff]
                    "
                  >

                    <span
                      className="
                        min-w-0
                        text-sm
                        font-bold
                        leading-5
                        text-[#031B60]
                        sm:text-base
                      "
                    >
                      {service.title}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "rotate-180 bg-[#031B60] text-white"
                            : "bg-[#eef8ff] text-[#031B60]"
                        }
                      `}
                    >
                      <ChevronDown size={18} />
                    </span>

                  </button>

                  {/* =================================================
                      EXPANDED PRICES
                  ================================================== */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-300

                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div
                        className="
                          border-t
                          border-[#d8e8f8]
                          bg-[#f8fcff]
                          p-4
                          sm:p-5
                        "
                      >

                        {/* =================================================
                            PRICE OPTIONS
                        ================================================== */}

                        <div className="space-y-2">

                          {service.options.map((option) => (
                            <div
                              key={option.label}
                              className="
                                flex
                                items-center
                                justify-between
                                gap-3
                                rounded-xl
                                border
                                border-[#d8e8f8]
                                bg-white
                                px-4
                                py-3
                              "
                            >

                              <span
                                className="
                                  min-w-0
                                  text-xs
                                  font-medium
                                  leading-5
                                  text-[#506482]
                                  sm:text-sm
                                "
                              >
                                {option.label}
                              </span>

                              <span
                                className="
                                  shrink-0
                                  text-sm
                                  font-extrabold
                                  text-[#031B60]
                                  sm:text-base
                                "
                              >
                                {option.price}
                              </span>

                            </div>
                          ))}

                        </div>

                        {/* =================================================
                            WHATSAPP
                        ================================================== */}

                        <a
                          href="https://wa.me/919494239260"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${r.enquireAbout} ${service.title}`}
                          className="
                            group
                            mt-4
                            flex
                            min-h-[48px]
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-[#25D366]
                            px-4
                            text-sm
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-[#1FBD5B]
                            hover:-translate-y-0.5
                          "
                        >

                          <WhatsAppIcon size={21} />

                          <span>
                            {r.enquireAbout}
                          </span>

                        </a>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ===================================================
            MOVE-IN / MOVE-OUT
        ==================================================== */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[24px]
            border
            border-[#d8e8f8]
            bg-[#031B60]
            p-5
            shadow-[0_18px_45px_rgba(3,27,96,0.15)]
            sm:p-7
            md:p-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div className="min-w-0">

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#25D366]
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-xs
                "
              >
                {r.quoteBased}
              </span>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                {r.moveInOut}
              </h3>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/70
                  sm:text-base
                "
              >
                {r.moveDescription}
              </p>

              <p
                className="
                  mt-4
                  text-base
                  font-bold
                  text-[#25D366]
                  sm:text-lg
                "
              >
                {r.comingSoon}
              </p>

            </div>

            <a
              href="https://wa.me/919494239260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.getQuote}
              className="
                group
                flex
                min-h-[54px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#25D366]
                px-6
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#1FBD5B]
                hover:-translate-y-0.5
                md:w-auto
              "
            >

              <WhatsAppIcon size={22} />

              <span>
                {r.getQuote}
              </span>

            </a>

          </div>

        </div>

        {/* ===================================================
            PRICE NOTE
        ==================================================== */}

        <div
          className="
            mt-6
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-[#d8e8f8]
            bg-[#f7fbff]
            p-4
            sm:p-5
          "
        >

          <span
            className="
              mt-0.5
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#25D366]/10
              text-[#1FBD5B]
            "
          >
            <Check
              size={14}
              strokeWidth={3}
            />
          </span>

          <p
            className="
              text-xs
              leading-6
              text-[#506482]
              sm:text-sm
            "
          >
            <strong className="text-[#031B60]">
              {r.noteTitle}
            </strong>{" "}
            {r.note}
          </p>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   PACKAGE RATE CARD
========================================================= */

function RateCard({
  title,
  subtitle,
  prices,
  accent,
  enquiryText,
  packageText,
}) {
  const isGreen = accent === "green";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#d8e8f8]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(3,27,96,0.07)]
        sm:p-6
        md:p-7
      "
    >

      {/* TOP LINE */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-1
          w-full

          ${
            isGreen
              ? "bg-[#25D366]"
              : "bg-[#00A3E0]"
          }
        `}
      />

      <div>

        <span
          className={`
            inline-flex
            rounded-full
            px-3
            py-2
            text-[10px]
            font-bold
            uppercase
            tracking-wide
            sm:text-xs

            ${
              isGreen
                ? "bg-[#25D366]/10 text-[#1FBD5B]"
                : "bg-[#00A3E0]/10 text-[#0875a4]"
            }
          `}
        >
          {packageText}
        </span>

        <h3
          className="
            mt-4
            text-2xl
            font-bold
            text-[#031B60]
            sm:text-3xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-[#506482]
          "
        >
          {subtitle}
        </p>

      </div>

      {/* PRICES */}

      <div className="mt-6 space-y-3">

        {prices.map((item) => (
          <div
            key={item.label}
            className="
              flex
              min-h-[60px]
              items-center
              justify-between
              gap-4
              rounded-xl
              border
              border-[#d8e8f8]
              bg-[#f8fcff]
              px-4
              py-3
            "
          >

            <span
              className="
                text-sm
                font-semibold
                text-[#506482]
              "
            >
              {item.label}
            </span>

            <span
              className="
                shrink-0
                text-lg
                font-extrabold
                text-[#031B60]
                sm:text-xl
              "
            >
              {item.price}
            </span>

          </div>
        ))}

      </div>

      {/* PACKAGE WHATSAPP */}

      <a
        href="https://wa.me/919494239260"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${enquiryText} ${title}`}
        className="
          group
          mt-5
          flex
          min-h-[52px]
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
          transition-all
          duration-300
          hover:bg-[#00A3E0]
        "
      >

        <WhatsAppIcon size={22} />

        <span>
          {enquiryText}
        </span>

      </a>

    </div>
  );
}