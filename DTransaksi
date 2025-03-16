import { useState } from "react";
import { Link } from "react-router-dom";

export default function TransactionTable() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      motorImage: "/images/motor.png",
      action: "Jual",
      buyerName: "Asep Nugroho",
      dealer: "Jhon Doe",
      date: "01/01/2024",
      payment: "Cash",
      tenor: "----",
      status: "Selesai",
      statusColor: "bg-green-600",
    },
    {
      id: 2,
      motorImage: "/images/motor2.jpg",
      action: "Jual",
      buyerName: "Nieva Rianti",
      dealer: "Jhon Doe",
      date: "01/01/2024",
      payment: "Cash",
      tenor: "----",
      status: "Pengiriman",
      statusColor: "bg-blue-500",
    },
    {
      id: 3,
      motorImage: "/images/motor3.png",
      action: "Jual",
      buyerName: "Dandy Nur",
      dealer: "Jhon Doe",
      date: "01/01/2024",
      payment: "Kredit",
      tenor: "48",
      status: "Di Tolak",
      statusColor: "bg-red-500",
    },
  ]);

  const statusOptions = [
    { label: "Selesai", color: "bg-green-600" },
    { label: "Pengiriman", color: "bg-blue-500" },
    { label: "Di Tolak", color: "bg-red-500" },
  ];

  const handleStatusChange = (id, newStatus) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        const selectedOption = statusOptions.find(
          (option) => option.label === newStatus
        );
        return {
          ...transaction,
          status: newStatus,
          statusColor: selectedOption ? selectedOption.color : "",
        };
      }
      return transaction;
    });

    setTransactions(updatedTransactions);
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      {/* Filter & Cetak PDF sejajar */}
      <div className="flex justify-between items-center mb-4">
        {/* Filter */}
        <div className="relative">
          <select className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm bg-white appearance-none pr-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer">
            <option className="text-gray-200">
              Filter berdasarkan tanggal
            </option>
            <option value="latest" className="text-gray-700">Terbaru</option>
            <option value="oldest" className="text-gray-700">Terlama</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼
          </div>
        </div>

        {/* Cetak PDF */}
        <Link to="/cetak-pdf">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Cetak Laporan
          </button>
        </Link>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <table className="w-full text-center text-sm border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4">Motor</th>
              <th className="py-3 px-6 w-32">Aksi</th>
              <th className="py-3 px-4">Nama Pembeli</th>
              <th className="py-3 px-4">Dealer</th>
              <th className="py-3 px-4">Tanggal</th>
              <th className="py-3 px-4">Pembayaran</th>
              <th className="py-3 px-4">Tenor</th>
              <th className="py-3 px-6 w-36">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img
                    src={transaction.motorImage}
                    alt="Motor"
                    className="w-16 h-12 object-cover mx-auto rounded-md"
                  />
                </td>
                <td className="py-3 px-6 w-32">
                  <span className="px-6 py-1 text-white text-xs bg-red-500 hover:bg-red-600 rounded-md transition inline-block">
                    {transaction.action}
                  </span>
                </td>
                <td className="py-3 px-4">{transaction.buyerName}</td>
                <td className="py-3 px-4">{transaction.dealer}</td>
                <td className="py-3 px-4">{transaction.date}</td>
                <td className="py-3 px-4">{transaction.payment}</td>
                <td className="py-3 px-4">{transaction.tenor}</td>
                <td className="py-3 px-6 w-36">
                  <select
                    value={transaction.status}
                    onChange={(e) =>
                      handleStatusChange(transaction.id, e.target.value)
                    }
                    className={`w-full px-3 py-1 text-white text-xs rounded-md ${transaction.statusColor}`}
                  >
                    {statusOptions.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
