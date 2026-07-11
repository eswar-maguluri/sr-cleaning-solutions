"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    loadReviews();
  }, []);
  const loadReviews = async () => {
    const querySnapshot = await getDocs(
      collection(db, "reviews")
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(data);
  };
  return (
    <section
      id="reviews"
      className="py-32 bg-[#081120]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="
          text-center
          text-4xl
          md:text-6xl
          font-bold
          mb-16
          "
        >
          What Clients Are Saying
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div
                className="
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-[32px]
                p-8
                min-h-[280px]
                flex flex-col
                justify-between
                "
              >
                <div>
                  <div className="text-yellow-400 text-xl">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-slate-300 mt-5 leading-8">
                    "{review.review}"
                  </p>
                </div>
                <div className="font-semibold text-white text-lg">
                  {review.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}