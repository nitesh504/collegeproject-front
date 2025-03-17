import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkle } from "lucide-react";
import { SignUpImg } from "../../assets";

function SignUpForm() {
  const navigate = useNavigate();

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Regex validation for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Form validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError(null); // Clear previous errors

    try {
      // API call
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        setSuccessMessage("User created successfully! Proceed to login.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while signing up. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 bg-white">
        <div className="max-w-xl w-full mx-auto">
          <h3 className="text-gray-500 text-lg font-medium mb-2 kanit-semibold">
            Start your Journey
          </h3>
          <h2 className="text-3xl text-gray-800 mb-6 kanit-semibold font-bold">
            Sign up to Subha Labh
          </h2>

          {/* Success or Error Messages */}
          {successMessage && (
            <div className="text-green-600 bg-green-100 p-3 rounded mb-4">
              {successMessage}
            </div>
          )}
          {error && (
            <div className="text-red-600 bg-red-100 p-3 rounded mb-4">{error}</div>
          )}

          {/* Sign Up Form */}
          <form onSubmit={handleSignUp}>
            <div className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="peer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <label
                className="absolute left-3 top-3 text-gray-500 bg-white font-normal 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                  peer-focus:-top-3 peer-focus:text-purple-500 transition-all duration-300 px-2"
              >
                Email
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <label
                className="absolute left-3 top-3 text-gray-500 bg-white font-normal 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                  peer-focus:-top-3 peer-focus:text-purple-500 transition-all duration-300 px-2"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block flex-1 relative">
        <img
          src={SignUpImg}
          alt="Sign Up"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-8 right-8">
          <span className="w-12 h-12 text-white rounded-full flex items-center justify-center">
            <Sparkle />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
