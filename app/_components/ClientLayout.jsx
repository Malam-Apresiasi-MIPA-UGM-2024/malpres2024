// components/ClientLayout.jsx
'use client'; // Tambahkan directive 'use client' untuk menandai ini sebagai komponen client-side

import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol loading

  useEffect(() => {
    // Timer untuk menunda selama 1 detik sebelum memuat konten
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, []);

  return (
    <>
      {/* Tampilkan loading screen selama 1 detik */}
      {isLoading ? <Loading /> : children}
    </>
  );
}
