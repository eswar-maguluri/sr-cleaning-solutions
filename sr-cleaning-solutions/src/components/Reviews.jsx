"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "reviews")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("MY REVIEWS:", data);
      setReviews(data);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

  useEffect(() => {
    if (!reviews.length) return;

    const ctx = gsap.context(() => {
      const heading = document.querySelector(".reviews-header");
      const cards = gsap.utils.toArray(".review-card");

      if (!heading || !cards.length) return;

      gsap.fromTo(
        heading,
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
            trigger: heading,
            start: "top 90%",
            once: true,
          },
        }
      );

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
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reviews-slider-wrap",
            start: "top 92%",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [reviews]);

  return (
    <section
      id="reviews"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        md:py-32
        bg-[#eef8ff]
      "
    >
      {/* Background atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          -top-48
          -left-48
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#00a3e0]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-48
          w-[520px]
          h-[520px]
          rounded-full
          bg-[#25d366]/10
          blur-[150px]
        "
      />

      {/* Fine background grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,#031b60_1px,transparent_1px),linear-gradient(to_bottom,#031b60_1px,transparent_1px)]
          bg-[size:48px_48px]
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
        {/* Heading */}

        <div className="reviews-header text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex
              items-center
              gap-3
              mb-5
              px-4
              py-2
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border
              border-[#cfe5f5]
              shadow-[0_8px_25px_rgba(3,27,82,0.06)]
            "
          >
            <span className="relative flex w-2 h-2">
              <span
                className="
                  absolute
                  inline-flex
                  w-full
                  h-full
                  rounded-full
                  bg-[#25d366]
                  opacity-60
                  animate-ping
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  w-2
                  h-2
                  rounded-full
                  bg-[#25d366]
                "
              />
            </span>

            <span
              className="
                text-[10px]
                sm:text-xs
                font-bold
                tracking-[0.2em]
                uppercase
                text-[#0b5ed7]
              "
            >
              Reviews
            </span>
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-[#031b60]
              tracking-[-0.045em]
              leading-[0.98]
            "
          >
            {t.reviews.heading}
          </h2>
        </div>

        {/* Slider */}

        <div className="reviews-slider-wrap mt-12 sm:mt-14 md:mt-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.15,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 2.25,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="reviews-swiper !overflow-visible pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="!h-auto"
              >
                <div
                  className="
                    review-card
                    group
                    relative
                    h-full
                    min-h-[330px]
                    sm:min-h-[350px]
                    md:min-h-[365px]
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[26px]
                    bg-white
                    border
                    border-[#cfe5f5]
                    p-6
                    sm:p-7
                    md:p-8
                    shadow-[0_18px_50px_rgba(3,27,82,0.07)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#8ed4ef]
                    hover:shadow-[0_28px_65px_rgba(3,27,82,0.14)]
                  "
                >
                  {/* Premium top gradient */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-[3px]
                      bg-gradient-to-r
                      from-[#031b60]
                      via-[#00a3e0]
                      to-[#25d366]
                    "
                  />

                  {/* Decorative quote */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      top-5
                      right-6
                      text-[90px]
                      leading-none
                      font-serif
                      font-bold
                      text-[#031b60]/[0.045]
                      select-none
                    "
                  >
                    “
                  </div>

                  <div className="relative z-10">
                    {/* Rating */}

                    <div
                      className="
                        flex
                        items-center
                        gap-1
                        text-[#f6b800]
                        text-lg
                        sm:text-xl
                        tracking-wide
                      "
                    >
                      {"★".repeat(review.rating)}
                    </div>

                    {/* Small divider */}

                    <div
                      className="
                        mt-5
                        w-10
                        h-[2px]
                        rounded-full
                        bg-gradient-to-r
                        from-[#00a3e0]
                        to-[#25d366]
                        transition-all
                        duration-500
                        group-hover:w-16
                      "
                    />

                    {/* Review */}

                    <p
                      className="
                        mt-5
                        text-[#071b3d]
                        text-[15px]
                        sm:text-base
                        leading-7
                        sm:leading-8
                        font-medium
                      "
                    >
                      "{review.review}"
                    </p>
                  </div>

                  {/* Reviewer */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-3
                      mt-8
                      pt-5
                      border-t
                      border-[#e2eef7]
                    "
                  >
                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        shrink-0
                        rounded-full
                        bg-[#031b60]
                        text-white
                        font-bold
                        text-sm
                        shadow-[0_8px_20px_rgba(3,27,96,0.15)]
                        overflow-hidden
                      "
                    >
                      <span className="relative z-10">
                        {review.name?.charAt(0)?.toUpperCase()}
                      </span>

                      <span
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-[#00a3e0]
                          to-[#031b60]
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="
                          font-bold
                          text-[#031b60]
                          text-base
                          sm:text-lg
                          truncate
                        "
                      >
                        {review.name}
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      -right-24
                      w-48
                      h-48
                      rounded-full
                      bg-[#00a3e0]/10
                      blur-[60px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}