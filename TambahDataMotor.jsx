import { useState } from "react";

export default function TambahDataMotor() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-4 px-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-full w-11/12 mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">
          Tambah Data Motor
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Form Input */}
          <div className="col-span-9 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Merk, Model"
                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-300"
              />
              <select className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-300">
                <option hidden>Tipe</option>
                <option>Sport</option>
                <option>Skuter</option>
                <option>Off-road</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <span className="mr-2">📅</span>
                <input
                  type="number"
                  placeholder="Tahun Rilis"
                  className="w-full outline-none focus:ring-0"
                />
              </div>
              <input
                type="text"
                placeholder="Warna Motor"
                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-300">
                <option hidden>Jenis Transmisi</option>
                <option>Manual</option>
                <option>Otomatis</option>
              </select>
              <input
                type="text"
                placeholder="Jarak Tempuh"
                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-red-300"
              />
            </div>

            <textarea
              placeholder="Deskripsi :"
              className="border border-gray-300 w-full p-3 rounded-lg h-32 resize-none focus:ring-2 focus:ring-red-300"
            ></textarea>
          </div>

          {/* Upload Foto */}
          <div className="col-span-3 border border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 space-y-4">
            <label className="cursor-pointer">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center space-y-2">
                <span className="text-red-500 text-4xl">⬆</span>
                <p className="text-gray-500 text-sm text-center">
                  Tarik lalu lepas file foto yang anda inginkan
                </p>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg">
                  Pilih File
                </button>
              </div>
            </label>
          </div>
        </div>

        {/* Tombol Batal dan Simpan */}
        <div className="flex justify-end space-x-3 mt-6">
          {/* Tombol Batal */}
          <button
            onClick={() => window.history.back()} // Kembali ke halaman sebelumnya
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition transition cursor-pointer"
          >
            Batal
          </button>

          {/* Tombol Simpan */}
          <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition cursor-pointer">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
