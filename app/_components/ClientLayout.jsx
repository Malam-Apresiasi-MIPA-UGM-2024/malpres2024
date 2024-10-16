// components/ClientLayout.jsx
'use client'; // Tambahkan directive 'use client' untuk menandai ini sebagai komponen client-side

import { useState, useEffect } from 'react';
import LoadingScreen from './loadingscreen';

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol loading

  useEffect(() => {
    // Timer untuk menunda selama 1 detik sebelum memuat konten
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, []);

  return (
    <>
      {/* Tampilkan loading screen selama 1 detik */}
      {isLoading ? <LoadingScreen setLoading={setIsLoading} /> : children}
    </>
  );
}
