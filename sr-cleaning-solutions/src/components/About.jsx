"use client";

import { useLanguage } from "../context/LanguageContext";
export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-[#081120] to-[#0c1729]"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          {t.about.heading}
        </h2>
        <p className="mt-6 md:mt-8 text-base md:text-xl text-slate-300 leading-relaxed">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}