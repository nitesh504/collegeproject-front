
import { useState } from "react";
import axios from "axios";

const handleBackClick = () => {
  window.history.back();
};

const OrderNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/enquiry/", formData);
      setSuccess("Enquiry submitted successfully!");
      setError("");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, #FBE8E4, #E1D9FC)",
      }}
    >
      {/* Back Icon */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 text-gray-600 hover:text-black transition border-0 focus:outline-none bg-transparent"
      >
        <span className="text-3xl bg-white px-[20px] py-[6px] rounded-3xl hover:shadow transition">
          &larr;
        </span>
      </button>

      <div className="bg-[#F2EBEB] rounded-lg shadow-lg p-8 w-96 border-2 border-white">
        <h2 className="text-center text-2xl font-bold mb-2">Enquire Now!</h2>
        <p className="text-center text-gray-500 mb-6">Send us your message!</p>

        {success && <p className="text-center text-green-500 mb-4">{success}</p>}
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Id"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your message"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition flex justify-center items-center"
          >
            Enquire Now →
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
