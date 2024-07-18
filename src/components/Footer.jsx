import { DiAndroid } from "react-icons/di";
import { FaApple, FaYoutube , FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-2/3 mx-auto my-10'>
        <div className='flex my-6 justify-between'>
            <div>
                <p className="text-3xl text-[#00a264] font-bold">JobPro</p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold">JobPro</h3>
                <p className="hover:underline">About</p>
                <p className="hover:underline">Blog</p>
                <p className="hover:underline">Contact Us</p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold">Employers</h3>
                <p className="hover:underline">Get a FREE Employer Account</p>
                <p className="hover:underline">Employer Center</p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold">Information</h3>
                <p className="hover:underline">Help / Contact Us</p>
                <p className="hover:underline">Guidelines</p>
                <p className="hover:underline">Terms of Use</p>
                <p className="hover:underline">Privacy and Ad Choices</p>
                <p className="hover:underline">Cookie Consent Tool</p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold">Work With Us</h3>
                <p className="hover:underline">Advertisers</p>
                <p className="hover:underline">Careers</p>
            </div>
        </div>
        <div className="my-4 mt-10 flex flex-row justify-around">
            <div className="flex items-center gap-2">
                <p>Download the App</p>
                <DiAndroid fontSize={30} className="cursor-pointer hover:text-green-600" />
                <FaApple fontSize={30} className="cursor-pointer hover:text-green-600" />
            </div>
            <div className="flex gap-2">
                <div className="w-fit p-2 rounded-full border cursor-pointer hover:bg-blue-500 hover:text-white border-black">
                    <FaFacebookF fontSize={24} />
                </div>
                <div className="w-fit p-2 rounded-full border cursor-pointer hover:bg-red-600 hover:text-white border-black">
                    <FaYoutube fontSize={24} />
                </div>
                <div className="w-fit p-2 rounded-full border cursor-pointer hover:bg-pink-500 hover:text-white border-black">
                    <FaInstagram fontSize={24} />
                </div>
                <div className="w-fit p-2 rounded-full border cursor-pointer hover:bg-blue-500 hover:text-white border-black">
                    <FaXTwitter fontSize={24} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer