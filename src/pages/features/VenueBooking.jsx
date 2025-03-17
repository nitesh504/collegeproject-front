
import { useEffect, useState } from "react";
import VenueCard from "../../components/CardCompo/VenueCard.jsx";

const VenueBooking = () => {
  const [venues, setVenues] = useState([]);

  // Array to hold image filenames (or URLs)
  const venueImages = [
    "venue.jpg",
    "venue1.jpg",
    "venue2.jpg",
    "venue3.jpg", 
    "venue4.jpg", 
    "venue5.jpg", 
    "venue6.jpg", 
    "venue7.jpg", 
  ];

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:8000/banquets/");
        const data = await response.json();
        setVenues(data); 
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {venues.map((venue, index) => (
          <div key={venue.id} className="col-span-1">
            <VenueCard
              id={venue.id}
              image={venueImages[index % venueImages.length]} // Dynamically assign an image based on index
              name={venue.name}
              location={venue.location}
              price={venue.price}
              description={venue.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueBooking;

