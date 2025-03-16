import { useState } from "react";

function Lending_Product() {
  const products = [
    { id: 1, image: "src/assets/Yamaha3.jpg", location: "KHUSUS JABODETABEK, BANTEN", name: "POLYTRON Fox 500 Sepeda Motor Listrik – OTR Jabodetabek & Banten", price: 43100000 },
    { id: 2, image: "src/assets/Yamaha3.jpg", location: "KHUSUS JABODETABEK, BANTEN", name: "Yamaha NMAX 2023", price: 32000000 },
    { id: 3, image: "src/assets/Yamaha3.jpg", location: "BALI, SURABAYA", name: "Honda PCX 2022", price: 29000000 },
    { id: 4, image: "src/assets/Yamaha3.jpg", location: "SEMARANG, YOGYAKARTA", name: "Suzuki Burgman 2023", price: 31000000 },
    { id: 5, image: "src/assets/Yamaha3.jpg", location: "BANDUNG, JAKARTA", name: "Kawasaki Ninja 250 2023", price: 65000000 },
    { id: 6, image: "src/assets/Yamaha3.jpg", location: "SOLO, MALANG", name: "Vespa Primavera 2023", price: 47000000 },
    { id: 7, image: "src/assets/Yamaha3.jpg", location: "JAKARTA, BEKASI", name: "Yamaha Aerox 2023", price: 28000000 }
  ];

  const [sortOption, setSortOption] = useState("Terbaru");

  const usedBikes = [
    { id: 1, image: "src/assets/Yamaha3.jpg", name: "Honda Beat 2023", price: 15000000, date: "2024-01-10" },
    { id: 2, image: "src/assets/Yamaha3.jpg", name: "Honda Vario 2022", price: 18000000, date: "2024-02-15" },
    { id: 3, image: "src/assets/Yamaha3.jpg", name: "Yamaha Mio 2021", price: 12000000, date: "2023-12-05" },
    { id: 4, image: "src/assets/Yamaha3.jpg", name: "Suzuki Address 2020", price: 11000000, date: "2023-10-20" },
    { id: 5, image: "src/assets/Yamaha3.jpg", name: "Vespa LX 2019", price: 22000000, date: "2023-08-15" },
    { id: 6, image: "src/assets/Yamaha3.jpg", name: "Kawasaki KLX 150 2021", price: 27000000, date: "2023-09-25" },
    { id: 7, image: "src/assets/Yamaha3.jpg", name: "Honda Supra X 2022", price: 14000000, date: "2023-11-12" }
  ];

  const sortedUsedBikes = [...usedBikes].sort((a, b) => {
    switch (sortOption) {
      case "Terlama":
        return new Date(a.date) - new Date(b.date);
      case "Harga Tertinggi":
        return b.price - a.price;
      case "Harga Terendah":
        return a.price - b.price;
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div className="py-10 pb-10">
      {/* Motor Unggulan */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="src/assets/fire.png" alt="Icon" className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Motor Unggulan</h2>
        </div>
        <a href="#" className="text-red-500 text-sm font-semibold">Lihat semua &gt;</a>
      </div>
      <p className="text-sm text-gray-600 px-4">Dapatkan penawaran terbaik di sini</p>
      <div className="mt-6 overflow-x-auto whitespace-nowrap px-4 overflow-visible mb-16">
        <div className="flex gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-3 shadow-lg min-w-[300px] bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img src={product.image} alt={product.name} className="mx-auto w-full h-48 object-cover rounded-md" />
              <div className="bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full inline-block mt-2">
                {product.location}
              </div>
              <p className="text-sm font-semibold mt-2">{product.name}</p>
              <p className="text-lg font-bold text-red-500 mt-2">Rp{product.price.toLocaleString()}</p>
              {/* Button Tambahan */}
              <div className="mt-4 flex justify-center gap-2">
                <button className="border px-4 py-2 rounded-full">Lebih Detail</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motor yang Tersedia */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="src/assets/star.png" alt="Icon" className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Motor yang Tersedia</h2>
        </div>
        <a href="#" className="text-red-500 text-sm font-semibold">Lihat semua &gt;</a>
      </div>
      <div className="flex justify-end px-4 mt-4">
        <select className="border px-3 py-1 rounded-lg" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option>Terbaru</option>
          <option>Terlama</option>
          <option>Harga Tertinggi</option>
          <option>Harga Terendah</option>
        </select>
      </div>
      <div className="mt-6 overflow-x-auto whitespace-nowrap px-4 overflow-visible">
        <div className="flex gap-6">
          {sortedUsedBikes.map((bike) => (
            <div key={bike.id} className="border rounded-lg p-3 shadow-lg min-w-[300px] bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img src={bike.image} alt={bike.name} className="mx-auto w-full h-48 object-cover rounded-md" />
              <p className="text-sm font-semibold mt-2">{bike.name}</p>
              <p className="text-lg font-bold text-red-500 mt-2">Rp{bike.price.toLocaleString()}</p>
              {/* Button Tambahan */}
              <div className="mt-4 flex justify-center gap-2">
                <button className="border px-4 py-2 rounded-full">Lebih Detail</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lending_Product;
