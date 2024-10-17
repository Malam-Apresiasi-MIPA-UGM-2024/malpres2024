"use client";

const Footer = () => {
  return (
    // CONTAINER
    <div className="flex flex-col md:flex-row items-center justify-between p-[2rem] bg-[url('/bg-footer.svg')] bg-no-repeat bg-cover bg-center w-full font-poppins">
      {/* BOX 1 */}
      <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
        <img src="/malpres-footer.svg" alt="MALPRES" />
      </div>
      {/* BOX 2 */}
      <div className="border-2 border-[#F9F9E0] h-0 md:h-[24rem] w-full md:w-auto mx-4"></div>
      {/* BOX 3 */}
      <div className="flex-1">
        <ul className="list-none text-[#F9F9E0] ml-0 md:ml-[4rem]">
          <li className="my-4">Bulaksumur, Jl. Geografi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</li>
          <li className="my-4">Kontak Email</li>
          <li className="my-4">Nomor Telepon</li>
          <li className="my-4">Instagram</li>
          <li className="my-4">Facebook</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;