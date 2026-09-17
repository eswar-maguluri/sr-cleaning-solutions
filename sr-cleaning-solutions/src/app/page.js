"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RateCards from "../components/RateCards";
import Equipment from "../components/Equipment";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import About from "../components/About";
import Terms from "../components/Terms";
import Udyam from "../components/Udyam";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import EnquiryForm from "../components/EnquiryForm";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] =
    useState(false);
  const [selectedService, setSelectedService] =
    useState("");
  const openEnquiry = (serviceName = "") => {
    setSelectedService(serviceName);
    setIsEnquiryOpen(true);
  };
  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Services
        onEnquiry={openEnquiry}
      />
      <RateCards
        onEnquiry={openEnquiry}
      />
      <Equipment />
      <Terms />
      <Reviews />
      <ReviewForm />
      <About />
      <Udyam />
      <Footer />
      <FloatingButtons />
      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
        selectedService={selectedService}
      />
    </>
  );
}