export default function MessageUI() {
  return (
    <div className="flex gap-4 w-full h-full p-6">
      {/* Sidebar Pesan */}
      <div className="w-1/3 bg-white rounded-xl shadow-md p-3 space-y-2 border-2 border-gray-300">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer transition"
          >
            <img
              src="/images/ava.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Jhon Doe</p>
              <p className="text-xs text-gray-500">ingin berhenti</p>
            </div>
          </div>
        ))}
      </div>

      {/* Panel Isi Pesan */}
      <div className="w-2/3 bg-white rounded-xl shadow-md p-4 border-2 border-gray-300">
        <h3 className="text-center text-lg font-semibold mb-3">
          Ingin Berhenti
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-600 border rounded-lg p-2">
          <span>Dari: Jhon Doe</span>
          <span>2025-01-26 20:05:00</span>
        </div>
        <textarea
          className="w-full h-40 mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          readOnly
          value="Terimakasih atas semua nya."
        ></textarea>
        <button className="mt-3 w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-lg transition transition cursor-pointer">
          Hapus Pesan
        </button>
      </div>
    </div>
  );
}
