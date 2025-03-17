import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Lending_Product() {
  const navigate = useNavigate();  // Hook untuk navigasi
  const products = [
    { id: 1, image: "src/assets/Yamaha3.jpg", location: "KHUSUS JABODETABEK, BANTEN", name: "POLYTRON Fox 500 Sepeda Motor Listrik", price: 43100000 },
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

  const handleBuyNow = (id) => {
    // Menavigasi ke halaman detail produk atau transaksi
    navigate(`/produk/${id}`);
  };

  return (
    <div className="py-8 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Ikon Api */}
          <img src="src/assets/fire.png" alt="Fire" className="w-10 h-10 object-contain" />
          
          {/* Judul Motor Unggulan */}
          <h2 className="text-xl font-bold">Motor Unggulan</h2>
  
          {/* Link ke Semua Produk */}
          <a href="#" className="text-red-500 text-sm font-semibold ml-4">
            Lihat semua &gt;
          </a>
        </div>
      </div>
  
      {/* Container untuk List Motor */}
      <div className="mt-6 overflow-x-auto whitespace-nowrap px-4 overflow-visible mb-12">
        <div className="flex gap-6"> {/* Jarak antar card diperkecil */}
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative bg-white rounded-lg shadow-md p-4 w-80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-300"
            >
              {/* Gambar Motor */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="mx-auto w-full h-48 object-cover rounded-md"
              />
              
              {/* Label Lokasi */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                {product.location}
              </div>
  
              {/* Nama Motor */}
              <p className="text-sm font-semibold mt-2">{product.name}</p>
  
              {/* Harga Motor */}
              <p className="text-lg font-bold text-red-500 mt-2">Rp{product.price.toLocaleString()}</p>
  
              {/* Tombol Aksi */}
              <div className="flex gap-3 mt-3">
                {/* Tombol Lebih Detail */}
                <button className="border border-black text-black px-4 py-2 rounded-full text-sm transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                  Lebih Detail
                </button>
  
                {/* Tombol Beli Sekarang */}
                <button 
                  onClick={() => handleBuyNow(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Header Motor Bekas */}
     <div className="flex items-center justify-between px-4 mt-8">
        <div className="flex items-center gap-2">
          {/* Ikon Motor Bekas */}
          <img src="src/assets/star.png" alt="Used Bikes" className="w-15 h-15 object-contain" />

          {/* Judul Motor Bekas */}
          <h2 className="text-xl font-bold">Motor Bekas</h2>

          {/* Dropdown Sortir */}
          <select 
            className="ml-4 px-2 py-1 border border-gray-300 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Terbaru">Terbaru</option>
            <option value="Terlama">Terlama</option>
            <option value="Harga Tertinggi">Harga Tertinggi</option>
            <option value="Harga Terendah">Harga Terendah</option>
          </select>
        </div>
      </div>

      {/* List Motor Bekas */}
      <div className="mt-6 overflow-x-auto whitespace-nowrap px-4 overflow-visible mb-12">
        <div className="flex gap-6">
          {sortedUsedBikes.map((bike) => (
            <div 
              key={bike.id}
              className="relative bg-white rounded-lg shadow-md p-4 w-80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-300"
            >
              {/* Gambar Motor */}
              <img 
                src={bike.image} 
                alt={bike.name} 
                className="mx-auto w-full h-48 object-cover rounded-md"
              />

              {/* Nama Motor */}
              <p className="text-sm font-semibold mt-2">{bike.name}</p>

              {/* Harga Motor */}
              <p className="text-lg font-bold text-red-500 mt-2">Rp{bike.price.toLocaleString()}</p>

              {/* Tanggal Rilis */}
              <p className="text-xs text-gray-500">Tanggal: {bike.date}</p>

              {/* Tombol Aksi */}
              <div className="flex gap-3 mt-3">
                {/* Tombol Lebih Detail */}
                <button className="border border-black text-black px-4 py-2 rounded-full text-sm transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                  Lebih Detail
                </button>

                {/* Tombol Beli Sekarang */}
                <button 
                  onClick={() => handleBuyNow(bike.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm transition-transform duration-300 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Langkah Pembelian */}
      <div className="px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">Cara Membeli Motor</h2>
        <div className="grid grid-cols-4 gap-6">
          {[ 
            { icon: "src/assets/beli_1.avif", title: "Pilih Motor", desc: "Cari motor yang sesuai dengan kebutuhan dan budget Anda." },
            { icon: "src/assets/beli_2.avif", title: "Pesan Motor", desc: "Lakukan pemesanan dengan mengisi data dan memilih metode pembayaran." },
            { icon: "src/assets/beli_3.avif", title: "Proses Pembayaran", desc: "Konfirmasi pembayaran sesuai metode yang dipilih." },
            { icon: "src/assets/beli_4.avif", title: "Ambil Motor", desc: "Ambil motor yang telah dibayar sesuai dengan lokasi yang telah disepakati." }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <img src={step.icon} alt={step.title} className="w-20 h-20 mx-auto"/>
              <p className="text-lg font-semibold mt-2">{step.title}</p>
              <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lending_Product;
