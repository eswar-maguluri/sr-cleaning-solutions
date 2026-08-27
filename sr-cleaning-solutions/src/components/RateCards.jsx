"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Check,
  Clock3,
  DoorOpen,
  Droplets,
  Fan,
  Flame,
  GlassWater,
  Microwave,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ size = 20 }) {
  return (
    <img
      src="/whatsapp.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="h-auto w-auto object-contain"
    />
  );
}

/* =========================================================
   SERVICE ICON
========================================================= */

function ServiceIcon({ type = "cleaning" }) {
  const props = {
    size: 24,
    strokeWidth: 1.8,
  };

  switch (type) {
    case "washroom":
      return <Droplets {...props} />;

    case "chimney":
      return <Sparkles {...props} />;

    case "refrigerator":
      return <Refrigerator {...props} />;

    case "microwave":
      return <Microwave {...props} />;

    case "sink":
      return <Waves {...props} />;

    case "stove":
      return <Flame {...props} />;

    case "fan":
      return <Fan {...props} />;

    case "glass":
      return <GlassWater {...props} />;

    case "door":
      return <DoorOpen {...props} />;

    default:
      return <Sparkles {...props} />;
  }
}

/* =========================================================
   SERVICE IMAGE
   Image is ONLY rendered when service is opened.
========================================================= */

function ServiceImage({ src, alt }) {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-100
        aspect-[4/3]
        sm:aspect-[16/9]
        md:aspect-[16/7]
        lg:aspect-[16/6]
      "
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#031B60]/50
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   PRICE ITEM
========================================================= */

function PriceItem({ option }) {
  return (
    <div
      className="
        flex
        min-h-[68px]
        items-center
        justify-between
        gap-3
        border-b
        border-[#e1ebf5]
        px-4
        py-3
        last:border-b-0

        sm:min-h-[78px]
        sm:px-5

        lg:min-h-[115px]
        lg:flex-col
        lg:justify-center
        lg:border-b-0
        lg:border-r
        lg:last:border-r-0
        lg:px-4
        lg:py-4
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#031B60]

          sm:text-base

          lg:flex-col
          lg:gap-1.5
          lg:text-center
        "
      >
        <ShieldCheck
          size={18}
          strokeWidth={1.8}
          className="shrink-0 text-[#006eff]"
        />

        <span className="leading-5">
          {option.label}
        </span>
      </div>

      <div
        className="
          shrink-0
          text-xl
          font-extrabold
          text-[#031B60]

          sm:text-2xl

          lg:text-2xl
        "
      >
        {option.price}
      </div>
    </div>
  );
}

/* =========================================================
   INCLUDED ITEM
========================================================= */

function IncludedItem({ item }) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-2.5
        rounded-xl
        border
        border-[#e4edf6]
        bg-white
        px-3
        py-2.5

        sm:px-3.5
        sm:py-3

        lg:border-0
        lg:bg-transparent
        lg:px-1
        lg:py-2
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#dcf9e8]
          text-[#16a34a]
        "
      >
        <Check
          size={15}
          strokeWidth={3}
        />
      </span>

      <span
        className="
          min-w-0
          text-sm
          leading-5
          text-[#506482]

          sm:text-[15px]
        "
      >
        {item.text}
      </span>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  isOpen,
  onToggle,
}) {
  return (
    <article
      className={`
        overflow-hidden
        rounded-2xl
        border
        bg-white
        transition-all
        duration-300

        sm:rounded-3xl

        ${
          isOpen
            ? "border-[#bcd8f3] shadow-[0_16px_45px_rgba(3,27,96,0.10)]"
            : "border-[#dbe8f4] shadow-[0_7px_25px_rgba(3,27,96,0.05)]"
        }
      `}
    >
      {/* =====================================================
          SERVICE HEADER
      ===================================================== */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`service-${service.id}`}
        className="
          flex
          min-h-[82px]
          w-full
          items-center
          gap-2.5
          px-3
          py-3
          text-left
          transition-colors
          hover:bg-[#f9fcff]

          sm:min-h-[96px]
          sm:gap-4
          sm:px-5
          sm:py-4

          md:px-6
        "
      >
        {/* ICON */}

        <span
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
            shadow-[0_7px_18px_rgba(3,27,96,0.18)]

            sm:h-14
            sm:w-14
          "
        >
          <ServiceIcon type={service.icon} />
        </span>

        {/* TITLE + DESCRIPTION */}

        <span className="min-w-0 flex-1">
          <span
            className="
              block
              text-[15px]
              font-extrabold
              leading-5
              text-[#031B60]

              sm:text-xl
              sm:leading-6

              md:text-2xl
            "
          >
            {service.title}
          </span>

          <span
            className="
              mt-1
              block
              line-clamp-2
              text-[11px]
              leading-4
              text-[#506482]

              sm:text-sm
              sm:leading-6
            "
          >
            {service.description}
          </span>
        </span>

        {/* DESKTOP STARTING PRICE */}

        <span
          className="
            hidden
            shrink-0
            text-right

            sm:block
          "
        >
          <span
            className="
              block
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#71839c]
            "
          >
            Starting
          </span>

          <span
            className="
              mt-1
              block
              text-xl
              font-extrabold
              text-[#031B60]
            "
          >
            {service.options[0]?.price}
          </span>
        </span>

        {/* MOBILE PRICE */}

        <span
          className="
            shrink-0
            text-right

            sm:hidden
          "
        >
          <span
            className="
              block
              text-[8px]
              font-bold
              uppercase
              tracking-wide
              text-[#71839c]
            "
          >
            From
          </span>

          <span
            className="
              mt-0.5
              block
              text-sm
              font-extrabold
              text-[#031B60]
            "
          >
            {service.options[0]?.price}
          </span>
        </span>

        {/* ARROW */}

        <span
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#031B60]
            text-white

            sm:h-11
            sm:w-11
          "
        >
          {isOpen ? (
            <ArrowUp
              size={18}
              strokeWidth={2}
            />
          ) : (
            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          )}
        </span>
      </button>

      {/* =====================================================
          OPEN CONTENT
      ===================================================== */}

      {isOpen && (
        <div
          id={`service-${service.id}`}
          className="
            border-t
            border-[#dbe8f4]
          "
        >
          {/* IMAGE */}

          <ServiceImage
            src={service.image}
            alt={service.title}
          />

          {/* CONTENT */}

          <div
            className="
              p-4

              sm:p-6

              md:p-7

              lg:p-8
            "
          >
            {/* TITLE */}

            <div className="flex items-start gap-3">
              <span
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

                  sm:h-12
                  sm:w-12
                "
              >
                <ServiceIcon
                  type={service.icon}
                />
              </span>

              <div className="min-w-0">
                <h3
                  className="
                    text-xl
                    font-extrabold
                    leading-tight
                    text-[#031B60]

                    sm:text-2xl

                    md:text-3xl
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-5
                    text-[#506482]

                    sm:text-base
                    sm:leading-7
                  "
                >
                  {service.description}
                </p>
              </div>
            </div>

            {/* =================================================
                PRICES
            ================================================= */}

            <div
              className="
                mt-5
                overflow-hidden
                rounded-2xl
                border
                border-[#d5e4f2]
                bg-white

                lg:grid
                lg:grid-cols-3
              "
            >
              {service.options.map(
                (option, index) => (
                  <PriceItem
                    key={`${service.id}-${index}`}
                    option={option}
                  />
                )
              )}
            </div>

            {/* =================================================
                DURATION
            ================================================= */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#c8ddf5]
                bg-[#f3f8ff]
                px-4
                py-3.5

                sm:gap-4
                sm:px-5
                sm:py-4
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#031B60]
                  shadow-sm

                  sm:h-12
                  sm:w-12
                "
              >
                <Clock3
                  size={21}
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#607590]

                    sm:text-xs
                  "
                >
                  Duration
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-extrabold
                    text-[#031B60]

                    sm:text-lg
                  "
                >
                  {service.duration}
                </p>
              </div>
            </div>

            {/* =================================================
                INCLUDED
            ================================================= */}

            <div className="mt-6">
              <h4
                className="
                  text-xl
                  font-extrabold
                  text-[#031B60]

                  sm:text-2xl
                "
              >
                What's Included
              </h4>

              <div
                className="
                  mt-3
                  grid
                  grid-cols-1
                  gap-1.5

                  sm:grid-cols-2
                  sm:gap-2

                  lg:grid-cols-3
                "
              >
                {service.included.map(
                  (item, index) => (
                    <IncludedItem
                      key={`${service.id}-included-${index}`}
                      item={item}
                    />
                  )
                )}
              </div>
            </div>

            {/* =================================================
                CLEANING APPROACH
            ================================================= */}

            <div
              className="
                mt-5
                rounded-2xl
                border
                border-[#ccebd8]
                bg-[#f2fcf5]
                p-4

                sm:p-5
              "
            >
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#16a34a]
                    shadow-sm

                    sm:h-11
                    sm:w-11
                  "
                >
                  <Sparkles
                    size={21}
                    strokeWidth={1.8}
                  />
                </span>

                <div className="min-w-0">
                  <h4
                    className="
                      text-lg
                      font-extrabold
                      text-[#14532D]

                      sm:text-xl
                    "
                  >
                    Cleaning Approach
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-5
                      text-[#506482]

                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {service.approach}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BOOK BUTTON
            ================================================= */}

            <a
              href="https://wa.me/919494239260"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#031B60]
                px-5
                text-base
                font-extrabold
                text-white
                shadow-[0_10px_25px_rgba(3,27,96,0.16)]
                transition-all
                hover:bg-[#08277e]

                sm:min-h-[58px]
                sm:text-lg
              "
            >
              <CalendarDays
                size={21}
                strokeWidth={1.8}
              />

              <span>
                Book / Enquire Now
              </span>

              <ArrowRight
                size={21}
                strokeWidth={2}
              />
            </a>

            {/* =================================================
                CLOSE
            ================================================= */}

            <button
              type="button"
              onClick={onToggle}
              className="
                mt-2.5
                flex
                min-h-[45px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-[#d7e6f5]
                bg-white
                text-sm
                font-bold
                text-[#506482]
                transition
                hover:bg-[#f7fbff]
                hover:text-[#031B60]
              "
            >
              Close Service

              <ArrowUp
                size={17}
              />
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function RateCards() {
  const { t } = useLanguage();

  const rates =
    t?.rates ||
    t?.rateCards ||
    {};

  const [openServiceId, setOpenServiceId] =
    useState(null);

  const toggleService = (id) => {
    setOpenServiceId((current) =>
      current === id ? null : id
    );
  };

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    /* =======================================================
       1. WASHROOM
    ======================================================= */

    {
      id: "washroom",
      icon: "washroom",

      title:
        rates.washroom ||
        "Washroom Deep Clean",

      description:
        "Thorough deep cleaning for a cleaner, fresher and more hygienic washroom.",

      image:
        "/images/rate-card/washroom-deep-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.single ||
            "Single",
          price: "₹549",
        },
        {
          label:
            rates.double ||
            "Double",
          price: "₹999",
        },
        {
          label:
            rates.triple ||
            "Triple",
          price: "₹1,449",
        },
      ],

      included: [
        {
          text:
            "Floor & surface cleaning",
        },
        {
          text:
            "Wash basin cleaning",
        },
        {
          text:
            "Toilet seat & commode cleaning",
        },
        {
          text:
            "Taps & fittings cleaning",
        },
        {
          text:
            "General bathroom cleaning",
        },
        {
          text:
            "Dirt, dust & buildup removal",
        },
      ],

      approach:
        "Professional cleaning products and suitable cleaning equipment are used according to the service requirement.",
    },

    /* =======================================================
       2. CHIMNEY
    ======================================================= */

    {
      id: "chimney",
      icon: "chimney",

      title:
        rates.chimney ||
        "Chimney Cleaning",

      description:
        "Basic cleaning of accessible chimney surfaces to remove normal grease, dust and buildup.",

      image:
        "/images/rate-card/chimney-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicLevel ||
            "Basic Level",
          price: "₹499",
        },
      ],

      included: [
        {
          text:
            "Accessible external surface cleaning",
        },
        {
          text:
            "Grease & dirt cleaning",
        },
        {
          text:
            "Accessible surrounding area",
        },
        {
          text:
            "Surface wiping",
        },
      ],

      approach:
        "Suitable cleaning products are selected according to the appliance and cleaning requirement.",
    },

    /* =======================================================
       3. REFRIGERATOR
    ======================================================= */

    {
      id: "refrigerator",
      icon: "refrigerator",

      title:
        rates.refrigerator ||
        "Refrigerator Cleaning",

      description:
        "Cleaning of accessible refrigerator surfaces and removable areas without dismantling the appliance.",

      image:
        "/images/rate-card/refrigerator-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.singleDoor ||
            "Single Door",
          price: "₹399",
        },
        {
          label:
            rates.doubleDoor ||
            "Double Door",
          price: "₹549",
        },
      ],

      included: [
        {
          text:
            "Accessible internal surface cleaning",
        },
        {
          text:
            "Shelves & compartments",
        },
        {
          text:
            "External surface wiping",
        },
        {
          text:
            "General dirt & residue removal",
        },
      ],

      approach:
        "Suitable cleaning products are used according to the appliance and cleaning requirement.",
    },

    /* =======================================================
       4. MICROWAVE
    ======================================================= */

    {
      id: "microwave",
      icon: "microwave",

      title:
        rates.microwave ||
        "Microwave Cleaning",

      description:
        "Basic microwave cavity and accessible surface cleaning for everyday kitchen hygiene.",

      image:
        "/images/rate-card/microwave-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicCavity ||
            "Basic Cavity",
          price: "₹199",
        },
      ],

      included: [
        {
          text:
            "Accessible cavity cleaning",
        },
        {
          text:
            "Removable tray cleaning",
        },
        {
          text:
            "External surface wiping",
        },
        {
          text:
            "Dirt & residue removal",
        },
      ],

      approach:
        "Suitable cleaning products are used according to the appliance and cleaning requirement.",
    },

    /* =======================================================
       5. KITCHEN SINK
    ======================================================= */

    {
      id: "kitchen-sink",
      icon: "sink",

      title:
        rates.kitchenSink ||
        "Kitchen Sink Cleaning",

      description:
        "Cleaning of the kitchen sink and accessible surrounding surfaces.",

      image:
        "/images/rate-card/kitchen-sink-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicBasin ||
            "Basic Basin",
          price: "₹125",
        },
      ],

      included: [
        {
          text:
            "Sink bowl cleaning",
        },
        {
          text:
            "Tap & fitting cleaning",
        },
        {
          text:
            "Dirt & residue removal",
        },
        {
          text:
            "Surrounding surface wiping",
        },
      ],

      approach:
        "Suitable cleaning products are used according to the sink surface and cleaning requirement.",
    },

    /* =======================================================
       6. GAS STOVE
    ======================================================= */

    {
      id: "gas-stove",
      icon: "stove",

      title:
        rates.gasStove ||
        "Gas Stove Cleaning",

      description:
        "Basic cleaning of accessible gas stove surfaces and burner areas.",

      image:
        "/images/rate-card/gas-stove-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicBurner ||
            "Basic Burner",
          price: "₹99",
        },
      ],

      included: [
        {
          text:
            "Stove surface cleaning",
        },
        {
          text:
            "Burner area cleaning",
        },
        {
          text:
            "Grease & dirt removal",
        },
        {
          text:
            "External surface wiping",
        },
      ],

      approach:
        "Suitable cleaning products are used carefully according to the stove surface and service requirement.",
    },

    /* =======================================================
       7. CEILING FAN
    ======================================================= */

    {
      id: "ceiling-fan",
      icon: "fan",

      title:
        rates.ceilingFan ||
        "Ceiling Fan Cleaning",

      description:
        "Ceiling fan cleaning for accessible fan blades and reachable surfaces.",

      image:
        "/images/rate-card/ceiling-fan-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.oneRoom ||
            "1 Room",
          price: "₹99",
        },
        {
          label:
            rates.twoRooms ||
            "2 Rooms",
          price: "₹199",
        },
        {
          label:
            rates.threeRooms ||
            "3 Rooms",
          price: "₹299",
        },
      ],

      included: [
        {
          text:
            "Fan blade dust removal",
        },
        {
          text:
            "Fan surface cleaning",
        },
        {
          text:
            "Reachable dust removal",
        },
        {
          text:
            "Normal dirt cleaning",
        },
      ],

      approach:
        "Suitable cleaning tools are used according to accessibility and service requirements.",
    },

    /* =======================================================
       8. COBWEB
    ======================================================= */

    {
      id: "cobwebs",
      icon: "cleaning",

      title:
        rates.cobwebs ||
        "Cobweb Removal",

      description:
        "Removal of visible cobwebs from accessible ceiling corners and reachable areas.",

      image:
        "/images/rate-card/cobweb-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.singleRoom ||
            "Single Room",
          price: "₹199",
        },
      ],

      included: [
        {
          text:
            "Ceiling corner cobweb removal",
        },
        {
          text:
            "Wall-edge cleaning",
        },
        {
          text:
            "High-area dust removal",
        },
        {
          text:
            "Surrounding area cleaning",
        },
      ],

      approach:
        "Suitable dusting and cobweb-removal tools are used according to accessibility.",
    },

    /* =======================================================
       9. EXHAUST FAN
    ======================================================= */

    {
      id: "exhaust-fan",
      icon: "fan",

      title:
        rates.exhaustFan ||
        "Exhaust Fan Cleaning",

      description:
        "Basic cleaning of accessible exhaust fan and mesh areas.",

      image:
        "/images/rate-card/exhaust-fan-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicMesh ||
            "Basic Mesh",
          price: "₹79",
        },
      ],

      included: [
        {
          text:
            "Fan surface cleaning",
        },
        {
          text:
            "Mesh cleaning",
        },
        {
          text:
            "Normal dust removal",
        },
        {
          text:
            "External wiping",
        },
      ],

      approach:
        "Suitable cleaning tools and products are selected according to the fan and mesh condition.",
    },

    /* =======================================================
       10. GLASS PARTITION
    ======================================================= */

    {
      id: "glass-partition",
      icon: "glass",

      title:
        rates.glassPartition ||
        "Glass Partition Cleaning",

      description:
        "Cleaning of accessible glass partition surfaces for a clearer and cleaner finish.",

      image:
        "/images/rate-card/glass-partition-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.upTo20SqFt ||
            "Up to 20 Sq. Ft.",
          price: "₹199",
        },
      ],

      included: [
        {
          text:
            "Glass surface cleaning",
        },
        {
          text:
            "Frame wiping",
        },
        {
          text:
            "Dust & marks removal",
        },
        {
          text:
            "Surface finishing",
        },
      ],

      approach:
        "Suitable glass-cleaning products are used according to the surface requirement.",
    },

    /* =======================================================
       11. WASH BASIN
    ======================================================= */

    {
      id: "wash-basin",
      icon: "washroom",

      title:
        rates.washBasin ||
        "Wash Basin Cleaning",

      description:
        "Cleaning of wash basin surfaces, fittings and accessible surrounding areas.",

      image:
        "/images/rate-card/wash-basin-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.singleTop ||
            "Single Top",
          price: "₹99",
        },
      ],

      included: [
        {
          text:
            "Basin bowl cleaning",
        },
        {
          text:
            "Tap & fitting cleaning",
        },
        {
          text:
            "Dirt & residue removal",
        },
        {
          text:
            "Surrounding surface wiping",
        },
      ],

      approach:
        "Suitable cleaning products are used according to the basin surface and cleaning requirement.",
    },

    /* =======================================================
       12. WOODEN DOOR
    ======================================================= */

    {
      id: "wooden-door",
      icon: "door",

      title:
        rates.woodenDoors ||
        "Wooden Door Cleaning",

      description:
        "Cleaning and wiping of accessible wooden door surfaces.",

      image:
        "/images/rate-card/wooden-door-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.plainDoor ||
            "Plain Door",
          price: "₹99",
        },
      ],

      included: [
        {
          text:
            "Door surface cleaning",
        },
        {
          text:
            "Dust removal",
        },
        {
          text:
            "Handle & reachable areas",
        },
        {
          text:
            "Normal dirt removal",
        },
      ],

      approach:
        "Suitable cleaning products are used according to the door surface and material.",
    },

    /* =======================================================
       13. MIRROR
    ======================================================= */

    {
      id: "mirror",
      icon: "glass",

      title:
        rates.mirror ||
        "Mirror Cleaning",

      description:
        "Basic mirror cleaning for a clearer, cleaner and streak-reduced finish.",

      image:
        "/images/rate-card/mirror-cleaning.png",

      duration:
        "To be confirmed",

      options: [
        {
          label:
            rates.basicWiping ||
            "Basic Wiping",
          price: "₹49",
        },
      ],

      included: [
        {
          text:
            "Mirror surface cleaning",
        },
        {
          text:
            "Normal dust removal",
        },
        {
          text:
            "Finger mark removal",
        },
        {
          text:
            "Accessible edge wiping",
        },
      ],

      approach:
        "Suitable glass and mirror cleaning products are used according to the surface requirement.",
    },
  ];

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      id="rates"
      className="
        bg-white
        py-8

        sm:py-12

        md:py-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-3

          sm:px-5

          md:px-6

          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mb-6
            max-w-3xl

            sm:mb-8

            md:mb-10
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#00A3E0]

              sm:text-xs
            "
          >
            {rates.individual ||
              "INDIVIDUAL SERVICES"}
          </p>

          <h2
            className="
              mt-1.5
              text-2xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#031B60]

              sm:mt-2
              sm:text-3xl

              md:text-4xl
            "
          >
            {rates.heading ||
              "Choose a service to view prices"}
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-5
              text-[#506482]

              sm:text-base
              sm:leading-7
            "
          >
            {rates.subtitle ||
              "Select any service below to view its available options, pricing and service details."}
          </p>
        </div>

        {/* ===================================================
            SERVICE LIST
        =================================================== */}

        <div
          className="
            space-y-3

            sm:space-y-4
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={
                openServiceId ===
                service.id
              }
              onToggle={() =>
                toggleService(
                  service.id
                )
              }
            />
          ))}
        </div>

        {/* ===================================================
            PRICING NOTE
        =================================================== */}

        <div
          className="
            mt-5
            rounded-xl
            border
            border-[#dbe8f4]
            bg-[#f8fbff]
            px-4
            py-3
          "
        >
          <p
            className="
              text-xs
              leading-5
              text-[#607590]
            "
          >
            <strong
              className="text-[#031B60]"
            >
              {rates.noteTitle ||
                "Note:"}
            </strong>{" "}
            {rates.note ||
              "Service availability and final requirements may be confirmed based on the customer's location and service condition."}
          </p>
        </div>
      </div>
    </section>
  );
}