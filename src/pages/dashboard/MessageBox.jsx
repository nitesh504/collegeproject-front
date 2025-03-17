import { useState, useEffect } from "react";

const MessageBox = () => {
  const [messagesList, setMessagesList] = useState([]); // To store fetched messages
  const [selectedRows, setSelectedRows] = useState([]); 

  // Fetch messages from the backend API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/enquiries/"); // Fetch data from the backend
        if (response.ok) {
          const data = await response.json();
          
          // Only keep the required fields: name, email, phone, message
          const filteredMessages = data.enquiries.map(({ name, email, phone, message }) => ({
            name,
            email,
            phone,
            message
          }));
          
          setMessagesList(filteredMessages); // Update the state with the filtered data
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []); // Empty array means this runs once when the component mounts

  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDeleteRow = (index) => {
    setMessagesList((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full p-4 bg-white rounded-3xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">MessageBox</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg border-l-0 border-r-0">
          <thead className="bg-lavender">
            <tr>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Select</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Name</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Email</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Phone</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Message</th>
              <th className="py-2 px-4 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messagesList.map((message, index) => (
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
                <td className="py-2 px-4 border-b border-gray-300">{message.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{message.email}</td>
                <td className="py-2 px-4 border-b border-gray-300">{message.phone}</td>
                <td className="py-2 px-4 border-b border-gray-300">{message.message}</td>
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
  );
};

export default MessageBox;
