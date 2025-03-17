import PropTypes from "prop-types";
import "../../pages/homePage/Testimonial.module.css"

const TestimonialCard = ({ title, description, name }) => {
  return (
    <div className="text-center px-60">
      <h1 className="font-bold text-white my-5 text-8xl italianno-regular">{title}</h1>
      <p className="text-white my-2 text-2xl kanit-semibold">{description}</p>
      <strong className="text-white my-5 block kanit-semibold text-2xl">{name}</strong>
    </div>
  );
};

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialCard;
