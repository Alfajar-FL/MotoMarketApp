import { useParams } from "react-router-dom";

function DetailMotor() {
  const { id } = useParams(); // Ambil ID dari URL parameter

  // Biasanya di sini kamu akan mengambil data produk berdasarkan ID tersebut.
  // Di bawah ini adalah data statis untuk contoh.

  const product = {
    1: { name: "POLYTRON Fox 500 Sepeda Motor Listrik", description: "Deskripsi motor POLYTRON Fox 500", price: 43100000 },
    2: { name: "Yamaha NMAX 2023", description: "Deskripsi Yamaha NMAX 2023", price: 32000000 },
    // Tambahkan produk lainnya sesuai ID
  };

  const productDetail = product[id]; // Ambil detail produk berdasarkan ID

  if (!productDetail) {
    return <div>Motor tidak ditemukan!</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">{productDetail.name}</h1>
      <p className="text-lg mt-2">{productDetail.description}</p>
      <p className="text-xl text-red-500 mt-4">Rp{productDetail.price.toLocaleString()}</p>
    </div>
  );
}

export default DetailMotor;
