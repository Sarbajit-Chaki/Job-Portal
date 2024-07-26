import { useState } from "react"
import OTPInput from "react-otp-input"

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
    }
    return (
        <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
            <div className="w-1/4">
                <h1 className="text-2xl font-semibold">Verify Email</h1>
                <p className="text-lg my-2 leading-5">
                    A verification code has been sent to you. Enter the code below
                </p>
                <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-y-6">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input 
                                {...props}
                                placeholder="-"
                                style={{ width: "50px" }}
                                className="border border-gray-700 rounded-md aspect-square text-center  focus:outline-2 focus:outline-green-500"
                            />
                        )}
                        containerStyle={{
                            justifyContent: "space-between",
                            gap: "0 6px",
                        }}
                    />
                    <button type='submit' className="self-end text-white bg-black h-10 w-28 rounded-md hover:bg-[#00a264] transition-all duration-300">Verify</button>
                </form>
            </div>
        </div>
    )
}

export default VerifyEmail