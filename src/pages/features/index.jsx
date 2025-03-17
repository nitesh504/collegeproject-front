import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  HeartSvg,
  BookingSvg,
  PanditSvg,
  VastuSvg,
} from "../../assets/index.js";
import { Search, UserIcon } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import VenueBooking from "./VenueBooking.jsx";
import PaditBookingPage from "./PanditBookingPage.jsx";
import PDFViewer from "./VastuPage.jsx";
import PersonalRecommendationForm from "../forms/personal-recommendation.jsx";
import PersonalRecommendationPage from "./PresonalRecommendation.jsx";

const FeaturesPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Personalized Recommendation");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    console.log("Searching for:");
    console.log("Location:", location);
    console.log("Name:", name);
  };

  const handleHomeClick = () => {
    navigate(<PersonalRecommendationPage/>, { replace: true });
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const renderContent = () => {
    switch (activePage) {
      case "Personalized Recommendation":
        return (
          <div className="p-4 flex items-center justify-center absolute top-32 lg:h-[100vh]">
            <PersonalRecommendationForm />
          </div>
        );
      case "Venue Booking":
        return (
          <div className="p-4 flex items-center justify-center absolute top-32">
            <VenueBooking />
          </div>
        );
      case "Pandit Booking":
        return (
          <div className="p-4 flex items-center justify-center absolute top-32">
            <PaditBookingPage />
          </div>
        );
      case "Vastu":
        return (
          <div className="text-black p-4 flex items-center justify-center absolute top-32 w-full overflow-x-hidden">
            <PDFViewer />
          </div>
        );
      default:
        return (
          <div className="p-4 flex items-center justify-center absolute top-32">
            Select an option from the sidebar.
          </div>
        );
    }
  };

  return (
    <div className="relative transition-all duration-300">
      {/* Header */}
      <header className="bg-white shadow-md fixed">
        <div className="logoHead w-full flex items-center justify-between px-4 py-2 z-10 border-b-2">
          {/* Back Icon */}
          <button
            onClick={handleBackClick}
            aria-label="Go back to home"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <span className="text-3xl">&larr;</span>
            <strong className="text-xl">Back</strong>
          </button>

          <div className="headingName">
            <h1 className="text-2xl md:text-4xl font-bold">Subha Labh</h1>
          </div>

          <div className="userProfileWrap flex items-center">
            <div className="main-btn flex flex-col sm:flex-row">
              <button className="border-2 border-black rounded-full px-3 py-1 mx-0 sm:mx-2 my-1 sm:my-0">
                Book a Pandit
              </button>
              <button className="border-2 border-black rounded-full px-3 py-1 mx-0 sm:mx-2 my-1 sm:my-0">
                Register Your Venue
              </button>
            </div>

            <Link to="/profile">
              <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
            </Link>
          </div>
        </div>
        <div className="searchBar w-full h-16 flex items-center justify-between px-4 py-2 z-10">
          <div
            onClick={toggleSidebar}
            className="cursor-pointer text-2xl text-gray-600"
          >
            <Bars3Icon className="h-8 w-8" />
          </div>

          {/* Search Section */}
          <div className="flex items-center justify-between bg-gray-300 my-2 rounded-full px-4 py-1 mx-auto">
            {/* Search by Location */}
            <input
              type="text"
              placeholder="Search by Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent placeholder-gray-500 outline-none border-none"
            />

            {/* Divider */}
            <div className="border-l border-gray-400 h-6 mx-4"></div>

            {/* Search by Name */}
            <input
              type="text"
              placeholder="Search by Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent placeholder-gray-500 outline-none border-none"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-[#462670] text-white px-4 py-1 rounded-full hover:bg-[#3b1f5d] transition duration-300"
            >
              <Search size={18} /> SEARCH
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-32 left-0 h-screen text-gray-900 transition-all duration-300 shadow-2xl ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <nav className="flex flex-col h-full">
          <a
            href="#"
            onClick={() => setActivePage("Personalized Recommendation")}
            className={`flex items-center px-4 py-2 transition-all text-xl gap-6 ${
              activePage === "Personalized Recommendation"
                ? "text-purple-500"
                : "text-gray-900"
            } hover:text-purple-500`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={HeartSvg}
              alt="Personalized Recommendation"
            />
            {isSidebarOpen && (
              <span className="ml-2">Personalized Recommendation</span>
            )}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Venue Booking")}
            className={`flex items-center px-4 py-2 transition-all text-xl gap-6 ${
              activePage === "Venue Booking"
                ? "text-purple-500"
                : "text-gray-900"
            } hover:text-purple-500`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={BookingSvg}
              alt="Venue Booking"
            />
            {isSidebarOpen && <span className="ml-2">Venue Booking</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Pandit Booking")}
            className={`flex items-center px-4 py-2 transition-all text-xl gap-6 ${
              activePage === "Pandit Booking"
                ? "text-purple-500"
                : "text-gray-900"
            } hover:text-purple-500`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={PanditSvg}
              alt="Pandit Booking"
            />
            {isSidebarOpen && <span className="ml-2">Pandit Booking</span>}
          </a>
          <a
            href="#"
            onClick={() => setActivePage("Vastu")}
            className={`flex items-center px-4 py-2 transition-all text-xl gap-6 ${
              activePage === "Vastu" ? "text-purple-500" : "text-gray-900"
            } hover:text-purple-500`}
          >
            <img className="w-[40px] h-[40px]" src={VastuSvg} alt="Vastu" />
            {isSidebarOpen && <span className="ml-2">Vastu</span>}
          </a>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } p-4 pt-20`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default FeaturesPage;
