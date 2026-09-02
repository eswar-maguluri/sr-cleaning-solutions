"use client";

import { useState } from "react";

import {
  ClipboardCheck,
  Clock,
  CreditCard,
  Ban,
  ShieldCheck,
  MessageCircle,
  WalletCards,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   TERMS & CONDITIONS
========================================================= */

export default function Terms() {
  const { t } = useLanguage();
  const x = t.terms;

  const [showCancellationDetails, setShowCancellationDetails] =
    useState(false);

  const terms = [
    {
      icon: ClipboardCheck,
      title: x.serviceScope,
      text: x.serviceScopeText,
    },

    {
      icon: Clock,
      title: x.serviceTiming,
      text: x.serviceTimingText,
    },

    {
      icon: CreditCard,
      title: x.pricing,
      text: x.pricingText,
    },

    {
      icon: Ban,
      title: x.cancellation,
      text: x.cancellationText,
      isCancellation: true,
    },

    {
      icon: WalletCards,
      title: x.paymentMethods,
      text: x.paymentMethodsText,
      isPayment: true,
    },

    {
      icon: MapPin,
      title: x.serviceArea,
      text: x.serviceAreaText,
      serviceAreaNote: x.serviceAreaNote,
      isServiceArea: true,
    },

    {
      icon: ShieldCheck,
      title: x.equipment,
      text: x.equipmentText,
    },

    {
      icon: MessageCircle,
      title: x.questions,
      text: x.questionsText,
    },
  ];

  return (
    <section
      id="terms"
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
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -left-40
          h-[320px]
          w-[320px]
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
          -right-40
          h-[320px]
          w-[320px]
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
              border-[#D8E8F8]
              bg-[#F4F9FF]
              px-4
              py-2
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              sm:tracking-[0.18em]
              text-[#031B60]
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#25D366]
              "
            />

            <span className="leading-4">
              {x.label}
            </span>
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
            {x.heading}
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
            {x.subtitle}
          </p>
        </div>

        {/* ===================================================
            TERMS GRID
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:mt-12
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {terms.map((term) => {
            const Icon = term.icon;

            return (
              <article
                key={term.title}
                className="
                  rounded-[22px]
                  border
                  border-[#D8E8F8]
                  bg-[#F8FCFF]
                  p-5
                  sm:p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_16px_40px_rgba(3,27,96,0.08)]
                "
              >
                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#031B60]
                    text-white
                  "
                >
                  <Icon size={20} />
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mt-5
                    text-lg
                    sm:text-xl
                    font-bold
                    leading-tight
                    text-[#031B60]
                  "
                >
                  {term.title}
                </h3>

                {/* =================================================
                    NORMAL CONTENT
                ================================================== */}

                {!term.isCancellation &&
                  !term.isPayment &&
                  !term.isServiceArea && (
                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#506482]
                      "
                    >
                      {term.text}
                    </p>
                  )}

                {/* =================================================
                    CANCELLATION & RESCHEDULING
                ================================================== */}

                {term.isCancellation && (
                  <div
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#506482]
                    "
                  >
                    {/* Short visible cancellation message */}

                    <p>
                      <strong className="font-semibold text-[#031B60]">
                        {x.cancellationDetails.minimumCharge}
                      </strong>
                    </p>

                    {/* =================================================
                        READ MORE CONTENT
                    ================================================== */}

                    {showCancellationDetails && (
                      <div className="mt-4 space-y-3">
                        <p>
                          {x.cancellationDetails.minimumChargeText}
                        </p>

                        <p>
                          {x.cancellationDetails.dispatchedText}
                        </p>

                        <p>
                          {x.cancellationDetails.communicationText}
                        </p>

                        <p>
                          {x.cancellationDetails.depositText}
                        </p>
                      </div>
                    )}

                    {/* =================================================
                        READ MORE / READ LESS
                    ================================================== */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowCancellationDetails(
                          !showCancellationDetails
                        )
                      }
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-1.5
                        font-semibold
                        text-[#031B60]
                        transition-colors
                        duration-200
                        hover:text-[#00A3E0]
                      "
                      aria-expanded={showCancellationDetails}
                    >
                      <span>
                        {showCancellationDetails
                          ? x.cancellationDetails.close
                          : x.cancellationReadMore}
                      </span>

                      <span
                        className="
                          text-base
                          transition-transform
                          duration-200
                        "
                      >
                        {showCancellationDetails ? "↑" : "→"}
                      </span>
                    </button>
                  </div>
                )}

                {/* =================================================
                    PAYMENT METHODS
                ================================================== */}

                {term.isPayment && (
                  <div className="mt-3">
                    <p
                      className="
                        text-sm
                        leading-6
                        text-[#506482]
                      "
                    >
                      {term.text}
                    </p>

                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-2
                      "
                    >
                      {[
                        {
                          label: x.cash,
                        },
                        {
                          label: x.upi,
                        },
                        {
                          label: x.googlePay,
                        },
                        {
                          label: x.phonePe,
                        },
                      ].map((method) => (
                        <div
                          key={method.label}
                          className="
                            flex
                            min-h-[42px]
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#D8E8F8]
                            bg-white
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-[#031B60]
                            transition-all
                            duration-200
                            hover:border-[#B9DFF1]
                          "
                        >
                          <span
                            className="
                              flex
                              h-5
                              w-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#25D366]/10
                              text-[11px]
                              font-bold
                              text-[#1FBD5B]
                            "
                          >
                            ✓
                          </span>

                          <span>
                            {method.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================
                    SERVICE AREA
                ================================================== */}

                {term.isServiceArea && (
                  <div className="mt-3">
                    <p
                      className="
                        text-sm
                        leading-6
                        text-[#506482]
                      "
                    >
                      {term.text}
                    </p>

                    <div
                      className="
                        mt-3
                        rounded-xl
                        border
                        border-[#D8E8F8]
                        bg-[#F4F9FF]
                        px-3
                        py-2.5
                      "
                    >
                      <p
                        className="
                          text-xs
                          leading-5
                          text-[#71839c]
                        "
                      >
                        {term.serviceAreaNote}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ===================================================
            CONTACT CTA
        ==================================================== */}

        <div
          className="
            mt-8
            rounded-[24px]
            bg-[#031B60]
            p-5
            sm:p-7
            md:p-8
            shadow-[0_18px_45px_rgba(3,27,96,0.14)]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* CTA TEXT */}

            <div className="min-w-0">
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {x.clarificationHeading}
              </h3>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/70
                "
              >
                {x.clarificationText}
              </p>
            </div>

            {/* WHATSAPP BUTTON */}

            <a
              href="https://wa.me/919494239260?text=Hello%20SR%20Cleaning%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact SR Cleaning Solutions on WhatsApp"
              className="
                group
                flex
                min-h-[52px]
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
              <img
                src="/whatsapp.svg"
                alt=""
                aria-hidden="true"
                className="
                  h-6
                  w-6
                  shrink-0
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>
                {x.contactUs}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}