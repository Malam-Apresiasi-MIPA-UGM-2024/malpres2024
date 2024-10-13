import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import ApresiasiNominasi from '../_components/apresiasinominasi';


const Nominasi = () => {
    return (
        <>
            <Navbar />
            <div className="mb-80">
                <HeroSection />
                <div className="mt-5 bg-slate-100 mx-5 rounded-lg w-[217px] h-11 flex justify-center items-center max-h-11 ">
                    <div>
                        <h2 className="text-xl font-semibold text-black">Kategori Apresiasi</h2>
                    </div>
                </div>
                <div className="mt-4">
                    {/* List Kategori */}
                    <div className="mx-5 flex flex-wrap justify-center gap-3 md:flex-col min-w-[360px] min-h-[648px]">
                        {kategoriList.map((kategori) => (
                            <Card
                                key={kategori.title}
                                title={kategori.title}
                                desc={kategori.desc}
                            />
                        ))}
                    </div>
                    {/*Apresiasi Nominasi Section */}
                </div>
                <ApresiasiSection />
                <Footer />

            </div>

        </>
    )
}

export default Nominasi;

const kategoriList = [
    {
        title: "Judul Kategori",
        desc: "Mas Radit ganteng, penjelasan singkat yang gausah singkat banget as long usernya paham"
    },
    {
        title: "Judul Kategori",
        desc: "Mas Radit ganteng, penjelasan singkat yang gausah singkat banget as long usernya paham"
    },
    {
        title: "Judul Kategori",
        desc: "Mas Radit ganteng, penjelasan singkat yang gausah singkat banget as long usernya paham"
    },
    {
        title: "Judul Kategori",
        desc: "Mas Radit ganteng, penjelasan singkat yang gausah singkat banget as long usernya paham"
    },

]
const HeroSection = () => {
    return (
        <div className="mt-28 mx-5 bg-gray-100 text-center py-16 min-w-[360px] min-h-[30rem] rounded-3xl">
            <h1 className="text-7xl py-10 font-bold text-slate-950 ">Nominasi Apresiasi</h1>
            <p className="text-lg mt-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

const Card = ({
    title, desc
}) => {
    return (
        <div className="bg-white shadow-md w-56 flex flex-col justify-center items-start md:flex-row md:justify-start md:w-full md:h-40">
            <div className="border border-black min-h-44 w-56 md:min-h-40 md:min-w-44 md:max-w-48 lg:min-w-48">
                <img src="" alt="" />
            </div>
            <div className="min-h-48 py-4 px-4 md:flex md:items-">
                <div className="flex flex-col lg:mt-8">
                    <h2 className=" text-xl font-bold text-black lg:text-2xl">{title}</h2>
                    <p className="text-sm mt-0 text-gray-600 mb-2 ">{desc}</p>
                </div>
                <div className="flex justify-center items-center md:mb-8 lg:ml-96 ">
                    <button className="w-48 h-11 md:w-44 md:text-lg border border-black text-black rounded-md text-sm font-semibold py-1.5">Beri Pilihanmu</button>
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