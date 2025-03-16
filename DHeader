import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FiSearch, FiMail, FiCalendar, FiPhone, FiMapPin } from "react-icons/fi";
import profilePic from "../assets/ava.jpg";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  // Notifikasi khusus untuk dealer
  const notifications = [
    { id: 1, title: "Pesanan Baru Masuk", time: "2 menit yang lalu" },
    { id: 2, title: "Unit Motor Sudah Siap", time: "15 menit yang lalu" },
    { id: 3, title: "Pembayaran Dari Pelanggan Diterima", time: "1 jam yang lalu" },
    { id: 4, title: "Pengiriman Sedang Diproses", time: "3 jam yang lalu" },
    { id: 5, title: "Stok Motor Diperbarui", time: "5 jam yang lalu" },
    { id: 6, title: "Pesanan Dibatalkan Oleh Pelanggan", time: "1 hari yang lalu" },
  ];

  const displayedNotifications = viewAll ? notifications : notifications.slice(0, 4);

  return (
    <header className="flex items-center px-6 h-20 bg-white shadow-md relative">
      <h1 className="text-xl font-semibold">MotoMarket</h1>

      {/* Search Bar */}
      <div className="relative w-64 ml-6">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full border rounded-full py-1.5 pl-8 pr-4 bg-gray-100 focus:outline-none text-sm"
        />
      </div>

      {/* Notification & Profile */}
      <div className="ml-auto flex items-center gap-6 mr-10">
        {/* Notification Icon */}
        <div
          className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition duration-300"
          onClick={() => setIsModalOpen(isModalOpen === "notif" ? null : "notif")}
        >
          <AiOutlineBell className="text-2xl text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {notifications.length}
          </span>
        </div>

        {/* Profile Section */}
        <div
          className="flex items-center gap-3 cursor-pointer bg-white p-2 rounded-full shadow hover:shadow-lg transition duration-300"
          onClick={() => setIsModalOpen(isModalOpen === "profile" ? null : "profile")}
        >
          <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-gray-800">Jhon Doe</p>
            <p className="text-xs text-gray-500">Dealer</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {(isModalOpen === "notif" || isModalOpen === "profile") && (
        <div className="absolute top-16 right-28 bg-white shadow-xl rounded-lg w-[22rem] p-6 z-50 border border-gray-200 animate-fadeIn">
          {isModalOpen === "notif" && (
            <>
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h3 className="text-lg font-semibold">Notifikasi Dealer</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(null)}>
                  ✕
                </button>
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {displayedNotifications.map((notif) => (
                  <div key={notif.id} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <p className="text-sm font-medium">{notif.title}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
              {notifications.length > 4 && (
                <div className="mt-5">
                  <button
                    onClick={() => setViewAll(!viewAll)}
                    className="w-full py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition"
                  >
                    {viewAll ? "View Less" : "View All"}
                  </button>
                </div>
              )}
            </>
          )}
          {isModalOpen === "profile" && (
            <>
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h3 className="text-lg font-semibold">Profil</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(null)}>
                  ✕
                </button>
              </div>
              <div className="text-center">
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md border-4 border-gray-200" />
                <h4 className="text-lg font-semibold text-gray-800">Jhon Doe</h4>
                <p className="text-sm text-gray-500">Dealer</p>
              </div>
              <div className="mt-4 space-y-3 text-gray-700 border-t pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-gray-500 text-lg" />
                  <span>jhondoe@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiCalendar className="text-gray-500 text-lg" />
                  <span>Bergabung: 1 Jan 2023</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-gray-500 text-lg" />
                  <span>+62 812-3456-9876</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiMapPin className="text-gray-500 text-lg" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition">
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
