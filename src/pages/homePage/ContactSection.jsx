// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import {DiceImg} from "../../assets/index";
import DiceImg from "../../assets/images/Dice.png";
import "../../index.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="text-center">
          <h2 className="font-bold text-xl mb-4">Contact Details</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+977-9841234567"
                className="text-black hover:underline"
              >
                +977-9841234567
              </a>
            </li>
            <li>
              <a
                href="mailto:yetahamro@email.com"
                className="text-black hover:underline"
              >
                yetahamro@email.com
              </a>
            </li>
          </ul>
        </div>
        {/* Business Hours */}
        <div className="text-center">
          <h2 className="font-bold text-xl mb-4">Business Hours</h2>
          <ul className="space-y-3">
            <li>
              <p>Mon - Sun: 10:00 AM - 07:00 PM</p>
              <p>24 HRS on Booking</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Form and Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img src={DiceImg} alt="Contact Us" className="w-full" />
        </div>

        <div className="contactForm flex justify-center items-center">
          {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full px-1">
          <fieldset>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {/* Subject */}
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white font-bold py-2 px-6 rounded-full bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-80 transition duration-300"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
