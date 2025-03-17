import {
  PanditImg,
  VastuDetectionImg,
  VenueBookingImg,
} from "../../assets/index.js";
import Card from "../../components/CardCompo/Card.jsx";

const PersonalRecommendationPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-1 md:justify-around md:gap-1 items-center">
        <Card
          title="Pandit Booking"
          description="Simplify your rituals with ease! Book experienced pandits for your ceremonies, tailored to your traditions and requirements, at the click of a button."
          image={PanditImg}
          buttonText="Book Now" 
        />
        <Card
          title="Vastu Detection"
          description="Vastu Detection is a process of analyzing a space's alignment with Vastu Shastra principles to enhance harmony and positive energy. It identifies structural imbalances and provides remedies for better health, prosperity, and well-being."
          image={VastuDetectionImg}
          buttonText="Enquire Now"
        />
        <Card
          title="Venue Booking"
          description="Plan your perfect event with ease! Our venue booking system helps you find and secure the ideal location for your special occasion, tailored to your preferences and needs."
          image={VenueBookingImg}
          buttonText="Book Now"
        />
      </div>
    </div>
  );
};

export default PersonalRecommendationPage;
