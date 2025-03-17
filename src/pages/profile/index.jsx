// import { Link } from "react-router-dom";
import Footer from "../homePage/Footer";
import { ProfileImg } from "../../assets/index.js";
import { Pencil } from "lucide-react";

function ProfileBox() {
  const handleBackClick = () => {
    window.history.back();
  }
  return (
    <div>
  <header className="profileHead border-b-2 flex justify-between items-center py-3 bg-white px-6 sticky">
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

    <h1 className="text-2xl md:text-3xl font-bold capitalize">Subha Labh</h1>

    {/* Profile Image */}
    <img
      src={ProfileImg}
      alt="Profile Image"
      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
    />
  </header>

  <section className="profileContent px-4 py-6 mainSection">
    <div className="w-full md:w-1/2 bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 mb-6 md:mb-0 relative">
      <div className="profileNameBox flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src={ProfileImg}
          alt="Deeplove K.C's Profile Picture"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Profile Name and Email */}
        <div className="profileName">
          <strong className="block text-gray-800">Deeplove K.C</strong>
          <a
            href="mailto:deeplov@gmail.com"
            className="text-gray-800 hover:underline hover:text-blue-600 transition"
          >
            deeplov@gmail.com
          </a>
        </div>

        {/* Edit Icon */}
        <div className="edit-btn absolute top-3 right-3">
          <button
            type="button"
            className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex gap-1"
            aria-label="Edit Profile"
          >
            <Pencil className="w-4 h-4" /> Edit
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-6 mt-5">
      {/* Personal Information Section */}
      <div className="w-full md:w-1/2 bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 mb-6 md:mb-0 relative">
        <div className="profile-name-box">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Personal Information
          </h2>

          {/* Edit Button */}
          <div className="edit-btn absolute top-3 right-3">
            <button
              type="button"
              className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex gap-1"
              aria-label="Edit Profile"
            >
              <Pencil className="w-4 h-4" /> Edit
            </button>
          </div>

          <div className="profile-wrap">
            <div className="personal-info flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Full Name */}
              <div className="profile-field">
                <strong className="block text-gray-800">Full Name</strong>
                <span>Deep Love K.C</span>
              </div>

              {/* Phone Number */}
              <div className="profile-field">
                <strong className="block text-gray-800">
                  Phone Number
                </strong>
                <span>9865432101</span>
              </div>
            </div>

            {/* Bio */}
            <div className="profile-bio mt-4">
              <strong className="block text-gray-800">Bio</strong>
              <span>Null</span>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="w-full md:w-1/2 bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 relative">
        <div className="profile-name-box">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Address</h2>

          {/* Edit Button */}
          <div className="edit-btn absolute top-3 right-3">
            <button
              type="button"
              className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex gap-1"
              aria-label="Edit Address"
            >
              <Pencil className="w-4 h-4" /> Edit
            </button>
          </div>

          <div className="profile-wrap">
            <div className="personal-info flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Country */}
              <div className="profile-field">
                <strong className="block text-gray-800">Country</strong>
                <span>Nepal</span>
              </div>

              {/* City */}
              <div className="profile-field">
                <strong className="block text-gray-800">City</strong>
                <span>Kathmandu</span>
              </div>
            </div>

            <div className="personal-info flex flex-col md:flex-row gap-6 md:gap-12 mt-4">
              {/* Postal Code */}
              <div className="profile-field">
                <strong className="block text-gray-800">Postal Code</strong>
                <span>477077</span>
              </div>

              {/* Province */}
              <div className="profile-field">
                <strong className="block text-gray-800">Province</strong>
                <span>Bagmati</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="mainSection">
    <Footer />
  </footer>
</div>

  );
}

export default ProfileBox;
