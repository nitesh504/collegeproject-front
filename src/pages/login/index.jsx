
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Sparkle } from "lucide-react";
import {
  SignInImg,
  FacebookColor,
  GoogleColor,
  AppleColor,
} from "../../assets";

const handleBackClick = () => {
  window.history.back();
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Send POST request to Django backend
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username: email,
        password: password,
      });

      // Handle the backend response
      if (response.data.message === "Admin login successful") {
        // Store the token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to Admin dashboard
        navigate("/dashboard");
      } else if (response.data.message === "Login successful") {
        // Store the token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to User dashboard
        navigate("/feature-page");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Back Icon */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 text-gray-600 hover:text-black transition border-0 focus:outline-none bg-transparent"
      >
        <span className="text-3xl bg-white px-[20px] py-[6px] rounded-3xl hover:shadow transition">
          &larr;
        </span>
      </button>

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 bg-white">
        <div className="max-w-xl w-full mx-auto">
          <h3 className="text-gray-500 text-lg font-medium mb-2 kanit-semibold">
            Start your Journey
          </h3>
          <h2 className="text-3xl text-gray-800 mb-6 kanit-semibold font-bold">
            Sign In to Subha Labh
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          <div className="mt-10">
            {/* Email Field */}
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-500 bg-white font-normal 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-focus:-top-3 peer-focus:text-purple-500 transition-all duration-300 px-2"
              >
                E-mail
              </label>
            </div>

            {/* Password Field */}
            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-500 bg-white font-normal 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-focus:-top-3 peer-focus:text-purple-500 transition-all duration-300 px-2"
              >
                Password
              </label>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            className="w-full text-white font-bold py-2 px-6 bg-gradient-to-r from-purpleCustom to-pinkCustom hover:opacity-90 transition duration-300"
          >
            Sign In
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">or sign in with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <img src={FacebookColor} alt="Facebook Logo" />
            </div>
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <img src={GoogleColor} alt="Google Logo" />
            </div>
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <img src={AppleColor} alt="Apple Logo" />
            </div>
          </div>

          <p className="mt-6 text-gray-600 text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline hover:text-black"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block flex-1 relative">
        <img
          src={SignInImg}
          alt="Astronaut holding moon"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-8 right-8">
          <span className="w-12 h-4 text-white rounded-full flex items-center justify-center">
            <Sparkle />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
