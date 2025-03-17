import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ title, description, image, buttonText }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    // condition for enquire now
    console.log("This is button text,", buttonText);
    if (buttonText === "Enquire Now") {
      navigate("/enquire-now", { replace: true });
    } else if (buttonText === "Order Now") {
      navigate("/order-now", { replace: true });
    } else {
      navigate("/book-a-pandit", { replace: true });
    }
  };
  return (
    <div className="card text-center mt-4 max-w-sm overflow-hidden text-gray-800 p-4">
      {/* Uncomment if image is available */}
      <div className="flex justify-center">
        <img className="w-[150px] h-[150px] object-cover rounded-l-3xl rounded-r-3xl" src={image} alt={title} />
      </div>
      <div className="card-content text-center my-6">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="ellipsis card-description text-gray-600 text-base my-4">
          {description}
        </p>
        <button
          onClick={handleBookNow}
          className="text-white font-bold py-2 px-6 rounded-full bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// adding prop types validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

// adding default props type validation
Card.defaultProps = {
  description: "No description provided",
  image: null,
  buttonText: "Click Me",
};

export default Card;
