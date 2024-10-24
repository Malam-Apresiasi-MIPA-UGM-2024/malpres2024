"use client"
import FavoriteForm from "../_components/favoriteform";
import Footer from "../_components/footer";
import Link from 'next/link'; // Import Link untuk navigasi kembali

const FavoriteLecture = () => {
  return (
    <div className="relative h-auto bg-cover bg-center pt-28">
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-80 w-full md:w-100rem h-full"
        style={{
          backgroundImage: "url('/buletbulet.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/anginmuter.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Tombol kembali */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="bg-white hover:bg-gray-100 text-[#DA1C5C] font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Kembali
          </button>
        </Link>
      </div>

      <main className="flex flex-col justify-center items-center flex-grow mb-10">
        {/* Title dan Subjudul */}
        <div className="text-center ">
          <h1 
          className="text-7xl font-poppins font-extrabold text-white"
          style={{
            WebkitTextStroke: '3px #E9557F',
        }}
          >Dosen Favorit</h1>
          <div className="mt-3">
            <p className="text-xl font-semibold font-poppins text-gray-700 bg-slate-50 p-2 rounded-md">Penjelasan singkat mengenai kategori</p>
          </div>
        </div>
        {/* Form Pilihan */}
        <FavoriteForm />
      </main>

      <Footer />
    </div>
  );
};

export default FavoriteLecture;
