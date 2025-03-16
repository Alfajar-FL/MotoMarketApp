import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DealerPage() {
  const navigate = useNavigate();
  const [dealers, setDealers] = useState([
    { id: 1, name: "Jhondoe", location: "Tangerang", status: "Active", startDate: "01/01/2001", transactions: 12 },
    { id: 2, name: "William", location: "Banten", status: "Not Active", startDate: "03/01/2001", transactions: 8 },
  ]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    let sortedDealers = [...dealers];
    
    if (value === "latest") {
      sortedDealers.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (value === "oldest") {
      sortedDealers.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }

    setDealers(sortedDealers);
  };

  return (
    <div className="p-6">
      {/* Tombol Tambah dan Filter */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/dealer/tambah")}
          className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transition cursor-pointer"
        >
          + Tambah Dealer
        </button>

        <div className="relative">
          <select 
            onChange={handleFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm bg-white appearance-none pr-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all transition cursor-pointer"
          >
            <option className="text-gray-200">Filter berdasarkan tanggal</option>
            <option value="latest" className="text-gray-700">Terbaru</option>
            <option value="oldest" className="text-gray-700">Terlama</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼
          </div>
        </div>
      </div>

      {/* Tabel Dealer */}
      <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full border-collapse text-center">
          <thead className="bg-gray-200">
            <tr className="text-gray-600">
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Lokasi</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Tanggal Mulai</th>
              <th className="py-3 px-4">Jumlah Transaksi</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer, index) => (
              <tr
                key={dealer.id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
              >
                <td className="py-3 px-4">{dealer.name}</td>
                <td className="py-3 px-4">{dealer.location}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block w-24 text-center py-2 rounded-full text-white text-sm font-semibold transition ${
                      dealer.status === "Active" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {dealer.status}
                  </span>
                </td>
                <td className="py-3 px-4">{dealer.startDate}</td>
                <td className="py-3 px-4">{dealer.transactions}</td>
                <td className="py-3 px-4">
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm shadow-md">
                    Berhentikan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
