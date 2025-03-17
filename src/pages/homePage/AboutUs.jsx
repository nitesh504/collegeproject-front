// eslint-disable-next-line no-unused-vars
import React from "react";
import { HandImg, AboutImg } from "../../assets/index.js";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
  {/* Title Section */}
  <div className="text-center mb-4">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
      About Us
    </h1>
  </div>

  {/* Hand Image (Hidden on Small Screens) */}
  <img
    src={HandImg}
    alt="Hand"
    className="hidden sm:block hand-img mx-auto mb-6"
  />

  {/* Content Section */}
  <div className="block">
    {/* Image Section */}
    <div className="flex justify-center h-[350px]">
      <img
        src={AboutImg}
        alt="Astrology Chart and Tools"
        className="h-full object-cover w-[90%] sm:w-[500px] rounded-3xl"
      />
    </div>

    {/* Text Section */}
    <div className="mt-6 text-center">
      <p className="text-base sm:text-lg text-gray-600">
        At Subha Labh, we are dedicated to providing expert services in
        astrology, vastu, and wellness. Our team of experienced professionals
        offers personalized consultations, aiming to guide you toward a
        harmonious and prosperous life. Whether you&apos;re seeking insights
        through astrology, enhancing your living space with vastu solutions, or
        exploring the power of gemstones, we are here to support you on your
        journey. Trust us to help you make informed decisions and achieve a
        balanced, fulfilling life.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutUs;
