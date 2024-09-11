import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="border-2 border-[#E9557F] py-3 px-16 flex justify-between items-center mt-4 mx-4 bg-[#FCD9C6] rounded-lg fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center">
        <Image src="/logo_malpres.svg" alt="Malpres Logo" width={120} height={120} />
      </div>

      <div className="flex items-center space-x-8">
        <a href="#" className="text-[#E9557F] hover:text-pink-500">Voting</a>
        <button className="bg-[#E9557F] text-white py-2 px-6 rounded-lg hover:bg-pink-400">
          Beli Tiket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;