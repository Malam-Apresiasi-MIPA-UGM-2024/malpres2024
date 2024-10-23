"use client";
import { useState } from "react";

export default function ModalInput({ onSubmit, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    department: '',
    major: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // For error message

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateNIM = (nim) => {
    // Check format NIM harus begitu deh yah xx/xxxxxx/PA/xxxxx
    const nimPattern = /^\d{2}\/\d{6}\/PA\/\d{5}$/;
    return nimPattern.test(nim);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.nim || !formData.department || !formData.major) {
      setErrorMessage("Harap isi data dengan benar");
      return;
    }

    // Check NIM format
    if (!validateNIM(formData.nim)) {
      // Set error message if NIM is invalid
      setErrorMessage("NIM yang kamu masukkan tidak ada, coba lagi!");
      return;
    }

    // Reset error message if all validations pass
    setErrorMessage('');
    onSubmit(); // Trigger form submit to open confirmation modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark background with blur */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"
        onClick={handleClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-[#F8E6D2] rounded-lg w-[90%] md:w-[70%] lg:w-[41%] mx-auto z-10 overflow-hidden">
        {/* Header with gradient background and left circle */}
        <div className="relative bg-[#E9557F] rounded-t-lg py-4 px-6 -mx-0 -mt-0 -mb-9">
          <div className="absolute -top-6 left-0 w-20 h-20 bg-gradient-to-br from-[#FAA4AE] to-[#FF3987] rounded-full"></div>
          <button
            className="absolute top-4 right-8  text-2xl font-poppins font-thin text-white hover:text-gray-200 z-10"
            onClick={handleClose}
          >
            x
          </button>

          <h2 className="relative text-2xl mr-4 font-semibold font-poppins text-white z-10">
            Konfirmasi Pemilih
          </h2>
        </div>

        {/* Form section */}
        <div className="mt-8 p-6">
          {errorMessage && (
            <div className="mb-4 text-red-500 font-poppins">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border-solid border-2 border-[#E9557F] font-poppins rounded-lg focus:outline-none"
                placeholder="Masukkan nama"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">NIM</label>
              <input
                type="text"
                name="nim"
                value={formData.nim}
                onChange={handleInputChange}
                className="w-full p-2 border-solid border-2 border-[#E9557F] font-poppins rounded-lg focus:outline-none"
                placeholder="Masukkan NIM"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Departemen</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full p-2 border-solid border-2 border-[#E9557F] text-slate-400 font-poppins rounded-lg focus:outline-none"
              >
                <option value="">Pilih departemen</option>
                <option>Departemen Ilmu Komputer Elektronika</option>
                <option>Departemen Fisika</option>
                <option>Departemen Kimia</option>
                <option>Departemen Matematika</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Jurusan</label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                className="w-full p-2 border-solid border-2 border-[#E9557F] rounded-lg focus:outline-none"
                placeholder="Masukkan jurusan"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#E9557F] text-white py-2 rounded-lg font-poppins font-semibold hover:bg-pink-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
