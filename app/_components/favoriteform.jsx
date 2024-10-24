import { useState } from 'react';

const FavoriteForm = () => {
    // State untuk setiap form input
    const [formData, setFormData] = useState({
        department: '',
        major: '',
        lecturer: ''
    });

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fungsi untuk submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Di sini kamu bisa tambahkan logika untuk mengirim data form
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#F8E6D2] bg-opacity-90 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-12 mb-40">
            <div className="relative bg-[#E9557F] rounded-t-lg py-4 px-6 overflow-hidden">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#FAA4AE] to-[#FF3987] rounded-full"></div>
                <h2 className="relative text-2xl font-semibold font-poppins text-white z-10">
                    Pilih Dosen Favoritmu!
                </h2>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Dropdown Departemen */}
                <div className="mb-4 mt-8 mx-5">
                    <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Departemen</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full p-2 border-solid border-2 border-[#E9557F] text-slate-400 font-poppins rounded-lg focus:outline-none"
                    >
                        <option value="">Pilih departemen</option>
                        <option>Departemen Fisika</option>
                        <option>Departemen Ilmu Komputer dan Elektronika</option>
                        <option>Departemen Kimia</option>
                        <option>Departemen Matematika</option>
                    </select>
                </div>

                {/* Dropdown Jurusan */}
                <div className="mb-4 mx-5" >
                    <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Jurusan</label>
                    <select
                        name="major"
                        value={formData.major}
                        onChange={handleInputChange}
                        className="w-full p-2 border-solid border-2 border-[#E9557F] text-slate-400 font-poppins rounded-lg focus:outline-none"
                    >
                        <option value="">Pilih jurusan</option>
                        <option>S1 Informatika</option>
                        <option>S1 Fisika</option>
                        <option>S1 Kimia</option>
                        <option>S1 Matematika</option>
                    </select>
                </div>

                {/* Dropdown Nama Dosen */}
                <div className="mb-4 mx-5">
                    <label className="block text-[#FF5A5A] font-poppins font-bold mb-1">Nama Dosen</label>
                    <select
                        name="lecturer"
                        value={formData.lecturer}
                        onChange={handleInputChange}
                        className="w-full p-2 border-solid border-2 border-[#E9557F] text-slate-400 font-poppins rounded-lg focus:outline-none"
                    >
                        <option value="">Pilih Nama Dosen</option>
                        <option>Dr. Dosen 1</option>
                        <option>Dr. Dosen 2</option>
                        <option>Dr. Dosen 3</option>
                    </select>
                </div>

            </form>

            <div className='mx-5 mb-3'>
                <button 
                onClick={handleSubmit}
                className=" px-5 w-full bg-[#E9557F] text-white py-2 rounded-lg font-poppins font-semibold hover:bg-pink-700">
                    Submit
                </button>
            </div>
        </div>

    );
};

export default FavoriteForm;
