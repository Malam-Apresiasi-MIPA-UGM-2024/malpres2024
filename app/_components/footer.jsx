"use client";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-[2rem] bg-[url('/bg-footer.svg')] bg-no-repeat bg-cover bg-center w-full">
      <div className="flex-1 flex items-center justify-center">
        <img src="/malpres-footer.svg" alt="MALPRES" />
      </div>
      <div className="border-2 border-[#F9F9E0] h-[24rem] mx-4"></div>
      <div className="flex-1">
        <ul className="list-none text-[#F9F9E0] ml-[4rem]">
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