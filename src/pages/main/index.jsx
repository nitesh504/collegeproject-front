import AboutUs from "../homePage/AboutUs";
import BestSellers from "../homePage/BestSellers";
import ContactSection from "../homePage/ContactSection";
import Footer from "../homePage/Footer";
import Header from "../homePage/Header";
import HeroSection from "../homePage/HeroSection";
import Services from "../homePage/Services";
import Testimonial from "../homePage/Testimonial";
const index = () => {
  return (
    <main>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Header />
      </section>
      <section>
        <HeroSection />
      </section>
      <section className="mainSection">
        <Services />
      </section>
      <section className="mainSection">
        <BestSellers />
      </section>
      <section className="mainSection relative z-0 w-full">
        <AboutUs />
      </section>
      <section className="mainSection">
        <Testimonial />
      </section>
      <section className="mainSection">
        <ContactSection />
      </section>
      <section className="mainSection">
        <Footer />
      </section>
    </main>
  );
};
export default index;
