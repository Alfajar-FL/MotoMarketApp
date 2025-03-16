export default function Pesan() {
  return (
    <div className="relative px-4">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Tulis Pesan
        </h2>
        <div className="space-y-5">
          {/* Input Dari */}
          <input
            type="text"
            value="Dari: Jhon Doe"
            disabled
            className="w-full border rounded-md p-3 bg-gray-100 text-gray-700 text-sm shadow-sm"
          />
          {/* Input Kepada */}
          <input
            type="text"
            placeholder="Kepada"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Input Subjek */}
          <input
            type="text"
            placeholder="Subjek"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Textarea */}
          <textarea
            placeholder="Tulis pesan..."
            className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Tombol Kirim */}
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white text-sm px-6 py-2 rounded-lg hover:bg-blue-600 transition shadow-md">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
