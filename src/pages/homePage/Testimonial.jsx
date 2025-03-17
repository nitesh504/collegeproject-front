import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../../components/testimonial/testimonial.jsx";
import "../../pages/homePage/Testimonial.module.css";
import { testimonialBgIcon } from "../../assets/index.js";

const Testimonial = () => {
  return (
    <div
      className="main-slider w-full bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 py-32 md:py-40 lg:py-44"
      style={{
        backgroundImage: `url(${testimonialBgIcon}), linear-gradient(to right, #9F7AEA, #D53F8C)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-full"
          containerClass="container-with-dots"
          dotListClass="custom-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass="slider-responsive"
          slidesToSlide={1}
          swipeable
          autoPlay
        >
          <TestimonialCard
            description="I had an incredible experience with Subha Labh. The astrologer provided deep insights into my career and personal life, helping me make important decisions with confidence. Highly recommended!"
            title="Testimonial"
            name="John Doe"
          />
          <TestimonialCard
            description="I had an incredible experience with Subha Labh. The astrologer provided deep insights into my career and personal life, helping me make important decisions with confidence. Highly recommended!"
            title="Testimonial"
            name="Jane Smith"
          />
          <TestimonialCard
            description="I had an incredible experience with Subha Labh. The astrologer provided deep insights into my career and personal life, helping me make important decisions with confidence. Highly recommended!"
            title="Testimonial"
            name="Binu Tamang"
          />
        </Carousel>
      </div>

      <style>
        {`
      .react-multi-carousel-list {
        margin: 20px 0 !important;
        padding: 40px 0 !important;
      }

      .custom-dots .react-multi-carousel-dot button {
        width: 20px !important;
        height: 20px !important;
        border: 1px solid #fff !important;
      }

      .react-multi-carousel-dot--active button {
        background-color: transparent !important;
      }

      /* For smaller screens */
      @media (max-width: 640px) {
        .main-slider {
          padding: 20px 0;
        }
      }

      /* Custom slider responsive styles */
      .slider-responsive .react-multi-carousel-item {
        display: flex;
        justify-content: center;
      }
    `}
      </style>
    </div>
  );
};

export default Testimonial;
