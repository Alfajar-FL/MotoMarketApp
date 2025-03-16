import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const brands = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];
const models = {
  Yamaha: ["YZF-R6", "YZF-R1", "MT-07", "MT-09"],
  Honda: ["CBR500R", "CBR650R", "CBR1000RR"],
  Suzuki: ["GSX-R600", "GSX-R750", "GSX-R1000"],
  Kawasaki: ["Ninja 400", "Ninja 650", "ZX-10R"],
};
const types = ["Sport", "Naked", "Touring", "Adventure"];
const priceRanges = ["1-5jt", "6-10jt", "10-15jt", "16-20jt", "20jt++"];
const locations = ["Jakarta", "Bandung", "Surabaya", "Semarang", "Medan", "Bali"];
const distances = ["0-5.000 km", "5.000-10.000 km", "10.000-20.000 km", "20.000 km++"];

const imageList = [
  "src/assets/Yamaha.jpg",
  "src/assets/Yamaha2.jpg",
  "src/assets/Yamaha3.jpg",
  "src/assets/Yamaha4.jpg",
  "src/assets/Yamaha5.jpg",
];

const Lending_Product = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Gambar Motor Utama */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-full flex justify-center">
          <img
            src={imageList[currentIndex]}
            alt="Motor Yamaha"
            className="w-[800px] h-auto transition-all duration-300 shadow-xl"
          />

          {/* Transparan Card */}
          <div
            className="absolute top-0 left-0 w-[70%] h-full bg-white/70 p-8 flex flex-col justify-center shadow-xl"
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 75% 100%, 0% 100%)",
            }}
          >
            <h1 className="text-red-600 text-5xl font-bold">Yamaha YZF-R6</h1>
            <h2 className="text-black text-2xl font-semibold">Superbike Legendaris</h2>
            <p className="text-gray-800 mt-4 text-lg font-semibold">
              Yamaha YZF-R6 adalah motor sport berperforma tinggi yang terkenal dengan handling tajam dan mesin bertenaga.
            </p>
          </div>
        </div>

        {/* Thumbnail List */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <button onClick={prevImage} className="p-2 bg-white shadow-md rounded-full border border-gray-300">
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <div className="flex space-x-2 bg-white p-3 rounded-lg shadow-lg border border-gray-300">
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`w-20 h-14 object-cover border-2 rounded cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? "border-red-500 scale-110" : "border-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button onClick={nextImage} className="p-2 bg-white shadow-md rounded-full border border-gray-300">
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Filter Pencarian */}
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-8">
        <h2 className="text-2xl font-bold mb-4">Cari Kriteria Motor</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Merk */}
          <div>
            <label className="text-sm font-semibold">Merk</label>
            <select className="w-full p-2 border rounded-lg bg-gray-100" onChange={(e) => setSelectedBrand(e.target.value)}>
              <option value="">Pilih Merk</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          {/* Model */}
          <div>
            <label className="text-sm font-semibold">Model</label>
            <select
              className="w-full p-2 border rounded-lg bg-gray-100"
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!selectedBrand}
            >
              <option value="">Pilih Model</option>
              {(models[selectedBrand] || []).map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          {/* Tipe */}
          <div>
            <label className="text-sm font-semibold">Tipe</label>
            <select className="w-full p-2 border rounded-lg bg-gray-100" onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">Pilih Tipe</option>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Harga */}
          <div>
            <label className="text-sm font-semibold">Harga</label>
            <select className="w-full p-2 border rounded-lg bg-gray-100" onChange={(e) => setSelectedPrice(e.target.value)}>
              <option value="">Pilih Harga</option>
              {priceRanges.map((price) => (
                <option key={price} value={price}>{price}</option>
              ))}
            </select>
          </div>
          {/* Jarak Tempuh */}
          <div>
            <label className="text-sm font-semibold">Jarak Tempuh</label>
            <select className="w-full p-2 border rounded-lg bg-gray-100" onChange={(e) => setSelectedDistance(e.target.value)}>
              <option value="">Pilih Jarak</option>
              {distances.map((distance) => (
                <option key={distance} value={distance}>{distance}</option>
              ))}
            </select>
          </div>
          {/* Tahun */}
          <div>
            <label className="text-sm font-semibold">Tahun</label>
            <div className="relative">
            <DatePicker
                selected={selectedYear}
                onChange={(date) => setSelectedYear(date)}
                showYearPicker
                dateFormat="yyyy"
                className="w-full p-2 border rounded-lg bg-gray-100"
                placeholderText="Pilih Tahun"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Calendar size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Cari */}
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-3 border border-black text-black font-bold rounded-lg transition-transform transform hover:scale-110"
          >
            Cari Motor
          </button>
        </div>
      </div>
    </div>
  );
};
export default Lending_Product;
