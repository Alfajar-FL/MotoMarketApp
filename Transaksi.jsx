import { useState } from "react";

export default function TransactionTable() {
  const [transactions] = useState([
    {
      id: 1,
      motorImage: "/images/motor.png",
      action: "Jual",
      buyerName: "Asep Nugroho",
      dealer: "Jhon Doe",
      date: "01/01/20001",
      payment: "Cash",
      tenor: "----",
      status: "Selesai",
    },
  ]);

  return (
    <div className="p-4">
      {/* Filter Digeser ke Kanan */}
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

      {/* Tabel Transaksi */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <table className="w-full text-center text-sm border-collapse">
          <thead className="bg-gray-200">
            <tr className="text-gray-600">
              <th className="py-2 px-3">Motor</th>
              <th className="py-2 px-3">Aksi</th>
              <th className="py-2 px-3">Nama Pembeli</th>
              <th className="py-2 px-3">Dealer</th>
              <th className="py-2 px-3">Tanggal</th>
              <th className="py-2 px-3">Pembayaran</th>
              <th className="py-2 px-3">Tenor</th>
              <th className="py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t">
                <td className="py-2 px-3">
                  <img
                    src={transaction.motorImage}
                    alt="Motor"
                    className="w-12 h-10 object-cover mx-auto rounded"
                  />
                </td>
                <td className="py-2 px-3">
                  <span className="px-3 py-1 text-white text-xs bg-rose-600 hover:bg-rose-700 rounded-md transition">
                    {transaction.action}
                  </span>
                </td>
                <td className="py-2 px-3">{transaction.buyerName}</td>
                <td className="py-2 px-3">{transaction.dealer}</td>
                <td className="py-2 px-3">{transaction.date}</td>
                <td className="py-2 px-3">{transaction.payment}</td>
                <td className="py-2 px-3">{transaction.tenor}</td>
                <td className="py-2 px-3">
                  <span className="px-3 py-1 text-white text-xs bg-green-600 hover:bg-green-700 rounded-md transition">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
