import React, { useState } from "react";

const handleBackClick = () => {
  window.history.back();
};

const OrderNow = () => {
  const initialOrderData = {
    product: "",
    name: "",
    email: "",
    phone: "",
    additional_instructions: "",
  };

  const [orderData, setOrderData] = useState(initialOrderData);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!orderData.product) return "Please select a product.";
    if (!orderData.name) return "Name is required.";
    if (!orderData.email || !/\S+@\S+\.\S+/.test(orderData.email))
      return "A valid email is required.";
    if (!orderData.phone || !/^\d{10}$/.test(orderData.phone))
      return "A valid 10-digit phone number is required.";
    if (!orderData.additional_instructions)
      return "Additional instructions are required.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    // POST request to submit order data to the API
    fetch("http://localhost:8000/api/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            console.error("Error response:", errorData);
            throw new Error(errorData.message || "Something went wrong.");
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Order placed successfully!");
        setOrderData(initialOrderData); // Reset form
        setError("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to place order. Please try again.");
      });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, #FBE8E4, #E1D9FC)",
      }}
    >
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 text-gray-600 hover:text-black transition border-0 focus:outline-none bg-transparent"
      >
        <span className="text-3xl bg-white px-[20px] py-[6px] rounded-3xl hover:shadow transition">
          &larr;
        </span>
      </button>

      <div className="bg-[#F2EBEB] rounded-lg shadow-lg p-8 w-96 border-2 border-white">
        <h2 className="text-center text-2xl font-bold mb-2">Order Now!</h2>
        <p className="text-center text-gray-500 mb-6">
          What would you like to order?
        </p>

        {error && (
          <p className="text-center text-red-500 mb-4">
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <select
            name="product"
            value={orderData.product}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">--Choose the product--</option>
            <option value="Panna">Panna</option>
            <option value="Rudraksha">Rudraksha</option>
            <option value="Pushaparaj">Pushaparaj</option>
          </select>

          <input
            type="text"
            name="name"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            name="email"
            value={orderData.email}
            onChange={handleChange}
            placeholder="Email Id"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            name="phone"
            value={orderData.phone}
            onChange={handleChange}
            placeholder="Phone No"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            name="additional_instructions"
            value={orderData.additional_instructions}
            onChange={handleChange}
            rows="4"
            placeholder="Additional instructions"
            className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition flex justify-center items-center"
          >
            Order Now →
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
