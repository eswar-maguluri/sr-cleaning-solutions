"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ReviewForm() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-form-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".review-form-title", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".review-form-card", {
        opacity: 0,
        y: 55,
        scale: 0.98,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".review-form-field", {
        opacity: 0,
        y: 18,
        duration: 0.65,
        stagger: 0.08,
        delay: 0.45,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        rating: Number(rating),
        review,
      });

      alert(
        t.language === "te"
          ? "సమీక్ష విజయవంతంగా పంపబడింది!"
          : "Review submitted successfully!"
      );

      setName("");
      setRating(5);
      setReview("");
    } catch (err) {
      console.error(err);

      alert(
        t.language === "te"
          ? "సమీక్ష పంపడంలో విఫలమైంది"
          : "Failed to submit review"
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        md:py-32
        bg-[#031B60]
      "
    >
      {/* Premium background atmosphere */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#00A3E0]/15
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-32
          w-[480px]
          h-[480px]
          rounded-full
          bg-[#25D366]/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* Fine decorative grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-4xl
          mx-auto
          px-5
          sm:px-6
        "
      >
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">

          <div
            className="
              review-form-eyebrow
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/15
              bg-white/[0.06]
              backdrop-blur-xl
              text-white/75
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.18em]
              uppercase
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#25D366]
                shadow-[0_0_12px_rgba(37,211,102,0.8)]
              "
            />

            {t.reviews.leaveReview}
          </div>

          <h2
            className="
              review-form-title
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-[-0.04em]
              leading-[1.05]
              text-white
            "
          >
            {t.reviews.leaveReview}
          </h2>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={submitReview}
          className="
            review-form-card
            relative
            overflow-hidden
            bg-white/[0.97]
            backdrop-blur-2xl
            border
            border-white/30
            rounded-[28px]
            sm:rounded-[32px]
            p-5
            sm:p-7
            md:p-10
            space-y-4
            sm:space-y-5
            shadow-[0_30px_90px_rgba(0,0,0,0.25)]
          "
        >
          {/* Top gradient accent */}
          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-1
              bg-gradient-to-r
              from-[#031B60]
              via-[#00A3E0]
              to-[#25D366]
            "
          />

          {/* Subtle card glow */}
          <div
            className="
              absolute
              -top-32
              -right-32
              w-72
              h-72
              rounded-full
              bg-[#00A3E0]/10
              blur-[90px]
              pointer-events-none
            "
          />

          <div className="relative z-10 space-y-4 sm:space-y-5">

            {/* Name */}
            <div className="review-form-field">
              <input
                type="text"
                placeholder={t.reviews.yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="
                  w-full
                  min-h-[54px]
                  sm:min-h-[58px]
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#F7FAFD]
                  border
                  border-[#D8E8F8]
                  text-[#0B1938]
                  placeholder:text-[#8090A7]
                  text-base
                  outline-none
                  shadow-[inset_0_1px_2px_rgba(3,27,96,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#B8D5EA]
                  focus:bg-white
                  focus:border-[#00A3E0]
                  focus:ring-4
                  focus:ring-[#00A3E0]/10
                  focus:shadow-[0_10px_30px_rgba(0,163,224,0.08)]
                "
              />
            </div>

            {/* Rating */}
            <div className="review-form-field">
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="
                  w-full
                  min-h-[54px]
                  sm:min-h-[58px]
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#F7FAFD]
                  border
                  border-[#D8E8F8]
                  text-[#0B1938]
                  text-base
                  outline-none
                  shadow-[inset_0_1px_2px_rgba(3,27,96,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#B8D5EA]
                  focus:bg-white
                  focus:border-[#00A3E0]
                  focus:ring-4
                  focus:ring-[#00A3E0]/10
                  focus:shadow-[0_10px_30px_rgba(0,163,224,0.08)]
                  cursor-pointer
                "
              >
                <option value="5">★★★★★</option>
                <option value="4">★★★★</option>
                <option value="3">★★★</option>
                <option value="2">★★</option>
                <option value="1">★</option>
              </select>
            </div>

            {/* Review */}
            <div className="review-form-field">
              <textarea
                rows="5"
                placeholder={t.reviews.writeReview}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                className="
                  w-full
                  min-h-[140px]
                  sm:min-h-[160px]
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#F7FAFD]
                  border
                  border-[#D8E8F8]
                  text-[#0B1938]
                  placeholder:text-[#8090A7]
                  text-base
                  leading-relaxed
                  outline-none
                  resize-y
                  shadow-[inset_0_1px_2px_rgba(3,27,96,0.03)]
                  transition-all
                  duration-300
                  hover:border-[#B8D5EA]
                  focus:bg-white
                  focus:border-[#00A3E0]
                  focus:ring-4
                  focus:ring-[#00A3E0]/10
                  focus:shadow-[0_10px_30px_rgba(0,163,224,0.08)]
                "
              />
            </div>

            {/* Submit */}
            <div className="review-form-field pt-1">
              <button
                type="submit"
                className="
                  group
                  relative
                  w-full
                  min-h-[56px]
                  sm:min-h-[60px]
                  overflow-hidden
                  bg-[#25D366]
                  hover:bg-[#1FBD5B]
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-bold
                  text-base
                  sm:text-lg
                  transition-all
                  duration-300
                  shadow-[0_14px_35px_rgba(37,211,102,0.22)]
                  hover:shadow-[0_18px_45px_rgba(37,211,102,0.30)]
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                <span className="relative z-10">
                  {t.reviews.submit}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}