"use client"
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from "../_components/footer";
import LoadingScreen from "../_components/loadingscreen"; // Impor komponen LoadingScreen
import Navbar from "../_components/navbar";
import Card from "../_components/nominasicard";
import HeroSection from "../_components/nominasihero";
import KategoriApresiasi from "../_components/nominasikategorismalltext";

const Nominasi = () => {
    const belumRilis = true
    if(belumRilis) {
        // notFound()
    }

    const [loading, setLoading] = useState(true); // State untuk loading

    useEffect(() => {
        // Simulasi waktu loading
        const timeout = setTimeout(() => {
            setLoading(false); // Sembunyikan loading screen setelah selesai
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading && <LoadingScreen setLoading={setLoading} />} {/* Tampilkan loading screen jika masih loading */}

            {/* Konten utama */}
            <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
                <Navbar />
                <div className="mb-auto font-poppins bg-[url('/rasengan.svg')] bg-cover bg-no-repeat bg-center">
                    <HeroSection />
                    <KategoriApresiasi />
                    <div className="mt-4">
                        {/* List Kategori */}
                        <div className="mx-5 md:mx-9 mb-20 flex flex-wrap justify-center gap-3 md:flex-col min-w-[360px] min-h-[648px] md:gap-7">
                            {kategoriList.map((kategori) => (
                                <Card
                                    key={kategori.title}
                                    title={kategori.title}
                                    desc={kategori.desc}
                                />
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Nominasi;

const kategoriList = [
    {
        title: "Meow-pa",
        desc: "Sebuah ajang penghargaan bagi kucing-kucing lucu nan menawan yang mampu menyebarkan kebahagiaan dan kehangatan. Kucing-kucing ini memiliki daya tarik tersendiri"
    },
    {
        title: "Favorite Lecturer",
        desc: "Nominasi yang ditujukan pada dosen FMIPA UGM yang paling diidolakan dan berpengaruh besar dalam membentuk karakter serta minat belajar mahasiswa/i FMIPA UGM"
    },
    {
        title: "Empowering Role Model Student",
        desc: "Nominasi yang ditujukkan kepada mahasiswa/i aktif FMIPA UGM yang memiliki kisah hidup menginspirasi, pernah menjadi awardee beasiswa"
    },
    {
        title: "Most Sportistic Student",
        desc: "Nominasi yang diberikan untuk mengapresiasi mahasiswa/i FMIPA UGM yang memiliki prestasi di bidang olahraga atau seni"
    },
    {
        title: "Most Visionary Studentpreneur",
        desc: "Nominasi yang diberikan kepada mahasiswa/i aktif FMIPA UGM yang memiliki jiwa kewirausahaan yang inovatif dan visioner"
    },
    {
        title: "MIPA's Meaningful Social Activity",
        desc: "Penghargaan bagi UKM atau organisasi di FMIPA UGM yang telah memberikan kontribusi nyata dalam kegiatan sosial"
    },
    {
        title: "The Best Researcher",
        desc: "Nominasi yang diberikan bagi mahasiswa/i aktif FMIPA UGM, baik secara individu maupun kelompok, yang memiliki keunggulan dan kontribusi signifikan dalam bidang penelitian"
    },
    {
        title: "My Comfort Zone",
        desc: "Nominasi yang ditunjukkan kepada tempat di kampus FMIPA UGM yang disukai oleh mahasiswa. Tempat-tempat ini dipilih berdasarkan kenyamanan dan fungsionalitasnya"
    },
    {
        title: "Innovative Lecturer",
        desc: "Nominasi untuk tenaga pendidik FMIPA UGM yang memiliki model pengajaran inovatif, kreatif, dan mampu secara signifikan meningkatkan efektivitas pembelajaran secara aktif"
    },
    {
        title: "Art Exhibition",
        desc: "Nominasi untuk mengapresiasi karya luar biasa civitas akademika FMIPA yang memiliki minat dan bakat yang luar biasa di bidang seni, kreativitas, serta kontribusi yang inspiratif"
    },
    {
        title: "The Most Outstanding Lecturer Publication",
        desc: "Nominasi ditujukan kepada tenaga pendidik FMIPA UGM dengan publikasi ilmiah berkualitas tinggi"
    },


];