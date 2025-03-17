import { useState } from "react";
import { BellBg } from "../../assets";
import Footer from "../homePage/Footer";
import { UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

function BookaPandit() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    samagri: "Yes",
    date: "",
    address: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleBackClick = () => {
    window.history.back();
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BellBg})` }}
    >
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0">
        <div className="logoHead w-full h-16 flex items-center justify-between px-4 py-2 z-10 border-b-2">
          {/* Back Icon */}
          <button
            // to="/dashboard"
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

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative flex flex-col sm:flex-row items-center justify-start min-h-screen px-4 sm:pl-10 py-16 mt-8">
          <div className="textWrapper">
            <h1
              className="text-6xl font-bold text-center text-white mb-6"
              style={{
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
              }}
            >
              Book a Pandit
            </h1>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                    aria-label="Enter your name"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                    aria-label="Enter your phone number"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Enter your email address"
                />

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Select event type"
                >
                  <option value="">Select Event Type</option>
                  <option value="Housewarming">Housewarming</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Satyanarayan Pooja">
                    Satyanarayan Pooja
                  </option>
                </select>

                <div className="flex items-center space-x-4 justify-between">
                  <span className="text-gray-600">Pooja with Samagri:</span>
                  <label className="flex">
                    <input
                      type="radio"
                      name="samagri"
                      value="Yes"
                      checked={formData.samagri === "Yes"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    Yes
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      name="samagri"
                      value="No"
                      checked={formData.samagri === "No"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    No
                  </label>
                </div>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  aria-label="Select a date"
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Enter address"
                ></textarea>

                <textarea
                  name="detail"
                  placeholder="Detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Enter additional details"
                ></textarea>

                <button
                  type="submit"
                  className="w-full text-white py-2 px-4 rounded bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BookaPandit;
