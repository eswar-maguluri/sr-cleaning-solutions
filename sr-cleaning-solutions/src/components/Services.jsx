"use client";

const services = [
  {
    title: "Standard Clean",
    badge: "Maintenance",
    items: [
      "Dusting all furniture & surfaces",
      "Vacuuming rugs & carpets",
      "Detailed floor mopping",
      "Bathroom sanitization",
      "Kitchen wipe down",
      "Trash removal",
    ],
    featured: false,
  },
  {
    title: "Deep Clean",
    badge: "Most Requested",
    items: [
      "Baseboard cleaning",
      "Heavy grout scrubbing",
      "Ceiling fan cleaning",
      "Cabinet polishing",
      "Detailed bathroom restoration",
      "Everything in Standard Clean",
    ],
    featured: true,
  },
  {
    title: "Move In / Out",
    badge: "Vacant Property",
    items: [
      "Inside cabinets",
      "Inside drawers",
      "Window tracks & sills",
      "Appliance cleaning",
      "Full property refresh",
      "Inspection ready finish",
    ],
    featured: false,
  },
];
export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-[#081120] to-[#0c1729]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-yellow-400 uppercase tracking-[4px] text-sm">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Clear Cleaning Checklists
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Transparent service packages designed to keep your home spotless.
          </p>
        </div>
        <div className="
             grid
             grid-cols-1
             lg:grid-cols-3
             gap-6
             mt-16
             "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`
              relative
              rounded-[32px]
              p-6 md:p-8
              backdrop-blur-xl
              border
              transition-all
              duration-300
              hover:-translate-y-2
              ${
                service.featured
                  ? "border-yellow-500 bg-white/10"
                  : "border-white/10 bg-white/5"
              }
              `}
            >
              {service.featured && (
                <div
                  className="
                  absolute
                  -top-4
                  left-8
                  bg-yellow-500
                  text-black
                  text-xs
                  font-bold
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  MOST REQUESTED
                </div>
              )}
              <div className="text-yellow-400 text-sm uppercase tracking-wider">
                {service.badge}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                {service.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919494239260"
                className="
                mt-10
                inline-block
                w-full
                text-center
                py-4
                rounded-full
                font-semibold
                bg-yellow-500
                text-black
                hover:bg-yellow-400
                transition
                "
              >
                Call To Book
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}