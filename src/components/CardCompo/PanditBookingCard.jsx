

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PanditBookingCard = ({ image, name, id, education, price }) => {
  const navigate = useNavigate();

  // Handle the "Book Now" click event
  const handleBookNow = () => {
    navigate("/booking-pandit", {
      state: { id, name }, // Pass the pandit id and name to the target page
    });
  };

  return (
    <div className="max-w-xs rounded-lg border border-gray-200 shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105">
      {/* Display the dynamic image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{education}</p>
        <p className="text-md font-medium text-gray-700 mt-2">
          {price ? `Price: ₹${price}` : "Price on request"}
        </p>
        <button
          className="mt-4 w-full bg-purpleCustom text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

// Define prop types to enforce the structure of props
PanditBookingCard.propTypes = {
  image: PropTypes.string.isRequired, // image prop is a string
  name: PropTypes.string.isRequired,  // name prop is a string
  id: PropTypes.number.isRequired,    // id prop is a number
  education: PropTypes.string.isRequired, // status prop is a string
  price: PropTypes.number, // price prop is an optional number
};

export default PanditBookingCard;
