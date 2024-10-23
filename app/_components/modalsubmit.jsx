"use client";

export default function ModalSubmit({ isSuccess, setIsSubmitModalOpen }) {
  const handleClose = () => {
    setIsSubmitModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"
        onClick={handleClose}
      ></div>

      <div className="relative bg-[#F8E6D2] rounded-lg w-[80%] md:w-[50%] lg:w-[23%] mx-auto z-10 overflow-hidden">
        <div className="relative bg-[#E9557F] rounded-t-lg py-16 flex justify-center -mb-8">
          <img
            src={isSuccess ? "/modalsenyum.svg" : "/modalbalik.svg"}
            alt={isSuccess ? "Success" : "Failed"}
            className="absolute bottom-[-3.34rem] w-56 h-56"
          />
        </div>

        <div className="bg-[#F8E6D2] px-6 py-4 text-center mt-12">
          <h2 className="font-poppins font-semibold text-xl text-black mb-2">
            {isSuccess ? "Terimakasih telah memilih" : "Maaf kamu gagal voting"}
          </h2>
          <p className="text-sm font-poppins text-gray-600 mb-6">
            {isSuccess ? "Suaramu sangat berharga untuk kami" : "Kamu dapat mencoba lagi"}
          </p>

          <div className="flex justify-center gap-4">
            <button
              className="w-full py-2 bg-[#E9557F] text-[#F8E6D2] border-2 border-[#F8E6D2] rounded-lg font-semibold hover:bg-pink-700 transition"
              onClick={handleClose}
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
