import { Link } from "react-router-dom";

export default function CetakPDF() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Laporan Transaksi</h2>
        <Link to="/transaksi">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            Kembali
          </button>
        </Link>
      </div>

      <div className="border p-4 bg-white shadow-md rounded-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Motor</th>
              <th className="border border-gray-300 p-2">Nama Pembeli</th>
              <th className="border border-gray-300 p-2">Tanggal</th>
              <th className="border border-gray-300 p-2">Pembayaran</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Yamaha XSR 155</td>
              <td className="border border-gray-300 p-2">Asep Nugroho</td>
              <td className="border border-gray-300 p-2">01/01/2024</td>
              <td className="border border-gray-300 p-2">Cash</td>
              <td className="border border-gray-300 p-2 text-green-500">Selesai</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Honda CBR 150R</td>
              <td className="border border-gray-300 p-2">Nieva Rianti</td>
              <td className="border border-gray-300 p-2">01/01/2024</td>
              <td className="border border-gray-300 p-2">Cash</td>
              <td className="border border-gray-300 p-2 text-blue-500">Pengiriman</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Suzuki GSX R150</td>
              <td className="border border-gray-300 p-2">Dandy Nur</td>
              <td className="border border-gray-300 p-2">01/01/2024</td>
              <td className="border border-gray-300 p-2">Kredit</td>
              <td className="border border-gray-300 p-2 text-red-500">Di Tolak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
