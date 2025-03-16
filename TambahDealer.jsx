import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TambahDealer() {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const [dealer, setDealer] = useState({
    nama: "",
    lokasi: "",
    tanggalMulai: "",
    password: "",
    foto: null,
  });

  const handleChange = (e) => {
    setDealer({ ...dealer, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDealer({ ...dealer, foto: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Dealer:", dealer);
    alert("Dealer berhasil ditambahkan!");
  };

  const handleCancel = () => {
    navigate("/dealer"); // Kembali ke halaman Dealer
  };

  return (
    <div className="p-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md"
      >
        {/* Judul */}
        <h2 className="text-2xl font-semibold mb-4">Tambah Akun Dealer</h2>

        <div className="flex gap-6">
          {/* Form Input */}
          <div className="flex flex-col gap-4 w-1/2">
            <input
              type="text"
              name="nama"
              placeholder="Nama Dealer"
              value={dealer.nama}
              onChange={handleChange}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="lokasi"
              placeholder="Lokasi"
              value={dealer.lokasi}
              onChange={handleChange}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="date"
              name="tanggalMulai"
              value={dealer.tanggalMulai}
              onChange={handleChange}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={dealer.password}
              onChange={handleChange}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          {/* Upload Foto */}
          <div className="w-1/2 flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 bg-gray-50 text-center">
            <label className="cursor-pointer flex flex-col items-center">
              <div className="text-blue-500 text-5xl">⬆️</div>
              <p className="text-gray-500 text-sm mt-2">
                Tarik lalu lepas file foto yang anda inginkan
              </p>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                required
              />
              <button
                type="button"
                className="mt-3 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Pilih File
              </button>
            </label>
            {dealer.foto && (
              <p className="text-sm text-gray-500 mt-2">{dealer.foto.name}</p>
            )}
          </div>
        </div>

        {/* Tombol Batal & Tambah */}
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Tambah Akun Dealer
          </button>
        </div>
      </form>
    </div>
  );
}
