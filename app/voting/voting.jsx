<<<<<<< HEAD
"use client"
import ModalInput from '../_components/modalInput';
import ModalKonfirmasi from '../_components/modalConfirm';
import ModalSubmit from '../_components/modalsubmit';
import { useState } from 'react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // For confirmation modal
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isVoteSuccess, setIsVoteSuccess] = useState(null);

  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = () => {
    setIsModalOpen(false); // Close input data modal
    setIsConfirmModalOpen(true); // Open confirmation modal
  };

  const handleVoteSubmit = (success) => {
    setIsConfirmModalOpen(false);
    setIsVoteSuccess(success); // Set the result of voting (success or failure)
    setIsSubmitModalOpen(true); // Open submit modal after confirmation
  };

  return (
    <div className="relative h-auto bg-cover bg-center">
      {/* Background images */}
=======
"use client";

import axios from 'axios'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useNominasiDll } from "../context/nominasiDll";
import LoadingScreen from '../_components/loadingscreen';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const { selectedNominasi } = useNominasiDll();
  const [details, setDetails] = useState({
    "result": "",
    "status": 0,
    "shortDesc": "",
    candidates: []
  });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post('api/getNominationDetails', {
              "nominasi": `${selectedNominasi}`
          })
            if(response.status != 200) {
              router.push('/nominasi')
            }
            setDetails(response.data);
            setLoading(false); 
        } catch (error) {
            console.error('Error fetching data:', error);
            router.push('/nominasi')
        }
    }
    fetchData();
  }, []);

  return (
    <div className="relative h-auto bg-cover bg-center">
       {loading && <LoadingScreen setLoading={setLoading} />}
>>>>>>> b333b89e9fd2e21551a757bcc52dcef7afbac041
      <div
        className="absolute inset-0 opacity-80 w-full md:w-100rem h-full"
        style={{
          backgroundImage: "url('/buletbulet.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/anginmuter.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      
      <div className="relative">
<<<<<<< HEAD
        {/* Content */}
        <div className="relative mt-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-poppins font-extrabold text-stroke transition duration-700">
              Judul Apresiasi
            </h1>
=======
        <div>
          <div>
            <div>
              <button className="rounded-lg bg-white py-1 px-3 mt-10 ml-4 md:px-5 lg:px-5 md:py-2 sm:ml-10 relative">
                <a href="/nominasi" className="text-lg flex items-center">
                  <svg
                    className="h-6 w-6 text-darkPink hover:text-secondary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                  </svg>
                  <p className="inline-block ml-2 pl-1 text-xs sm:pl-1 md:pl-2 lg:pl-3 md:text-lg lg:text-lg text-darkPink font-poppins font-semibold hover:text-secondary">
                    Kembali
                  </p>
                </a>
              </button>
            </div>
            <div className="relative mt-10">
              <div className="text-center">
                <h1 className="text-4xl text-white sm:text-4xl md:text-6xl lg:text-8xl font-poppins font-extrabold  text- transition duration-700" style={{
                        WebkitTextStroke: '3px #DA1C5C',
                    }}>
                  {selectedNominasi}
                </h1>
              </div>
              <div className="rounded-lg bg-white py-3 mx-5 md:mx-14 lg:mx-80 text-center mt-4 md:mt-8">
                <p className="text-base sm:text-sm md:text-lg font-poppins font-semibold text-[#6F2A3D] transition duration-700">
                  {details.shortDesc} 
                </p>
              </div>
            </div>
>>>>>>> b333b89e9fd2e21551a757bcc52dcef7afbac041
          </div>
          <div className="rounded-lg bg-white py-3 mx-5 md:mx-14 lg:mx-80 text-center mt-4 md:mt-8">
            <h3 className="text-base sm:text-lg md:text-2xl font-poppins font-semibold text-[#6F2A3D] transition duration-700">
              Penjelasan singkat mengenai kategori.
            </h3>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-8 sm:mt-14">
          <div className="flex flex-wrap justify-center gap-4 w-full transition duration-700">
            {Array(7).fill(0).map((_, index) => (
              <div key={index} className="relative w-[45%] sm:w-[45%] md:w-[39%] lg:w-[22%] h-[21rem] sm:h-[24rem] md:h-[32rem] bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                <img
                  src="/realityclub.svg"
                  alt="Nama Nominasi"
                  className="w-full h-full object-cover"
                />
                <div className="p-4 absolute bottom-0 w-full bg-gradient-to-t from-black from-50% to-transparent to-100%">
                  <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-poppins font-bold text-white">
                    Nama Nominasi
                  </h2>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-base font-poppins font-normal text-white mb-2">
                    (Jurusan - Angkatan)
                  </p>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-base font-poppins font-normal text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    className="mt-4 py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg text-sm hover:bg-pink-700 w-full"
                    onClick={handleVoteClick} // Triggers the modal
                  >
                    Vote
                  </button>
=======
          <div className="mt-8 sm:mt-14">
            {/* Flex grid for responsive layout */}
            <div className="flex flex-wrap justify-center gap-4 w-full transition duration-700">
              {details.candidates.map(candidate => (
                <div key={candidate.nama} className="relative w-[45%] sm:w-[45%] md:w-[39%] lg:w-[22%] h-[21rem] sm:h-[24rem] md:h-[32rem] bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <img
                    src={candidate.imgRoute}
                    alt="Nama Nominasi"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 absolute bottom-0 w-full bg-gradient-to-t from-black from-50% to-transparent to-100%">
                    <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-poppins font-bold text-white">
                      {candidate.nama}
                    </h2>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-base font-poppins font-normal text-white mb-2">
                      {candidate.jurusan} {candidate.angkatan}
                    </p>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-base font-poppins font-normal text-white mt-2">
                      {candidate.deskripsi}
                    </p>
                    <button className="mt-4 py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg text-sm hover:bg-pink-700 w-full">
                      Vote
                    </button>
                  </div>
>>>>>>> b333b89e9fd2e21551a757bcc52dcef7afbac041
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render input data modal */}
      {isModalOpen && <ModalInput onSubmit={handleFormSubmit} setIsModalOpen={setIsModalOpen} />}

      {/* Render confirmation modal */}
      {isConfirmModalOpen && <ModalKonfirmasi setIsConfirmModalOpen={setIsConfirmModalOpen} onVoteSubmit={handleVoteSubmit}/>}

      {/* Render submit modal */}
      {isSubmitModalOpen && <ModalSubmit isSuccess={isVoteSuccess} setIsSubmitModalOpen={setIsSubmitModalOpen} />}
    </div>
  );
};

export default Hero;
