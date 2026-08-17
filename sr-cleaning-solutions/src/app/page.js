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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RateCards />
      <Equipment />
      <Terms />
      <Reviews />
      <ReviewForm />
      <About />
      <Udyam />
      <Footer />
      <FloatingButtons />
    </>
  );
}