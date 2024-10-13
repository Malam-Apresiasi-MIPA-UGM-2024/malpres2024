const Card = ({
    title, desc
}) => {
    return (
        <div className="bg-white shadow-md w-56 flex flex-col justify-center items-start md:flex-row md:justify-start md:w-full md:h-40">
            <div className="border bg-[#D9D9D9] min-h-44 h-full w-full md:min-h-40 md:min-w-44 md:max-w-48 lg:min-w-48">
                <img src="" alt="" />
            </div>
            <div className="min-h-52 w-auto py-2 px-4 md:flex flex-grow lg:min ">
                <div className="flex flex-col w-auto mb-auto lg:mt-4 md:pr-10">
                    <div>
                        <h2 className=" text-xl font-bold text-[#E9557F] lg:text-2xl">{title}</h2>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm lg:text-base mt-0 text-black mb-2 ">{desc}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center md:mb-8 lg:mb-12 md:ml-auto ">
                    <button className="w-48 h-11 md:w-44 md:text-lg border bg-[#E9557F] text-white rounded-md text-sm font-semibold py-1.5">Beri Pilihanmu</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
