import InputWithLabel from "../components/InputWithLabel.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Button from "../components/Button.jsx";
import NavigateTo from "../helper/Navigate.jsx";
import Footer from "../components/footer/footer.jsx";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col">
                <div className=" w-full text-left bg-white p-16 rounded-xl">
                    <h1 className="font-bold text-xl mb-6">EDIT PROFILE</h1>
                    <InputWithLabel className="w-full mb-4" id="fullName" name="fullName" label="Full Name"
                                    placeholder="Masukkan nama lengkap anda"/>
                    <InputWithLabel className="w-full mb-4" id="gender" name="gender" label="Gender"
                                    placeholder="Masukkan jenis kelamin anda"/>
                    <InputWithLabel className="w-full mb-4" id="birthDate" name="birthDate" label="Birth of Date"
                                    placeholder="Masukkan tanggal lahir anda" type="date"/>
                    <InputWithLabel className="w-full mb-4" id="phoneNumber" name="phoneNumber" label="Phone Number"
                                    placeholder="Masukkan nomor telepon anda anda"/>
                    <InputWithLabel className="w-full mb-4" id="address" name="address" label="Address"
                                    placeholder="Masukkan alamat anda"/>

                    <div className="space-x-2">
                        <Button text="Back" onClick={() => {
                            navigate(-1)
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                        <Button text="Save" onClick={() => {
                            navigate("/learn/dashboard")
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile;