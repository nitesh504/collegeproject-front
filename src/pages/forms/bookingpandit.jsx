import { useLocation, Link } from "react-router-dom";
import { ShivaJi } from "../../assets/index.js";
import { UserIcon } from "lucide-react";
import Footer from "../homePage/Footer.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const handleBackClick = () => {
  window.history.back();
};

function BookingPandit() {
  const location = useLocation();
  const { id, name } = location.state || {}; // Receive data from previous page
  const [formData, setFormData] = useState({
    name: name || "", // Pre-fill with the Pandit's name
    phone: "",
    email: "",
    samagri: "yes",
    event_type: "",
    date: "",
    address: "",
    detail: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to track if form is submitted

  useEffect(() => {
    if (id && name) {
      setFormData((prev) => ({
        ...prev,
        name: name, // Pre-fill the name field with the Pandit's name
      }));
    }
  }, [id, name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.event_type) errors.event_type = "Event type is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.detail) errors.detail = "Detail is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before sending data
    if (!validateForm()) return;

    try {
      // Send form data to backend
      const response = await axios.post("http://localhost:8000/create-booking/", formData);

      console.log("Form submitted successfully:", response.data);
      setIsFormSubmitted(true); // Set form submission state to true

      // You can reset the form data here if needed
      setFormData({
        name: "",
        phone: "",
        email: "",
        samagri: "yes",
        event_type: "",
        date: "",
        address: "",
        detail: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsFormSubmitted(false);
    }
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="logoHead w-full h-16 flex items-center justify-between px-4 py-2 border-b-2">
          {/* Back Icon */}
          <button
            onClick={handleBackClick}
            aria-label="Go back to home"
            className="text-gray-600 hover:text-black transition border-0 focus:outline-none"
          >
            <span className="text-3xl bg-white px-5 py-2 rounded-3xl hover:shadow transition">
              &larr; <strong className="text-xl">Back</strong>
            </span>
          </button>

          {/* Heading */}
          <h1 className="text-4xl font-bold">Subha Labh</h1>

          {/* User Profile */}
          <div className="userProfileWrap">
            <Link to="/profile" aria-label="Go to user profile">
              <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
            </Link>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96 lg:h-[400px]">
        <img
          src={ShivaJi}
          alt={name || "Pandit Image"}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="panditUpContent border-b-2 pb-2">
              <h1 className="text-3xl font-bold mt-4">{name || "Pandit Name"}</h1>
              <p className="text-gray-500 text-lg py-2">Jyotishacharya</p>
              <p className="text-gray-700 font-medium text-xl">
                Price on request
              </p>
            </div>

            {/* Paragraph about Pandit */}
            <p className="text-gray-600 mt-4 text-justify leading-relaxed pr-4 text-xl">
              Jyotishacharya Pandit is a revered guide in the spiritual and astrological realm, widely known for his knowledge and dedication in helping individuals find the right path through astrology. He has served countless individuals and families, offering guidance that leads them to better understand themselves, their purpose in life, and the astrological influences that shape their destinies. Whether it’s resolving personal dilemmas, making important life decisions, or performing sacred rituals, Pandit brings immense knowledge and wisdom to the table. With a profound understanding of Vedic astrology, his wisdom is timeless and reliable for anyone seeking to achieve balance and harmony in their life.
            </p>
          </div>

          {/* Right Section - Booking Form */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 lg:p-12 max-w-lg mx-auto border-y-2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name and Phone Number */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {formErrors.name && (
                  <div className="text-red-500 text-sm">{formErrors.name}</div>
                )}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 mt-4 md:mt-0"
                />
                {formErrors.phone && (
                  <div className="text-red-500 text-sm">{formErrors.phone}</div>
                )}
              </div>

              {/* Email Address */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {formErrors.email && (
                <div className="text-red-500 text-sm">{formErrors.email}</div>
              )}

              {/* Pooja with Samagri */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <label className="font-medium">Pooja with Samagri:</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="samagri"
                      value="yes"
                      checked={formData.samagri === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="samagri"
                      value="no"
                      checked={formData.samagri === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Event Type */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <label className="font-medium">Event Type:</label>
                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select Event</option>
                  <option value="housewarming">Housewarming</option>
                  <option value="wedding">Wedding</option>
                  <option value="satyanarayan_pooja">Satyanarayan Pooja</option>
                </select>
                {formErrors.event_type && (
                  <div className="text-red-500 text-sm">{formErrors.event_type}</div>
                )}
              </div>

              {/* Date */}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {formErrors.date && (
                <div className="text-red-500 text-sm">{formErrors.date}</div>
              )}

              {/* Address */}
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {formErrors.address && (
                <div className="text-red-500 text-sm">{formErrors.address}</div>
              )}

              {/* Detail */}
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleChange}
                placeholder="Detail"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              {formErrors.detail && (
                <div className="text-red-500 text-sm">{formErrors.detail}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 text-white rounded-lg font-medium bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
              >
                Book Now
              </button>
            </form>
            {isFormSubmitted && (
              <div className="mt-4 text-green-600 font-semibold text-lg">
                Booking Confirmed! Thank you for booking.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mainSection">
        <Footer />
      </footer>
    </div>
  );
}

export default BookingPandit;
