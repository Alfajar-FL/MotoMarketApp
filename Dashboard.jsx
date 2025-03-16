import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", cash: 400, credit: 300 },
  { month: "Feb", cash: 600, credit: 450 },
  { month: "Mar", cash: 800, credit: 500 },
  { month: "Apr", cash: 950, credit: 620 },
];

const orderData = [
  { city: "bandung", rendah: 35, ratarata: 52, tinggi: 78 },
  { city: "cimahi", rendah: 43, ratarata: 54, tinggi: 60 },
  { city: "karawang", rendah: 40, ratarata: 60, tinggi: 65 },
  { city: "depok", rendah: 28, ratarata: 35, tinggi: 50 },
  { city: "jakarta", rendah: 40, ratarata: 55, tinggi: 70 },
  { city: "lampung", rendah: 30, ratarata: 45, tinggi: 56 },
];

export default function Dashboard() {
  return (
    <div className="p-6 min-h-screen ">
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6">

        {/* Kartu Statistik */}
        <div className="col-span-12 grid grid-cols-5 gap-4">
          {[
            { title: "Top Dealer", value: "12", sub: "Jhon Doe" },
            { title: "Top Transaksi", value: "Rp. 230.000.000", sub: "Anonim" },
            { title: "Transaksi", value: "12" },
            { title: "Motor", value: "12" },
            { title: "Dealer", value: "12" },
          ].map((item, index) => (
            <div key={index} className="col-span-1 bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <p className="text-sm text-gray-500 text-left">{item.title}</p>
              <p className="text-lg font-semibold text-left">{item.value}</p>
              {item.sub && <p className="text-xs text-gray-500 text-left">{item.sub}</p>}
            </div>
          ))}
        </div>

        {/* Grafik Pendapatan */}
        <div className="col-span-6 bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Pendapatan Perbulan</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cash" stroke="#ff4757" strokeWidth={2} />
              <Line type="monotone" dataKey="credit" stroke="#3742fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Statistik Orderan */}
        <div className="col-span-6 bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Statistik Orderan dari Kota-Kota</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tinggi" fill="#ff4757" />
              <Bar dataKey="ratarata" fill="#ffa502" />
              <Bar dataKey="rendah" fill="#3742fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabel Dealer */}
        <div className="col-span-12 bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Akun Dealer</h2>
          <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-semibold text-center">
                <th className="border border-gray-300 p-2">Nama</th>
                <th className="border border-gray-300 p-2">Lokasi</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Tanggal Mulai</th>
                <th className="border border-gray-300 p-2">Jumlah Transaksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100 transition duration-200 text-center">
                <td className="border border-gray-300 p-2">Jhon Doe</td>
                <td className="border border-gray-300 p-2">Tangerang</td>
                <td className="border border-gray-300 p-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Active</span>
                </td>
                <td className="border border-gray-300 p-2">01/01/2001</td>
                <td className="border border-gray-300 p-2">12</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 transition duration-200 text-center">
                <td className="border border-gray-300 p-2">Budi Santoso</td>
                <td className="border border-gray-300 p-2">Jakarta</td>
                <td className="border border-gray-300 p-2">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs">Inactive</span>
                </td>
                <td className="border border-gray-300 p-2">15/02/2019</td>
                <td className="border border-gray-300 p-2">8</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
