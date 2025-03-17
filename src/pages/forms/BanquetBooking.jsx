
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { UserIcon } from "lucide-react";
import { MaximsImage } from "../../assets";
import Footer from "../homePage/Footer";
import { Link } from "react-router-dom";

const BanquetBooking = () => {
  const location = useLocation();
  const venue = location.state;
  const [formData, setFormData] = useState({
    banquet: venue?.id || "",
    phone: "",
    email: "",
    start_date: "",
    end_date: "",
    number_of_guests: "",
    event_type: "",
    additional_request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/create-venue-booking/", formData);
      if (response.status === 201) {
        alert("Booking created successfully!");
      } else {
        alert("Failed to create booking. Please try again.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("An error occurred. Please check your input.");
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white z-50 border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={handleBackClick} className="flex items-center text-purple-600">
            <span className="text-3xl">&larr;</span>
            <span className="ml-2">Back</span>
          </button>
          <h1 className="text-2xl font-bold">SUBHA LABH</h1>
          <Link to="/profile">
            <UserIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>

      {/* Banner Image */}
      <div className="mt-16">
        <img
          src={MaximsImage}
          alt="Maxims Banquet & Events"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Main Content with Side-by-Side Layout */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold">{venue?.name}</h2>
            <p className="text-gray-600 mt-1">{venue?.location}</p>
            <p className="text-gray-900 mt-2">Starting Price Rs {venue?.price}</p>

            {/* About This Banquet - Updated to match design */}
            <div className="mt-8">
              <h3 className="text-xl font-medium">About This Banquet</h3>
              <p className="mt-3 text-gray-500 text-base">
                {venue?.description || "We are a new lavish banquet in the center of Lalitpur, where we serve quality good service. we are always ready to make your important day memorable."}
              </p>
            </div>

            {/* Where you'll be - Updated to match design */}
            <div className="mt-8">
              <h3 className="text-xl font-medium">Where you'll be</h3>
              <div className="mt-3 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28248.902661527733!2d85.3213184!3d27.7446656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1734808816406!5m2!1sen!2snp"
                  className="w-full h-64"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Book Now</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Venue Name</label>
                  <input
                    type="text"
                    name="venue_name"
                    value={venue?.name || ""}
                    readOnly
                    className="mt-1 p-2 w-full border rounded-md bg-gray-100"
                  />
                </div>

              
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg text-sm"
                    placeholder="Start date"
                    required
                  />
                  <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg text-sm"
                    placeholder="End Date"
                    required
                  />
                </div>

                <select
                  name="number_of_guests"
                  value={formData.number_of_guests}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg text-sm"
                  required
                >
                  <option value="">Number of Guest</option>
                  <option value="50">Up to 50</option>
                  <option value="100">Up to 100</option>
                  <option value="200">Up to 200</option>
                </select>

                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg text-sm"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                </select>

                <textarea
                  name="additional_request"
                  value={formData.additional_request}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg text-sm"
                  placeholder="Additional Request"
                  rows="4"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer with updated background color */}
        <div className="mt-12 bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Useful Links</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Private Policy Links</li>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>Testimonials</li>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-sm text-gray-600">
                  Nepal, Baneshor, Thapagau, Presidential Graduate School, Tin talla, 301
                </p>
                <p className="text-sm text-gray-600 mt-2">+977-9841234567</p>
                <p className="text-sm text-gray-600">yetahamro@email.com</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanquetBooking;