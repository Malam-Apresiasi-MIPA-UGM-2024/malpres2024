"use client";

const Footer = () => {
  return (
    // CONTAINER
    <div className="flex flex-col md:flex-row items-center justify-between p-[2rem] bg-[url('/bg-footer.svg')] bg-no-repeat bg-cover bg-center w-full">
      {/* BOX 1 */}
      <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
        <img src="/malpres-footer.svg" alt="MALPRES" />
      </div>
      {/* BOX 2 */}
      <div className="border-2 border-[#F9F9E0] h-0 md:h-[24rem] w-full md:w-auto mx-4"></div>
      {/* BOX 3 */}
      <div className="flex-1">
        <ul className="list-none text-[#F9F9E0] ml-0 md:ml-[4rem]">
          <li className="my-4">Jalan Puspanjolo dalam 5 no. 10, RT 011, RW 001, Semarang, Jawa Tengah, 5014</li>
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