
export default function NotFound(){
    return(
        <div className="flex inset-0 justify-center items-center h-screen ">
            <div
            className="absolute inset-0 w-full h-full"
            style={{
            backgroundImage: "url('/Sunburst.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            }}
            >
            </div>
            <div className="flex flex-col items-center justify-center h-[20rem] w-[50rem]">
                <h1 className="font-extrabold font-poppins text-9xl text-white text-stroke">404</h1>
                <p className="font-extrabold text-xl font-poppins text-pink-600 bg-white px-3 py-1 rounded-lg">ups🥲 Halaman yang kamu cari tidak ditemukan 💖</p>
            </div>
        </div>
    );
}