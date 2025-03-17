import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineTransaction,
} from "react-icons/ai";
import { FiMail, FiCalendar, FiPhone, FiMapPin } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";
import profilePic from "../assets/profile1.jpg";
import logo from "../assets/logo.jpg";

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  // Notifikasi
  const notifications = [
    { id: 1, title: "Pesanan Baru Masuk", time: "2 menit yang lalu" },
    { id: 2, title: "Unit Motor Sudah Siap", time: "15 menit yang lalu" },
    { id: 3, title: "Pembayaran Dari Pelanggan Diterima", time: "1 jam yang lalu" },
    { id: 4, title: "Pengiriman Sedang Diproses", time: "3 jam yang lalu" },
    { id: 5, title: "Stok Motor Diperbarui", time: "5 jam yang lalu" },
    { id: 6, title: "Pesanan Dibatalkan Oleh Pelanggan", time: "1 hari yang lalu" },
  ];
  const displayedNotifications = viewAll ? notifications : notifications.slice(0, 4);

  // Cek menu aktif
  const isActive = (paths) =>
    paths.includes(location.pathname)
      ? "border border-red-400 text-red-500 bg-red-100"
      : "hover:bg-gray-100";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed w-64 bg-white shadow-md h-screen flex flex-col">
        <div className="flex justify-center py-6">
          <img src={logo} alt="Logo" className="w-12" />
        </div>
        <hr className="border-gray-200 mb-4" />
        <div className="px-6 flex-grow overflow-y-auto">
          <p className="text-gray-400 text-xs font-semibold uppercase mb-2">MAIN MENU</p>
          <ul className="space-y-2">
            <li>
              <Link to="/" className={`flex items-center gap-3 p-2 rounded-md ${isActive(["/"])}`}>
                <AiOutlineDashboard className="text-lg" />
                <span className="text-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/pesan" className={`flex items-center gap-3 p-2 rounded-md ${isActive(["/pesan"])}`}>
                <AiOutlineMessage className="text-lg" />
                <span className="text-sm">Pesan</span>
              </Link>
            </li>
            <li>
              <Link to="/dealer" className={`flex items-center gap-3 p-2 rounded-md ${isActive(["/dealer", "/tambah"])}`}>
                <FaMotorcycle className="text-lg" />
                <span className="text-sm">Dealer</span>
              </Link>
            </li>
            <li>
              <Link to="/transaksi" className={`flex items-center gap-3 p-2 rounded-md ${isActive(["/transaksi"])}`}>
                <AiOutlineTransaction className="text-lg" />
                <span className="text-sm">Transaksi</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 w-[calc(100%-16rem)] flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-20 bg-white shadow-md flex items-center px-6 z-50">
          <h1 className="text-xl font-semibold">MotoMarket</h1>

          {/* Notification & Profile */}
          <div className="ml-auto flex items-center gap-6 mr-10">
            {/* Notification Icon */}
            <div
              className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition duration-300"
              onClick={() => {
                setIsNotifOpen(!isNotifOpen);
                setIsProfileOpen(false);
              }}
            >
              <AiOutlineBell className="text-2xl text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {notifications.length}
              </span>
            </div>

            {/* Profile Section */}
            <div
              className="flex items-center gap-3 cursor-pointer bg-white p-2 rounded-full shadow hover:shadow-lg transition duration-300"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsNotifOpen(false);
              }}
            >
              <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-800">Jhon Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Modal Notifications */}
        {isNotifOpen && (
          <div className="absolute top-20 right-10 bg-white shadow-xl rounded-lg w-[22rem] p-6 z-50 border border-gray-200">
            <h3 className="text-lg font-semibold">Notifikasi Dealer</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto mt-3">
              {displayedNotifications.map((notif) => (
                <div key={notif.id} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <p className="text-sm font-medium">{notif.title}</p>
                  <p className="text-xs text-gray-500">{notif.time}</p>
                </div>
              ))}
            </div>
            {notifications.length > 4 && (
              <button onClick={() => setViewAll(!viewAll)} className="w-full py-2 mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition">
                {viewAll ? "View Less" : "View All"}
              </button>
            )}
          </div>
        )}

        {/* Modal Profile */}
        {isProfileOpen && (
          <div className="absolute top-20 right-10 bg-white shadow-xl rounded-lg w-[22rem] p-6 z-50 border border-gray-200">
            <>
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h3 className="text-lg font-semibold">Profil</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(null)}>
                  ✕
                </button>
              </div>
              <div className="text-center">
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md border-4 border-gray-200" />
                <h4 className="text-lg font-semibold text-gray-800">Anderson Barden</h4>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
              <div className="mt-4 space-y-3 text-gray-700 border-t pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-gray-500 text-lg" />
                  <span>anderson@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiCalendar className="text-gray-500 text-lg" />
                  <span>Bergabung: 12 Jan 2023</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-gray-500 text-lg" />
                  <span>+62 812-3456-7890</span>
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
          </div>
        )}
      </div>
    </div>
  );
}
