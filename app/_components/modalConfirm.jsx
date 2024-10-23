"use client";

export default function ModalKonfirmasi({ setIsConfirmModalOpen, onVoteSubmit }) {
  const handleClose = () => {
    setIsConfirmModalOpen(false);
  };
  const handleVote = (success) => {
    onVoteSubmit(success); // Trigger modal submit with vote status
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark background with blur */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"
        onClick={handleClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-[#F8E6D2] rounded-lg w-[80%] md:w-[50%] lg:w-[23%] mx-auto z-10 overflow-hidden">
        
        {/* Header with image */}
        <div className="relative bg-[#E9557F] rounded-t-lg py-16 flex justify-center -mb-8">
          {/* Insert image from public directory */}
          <img
            src="/modaltanya.svg"
            alt="Tanya"
            className="absolute bottom-[-3.34rem] w-56 h-56"
          />
        </div>

        {/* Content */}
        <div className="bg-[#F8E6D2] px-6 py-4 text-center mt-12">
          <h2 className="font-poppins font-semibold text-xl text-black mb-2">
            Yakin dengan Pilihanmu?
          </h2>
          <p className="text-sm font-poppins text-gray-600 mb-6">
            Pastikan pilihanmu sesuai
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="w-full py-2 bg-[#F8E6D2] text-[#E9557F] border-2 border-[#E9557F] rounded-lg font-semibold hover:bg-gray-100 transition"
              onClick={handleClose}
            >
              Batal
            </button>
            <button
              className="w-full py-2 bg-[#E9557F] text-[#F8E6D2] rounded-lg font-semibold hover:bg-pink-700 transition"
              onClick={() => handleVote(true)} // Simulate successful vote
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
