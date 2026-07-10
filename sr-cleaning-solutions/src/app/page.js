import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import About from "../components/About";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <ReviewForm />
      <About />
      <Footer />
      <FloatingButtons />
    </>
  );
}