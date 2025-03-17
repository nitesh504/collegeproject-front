import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Main from "../pages/main/index";
import Login from "../pages/login/index";
import FeaturesPage from "../pages/features/index";
import SignUp from "../pages/signup/index";
import NoMatch from "../components/NoMatchPage/nomatch";
import EnquireNow from "../pages/enquirenow/index";
import Dashboard from "../pages/dashboard/index";
import OrderNow from "../pages/ordernow/index";
import ProfileBox from "../pages/profile/index";
import PersonalRecommendationPage from "../pages/features/PresonalRecommendation";
import VenueBooking from "../pages/features/VenueBooking";
import BookPaditBookingCard from "../pages/features/PanditBookingPage";
import BookaPandit from "../pages/forms/bookapandit";
import PersonalRecommendationForm from "../pages/forms/personal-recommendation";
import SubmittedPage from "../pages/SubmittedPage/index";
import BookingPandit from "../pages/forms/bookingpandit";
import BanquetBooking from "../pages/forms/BanquetBooking";
import Recommendation from "../pages/forms/recommendation";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* this for another routes */}
      <Route path="/feature-page" element={<FeaturesPage />} />
      <Route path="/order-now" element={<OrderNow />} />
      <Route path="/enquire-now" element={<EnquireNow />} />
      <Route path="/profile" element={<ProfileBox />} />
      <Route
        path="/personal-recommendation"
        element={<PersonalRecommendationPage />}
      />
      <Route path="/venue-booking" element={<VenueBooking />} />
      <Route path="/book-pandit-page" element={<BookPaditBookingCard />} />
      <Route path="/book-a-pandit" element={<BookaPandit />} />
      <Route
        path="/personal-recommendation-form"
        element={<PersonalRecommendationForm />}
      />
      <Route path="/submitted-page" element={<SubmittedPage />} />
      <Route path="/booking-pandit" element={<BookingPandit />} />
      <Route path="/banquet-booking" element={<BanquetBooking />} />
      <Route path="/recommendation" element={<Recommendation />} />
    </Routes>
  );
};

export default index;
