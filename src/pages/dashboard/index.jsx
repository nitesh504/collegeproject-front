
import { useState } from "react";
import ApplicationTable from "./ApplicationTable";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftEllipsisIcon,
  ChartPieIcon,
  EyeIcon,
  BuildingOfficeIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile Viewed */}
            <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-black text-2xl">Profile Viewed</p>
              <p className="text-3xl font-bold mt-2">62</p>
              <div className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
                <EyeIcon className="w-5 h-5" />
                <span>View now</span>
              </div>
            </div>

            {/* Venue Booking */}
            <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-black text-2xl">Venue Booking</p>
              <p className="text-3xl font-bold mt-2">189</p>
              <div
                onClick={() => setActiveItem("Application")}
                className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline"
              >
                <BuildingOfficeIcon className="w-5 h-5" />
                <span>View now</span>
              </div>
            </div>

            {/* Unread Messages */}
            <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-black text-2xl">Unread Messages</p>
              <p className="text-3xl font-bold mt-2">79</p>
              <div onClick={() => setActiveItem("Message")}className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                <span>See in message</span>
              </div>
            </div>

            {/* Pandit Booking */}
            <div className="bg-purple-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-black text-2xl">Pandit Booking</p>
              <p className="text-3xl font-bold mt-2">257</p>
              <div onClick={() => setActiveItem("Application")} className="mt-4 text-purple-600 text-sm flex items-center space-x-2 cursor-pointer hover:underline">
                <UserIcon className="w-5 h-5" />
                <span>View now</span>
              </div>
            </div>
          </div>
        );
      case "Application":
        return (
          <div className="w-full">
            <ApplicationTable />
          </div>
        );
      case "Message":
        return (
          <div className="w-full">
            <MessageBox />
          </div>
        );
      case "Statics":
        return <p className="text-2xl">Here are your statistics.</p>;
      default:
        return <p className="text-2xl">Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="flex h-screen bg-lavender">
      {/* Sidebar */}
      <aside className="w-60 bg-purple-700 text-white p-5 flex flex-col rounded-r-3xl pr-0 shadow-md">
        <h1 className="text-2xl font-bold mb-8 text-white">Shuva Labh</h1>
        <nav className="space-y-4">
          {[
            {
              name: "Dashboard",
              icon: <HomeIcon className="w-[30px] h-[30px]" />,
            },
            {
              name: "Application",
              icon: <ClipboardDocumentListIcon className="w-[30px] h-[30px]" />,
              badge: "13",
            },
            {
              name: "Message",
              icon: <ChatBubbleLeftEllipsisIcon className="w-[30px] h-[30px]" />,
              badge: "1",
            },
            {
              name: "Statics",
              icon: <ChartPieIcon className="w-[30px] h-[30px]" />,
            },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center space-x-2 p-3 relative pl-4 rounded-l-full cursor-pointer hover:bg-lavender hover:text-black transition duration-300 ${
                activeItem === item.name ? "bg-lavender text-black" : ""
              }`}
            >
              {item.icon}
              {item.badge && (
                <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full absolute left-0 top-0">
                  {item.badge}
                </span>
              )}
              <span className="pl-1">{item.name}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 relative items-center flex bg-lavender">
        {renderContent()}
      </main>

      {/* Notification and Profile */}
      <div className="absolute top-5 right-5 flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <BellIcon className="w-[30px] h-[30px] text-gray-600" />
          <span className="absolute -top-2 -right-1 px-[6px] py-[2px] bg-red-500 text-xs text-white rounded-full">
            5
          </span>
        </div>
        <div className="bg-black text-white rounded-full w-8 h-8 p-1 flex items-center justify-center cursor-pointer">
          <Link to="/profile">
            <UserIcon className="w-[45px] h-[45px] bg-black text-white rounded-full p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
