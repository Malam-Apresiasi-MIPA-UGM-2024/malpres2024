import Navbar from "../_components/navbar";
import Footer from "../_components/footer";


const Nominasi = () => {
    return (
        <>
            <Navbar />
            <div className="mb-80"
            >
                <HeroSection />
                <div className="mt-5 bg-slate-100 mx-5 md:mx-9 rounded-lg w-[217px] h-11 flex justify-center items-center max-h-11 ">
                    <div>
                        <h2 className="text-xl font-semibold text-[#E9557F]">Kategori Apresiasi</h2>
                    </div>
                </div>
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
        desc: "Nomniasi yang ditujukan pada dosen FMIPA UGM yang paling diidolakan dan berpengaruh besar dalam membentuk karakter serta minat belajar mahasiswa/i FMIPA UGM"
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
        title: "The best researcher",
        desc: "Nominasi yang diberikan bagi mahasiswa/i aktif FMIPA UGM, baik secara individu maupun kelompok, yang memiliki keunggulan dan kontribusi signifikan dalam bidang penelitian"
    },
    {
        title: "My comfort zone",
        desc: "Nominasi yang ditunjukkan kepada tempat di kampus FMIPA UGM yang disukai oleh mahasiswa. Tempat-tempat ini dipilih berdasarkan kenyamanan dan fungsionalitasnya"
    },
    {
        title: "Innovatice lecturer",
        desc: "Nominasi untuk tenaga pendidik FMIPA UGM yang memiliki model pengajaran inovatif dan mampu meningkatkan efektivitas pembelajaran secara aktif"
    },
    {
        title: "Art exhibition",
        desc: "Nominasi untuk mengapresiasi karya civitas akademika FMIPA yang memiliki minat dan bakat luar biasa di bidang seni dan kreativitas, serta kontribusi yang inspiratif"
    },
    {
        title: "The most outstanding lecturer publication",
        desc: "Nominasi ditujukan kepada tenaga pendidik FMIPA UGM dengan publikasi ilmiah berkualitas tinggi"
    },
    

]
const HeroSection = () => {
    return (
        <div className="mt-24 mx-5 py-16 min-w-[360px] min-h-[34rem] rounded-3xl bg-cover bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage: "linear-gradient(to top, rgba(255, 10, 140, 0.8), rgba(250, 164, 174, 0.3)), url('/bg-banner_nominasi.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
                <div>
                    <h1 className="text-7xl md:text-8xl py-10 font-extrabold text-white white-space: pre-wrap "
                    >Nominasi<br />Apresiasi</h1>
                </div>
                <p className="text-lg font-bold mt-4 text-white">Lorem ipsum dolor sit amet</p>   

        </div>
    )
}

const Card = ({
    title, desc
}) => {
    return (
        <div className="bg-white shadow-md w-56 flex flex-col justify-center items-start md:flex-row md:justify-start md:w-full md:h-40">
            <div className="border bg-[#D9D9D9] min-h-44 h-full w-full md:min-h-40 md:min-w-44 md:max-w-48 lg:min-w-48">
                <img src="" alt="" />
            </div>
            <div className="min-h-52 py-2 px-4 md:flex md:flex-grow ">
                <div className="flex flex-col lg:mt-8">
                    <h2 className=" text-xl font-bold text-[#E9557F] lg:text-2xl">{title}</h2>
                    <p className="text-xs md:text-sm lg:text-base mt-0 text-black mb-2 ">{desc}</p>
                </div>
                <div className="flex justify-center items-center md:mb-8 lg:mb-12 lg:ml-96 ">
                    <button className="w-48 h-11 md:w-44 md:text-lg border bg-[#E9557F] text-white rounded-md text-sm font-semibold py-1.5">Beri Pilihanmu</button>
                </div>
            </div>
        </div>
    )
}

const ApresiasiSection = () => {
    return (
        <section className="min-w-[360px] min-h-[36rem] bg-white rounded-lg p-8 my-8 mx-5 text-center flex flex-col justify-center items-center ">
            <div className="border border-black rounded w-40 h-10">
                <p className="text-black pt-2 font-bold">Tema Malpres</p>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4" >Apresiasi Nominasi</h2>
            <p className="text-gray-600 text-lg">
                beri penghargaan terhadap yang terbaik atas pencapaian yang diraih
            </p>
        </section>
    )
}