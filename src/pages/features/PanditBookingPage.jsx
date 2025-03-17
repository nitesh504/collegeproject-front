

import { useState, useEffect } from "react";
import PanditBookingCard from "../../components/CardCompo/PanditBookingCard.jsx";
import axios from "axios";

const PanditBookingPage = () => {
  const [pandits, setPandits] = useState([]);

  // Array of images for the cards
  const images = [
    "/pundit.jpeg",  // Images placed in the public/images folder
    "/priest1.jpg",
    "/priest2.webp",
    "/priest3.webp",
    "/priest4.jpg",
    "/priest5.jpg",
    "/priest7.webp",
    "/priest8.jpg",
  
  ];

  useEffect(() => {
    // Fetch pandits data from the backend
    const fetchPandits = async () => {
      try {
        const response = await axios.get("http://localhost:8000/pundits/");
        const data = response.data;

        // Add images to each pandit dynamically
        const panditsWithImages = data.map((pandit, index) => ({
          ...pandit,
          image: images[index % images.length], // Assign images in a loop
        }));

        setPandits(panditsWithImages);
      } catch (error) {
        console.error("Error fetching pandits:", error);
      }
    };

    fetchPandits();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pandits.map((pandit) => (
          <div key={pandit.id} className="col-span-1">
            <PanditBookingCard
              image={pandit.image} // Use dynamically added image
              name={pandit.name}
              id={pandit.id}
              education={pandit.education}
              price={pandit.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanditBookingPage;
