"use client";

import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "reviews"), {
        name,
        rating: Number(rating),
        review,
      });
      alert("Review submitted successfully!");
      setName("");
      setRating(5);
      setReview("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    }
  };
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Leave A Review
        </h2>
        <form
          onSubmit={submitReview}
          className="
        bg-white/5
          border
        border-white/10
          rounded-3xl
          p-6
          md:p-8
          space-y-5
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
            w-full
            p-4
            md:p-5
            rounded-xl
          bg-black/20
            border
          border-white/10
          text-white
            text-base
            "
          />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="
            w-full
            p-4
            md:p-5
            rounded-xl
          bg-black/20
            border
          border-white/10
          text-white
          text-base
          "
          >
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>
          <textarea
            rows="5"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="
            w-full
            p-4
            md:p-5
            rounded-xl
          bg-black/20
            border
          border-white/10
          text-white
          text-base
          "
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}