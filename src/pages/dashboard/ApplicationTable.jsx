

import { useState, useEffect } from "react";

const BookingTable = () => {
  const [bookingsList, setBookingsList] = useState([]); // Pundit bookings
  const [venueBookingsList, setVenueBookingsList] = useState([]); // Venue bookings
  const [productOrdersList, setProductOrdersList] = useState([]); // Product orders
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows

  // Fetch pundit bookings data from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:8000/get-bookings/");
        const data = await response.json();
        
        if (data.bookings) {
          setBookingsList(data.bookings);
        } else {
          console.error("Error fetching bookings:", data.error);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Fetch venue bookings data from the backend
  useEffect(() => {
    const fetchVenueBookings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/get-venue-bookings/");
        const data = await response.json();
        
        if (data.bookings) {
          setVenueBookingsList(data.bookings);
        } else {
          console.error("Error fetching venue bookings:", data.error);
        }
      } catch (error) {
        console.error("Error fetching venue bookings:", error);
      }
    };

    fetchVenueBookings();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Fetch product orders data from the backend
  useEffect(() => {
    const fetchProductOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/order/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
    
        // Log the API response for debugging
        console.log("API response:", data);
    
        // Handle array response directly
        if (Array.isArray(data)) {
          setProductOrdersList(data);
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching product orders:", error);
      }
    };
    

    fetchProductOrders();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Handle checkbox change for selecting rows
  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Handle delete row action
  const handleDeleteRow = (index) => {
    setBookingsList((prevBookings) => prevBookings.filter((_, i) => i !== index));
    setVenueBookingsList((prevVenueBookings) => prevVenueBookings.filter((_, i) => i !== index));
    setProductOrdersList((prevProductOrders) => prevProductOrders.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full p-4 bg-white rounded-3xl">
      <h2 className="text-2xl font-semibold mb-4">Application Bookings</h2>

      {/* Pundit Bookings Table */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pundit Bookings</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg border-l-0 border-r-0">
            <thead className="bg-lavender">
              <tr>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Select</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Name</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Phone</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Event Type</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Date</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Address</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingsList.map((booking, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 ${selectedRows.includes(index) ? "bg-gray-50" : ""}`}
                >
                  <td className="py-2 px-4 border-b border-gray-300">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.event_type}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.date}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.address}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Venue Bookings Table */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Venue Bookings</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg border-l-0 border-r-0">
            <thead className="bg-lavender">
              <tr>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Select</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Banquet</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Phone</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Email</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Start Date</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">End Date</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Number of Guests</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Event Type</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Additional Request</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {venueBookingsList.map((booking, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 ${selectedRows.includes(index) ? "bg-gray-50" : ""}`}
                >
                  <td className="py-2 px-4 border-b border-gray-300">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.banquet}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.start_date}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.end_date}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.number_of_guests}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.event_type}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{booking.additional_request}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Orders Table */}
      
      {/* Product Orders Table */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Product Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg border-l-0 border-r-0">
            <thead className="bg-lavender">
              <tr>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Select</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Product Name</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Email</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Phone</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Additional Instructions</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productOrdersList.map((order, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 ${selectedRows.includes(index) ? "bg-gray-50" : ""}`}
                >
                  <td className="py-2 px-4 border-b border-gray-300">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">{order.product}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{order.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{order.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{order.additional_instructions}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
