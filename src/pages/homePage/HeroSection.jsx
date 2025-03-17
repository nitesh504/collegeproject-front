// eslint-disable-next-line no-unused-vars
import React from "react";
import { mainBanner, bannerBg } from "../../assets/index.js";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroSection() {
  // const navigate = useNavigate();
  // const handleEnquireNow = () => {
  // navigate("/enquire-now", { replace: true });
  // window.location.href("/enquire-now");
  // }
  return (
    <>
      <div className="banner-slider relative">
        <div className="slide">
          <img
            src={bannerBg}
            alt="Gradient background with vibrant colors"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="slide overlay absolute inset-0 bg-black/50"></div>
        <div className="slide">
          <img
            src={mainBanner}
            alt="Astrology-themed background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="bannerContent text-center py-6 sm:py-8 md:py-10 relative mt-6 sm:mt-8 md:mt-10">
          <h1 className="font-bold text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-tight mb-3 sm:mb-4 md:mb-6 italianno-regular">
            Charting your Astrological
          </h1>
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4 kanit-semibold">
            Prediction Accurately
          </h2>
          <div className="btnBoxWrap  mt-6">
          <Link
            to="/enquire-now"
            aria-label="Navigate to the Enquire Now page"
            className="text-white font-bold text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
          >
            Enquire Now
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
