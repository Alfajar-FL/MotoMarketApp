import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DataMotor() {
  const navigate = useNavigate();
  const [motors, setMotors] = useState([
    {
      id: 1,
      foto: "/images/motor2.jpg",
      merk: "Yamaha-XSR 155",
      tahun: 2019,
      tipe: "R",
      transmisi: "Manual",
      warna: "Hitam",
      jarak: "----",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <button
           onClick={() => navigate("/tambah-motor")}
          className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transition cursor-pointer"
        >
          + Tambah Motor
        </button>
        <div className="flex justify-end mb-3">
        <div className="relative">
          <select className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm bg-white appearance-none pr-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all transition cursor-pointer">
            <option className="text-gray-200">Filter berdasarkan tanggal</option>
            <option value="latest" className="text-gray-700">Terbaru</option>
            <option value="oldest" className="text-gray-700">Terlama</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼
          </div>
        </div>
      </div>
      </div>

      {/* Tabel Data Motor */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <table className="w-full text-center text-sm border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4">Foto Motor</th>
              <th className="py-3 px-4">Merk, Model</th>
              <th className="py-3 px-4">Tahun Rilis</th>
              <th className="py-3 px-4">Tipe</th>
              <th className="py-3 px-4">Jenis Transmisi</th>
              <th className="py-3 px-4">Warna</th>
              <th className="py-3 px-4">Jarak Tempuh</th>
              <th className="py-3 px-6 w-36">Aksi</th> 
            </tr>
          </thead>
          <tbody>
            {motors.map((motor) => (
              <tr key={motor.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img
                    src={motor.foto}
                    alt={motor.merk}
                    className="w-16 h-12 object-cover mx-auto rounded-md"
                  />
                </td>
                <td className="py-3 px-4">{motor.merk}</td>
                <td className="py-3 px-4">{motor.tahun}</td>
                <td className="py-3 px-4">{motor.tipe}</td>
                <td className="py-3 px-4">{motor.transmisi}</td>
                <td className="py-3 px-4">{motor.warna}</td>
                <td className="py-3 px-4">{motor.jarak}</td>
                <td className="py-3 px-6 w-36">
                  <div className="flex justify-center space-x-2">
                    <button className="px-3 py-1 bg-yellow-400 text-black rounded shadow hover:bg-yellow-500">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
