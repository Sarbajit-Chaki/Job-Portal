import React from 'react'

const ForgotPassword = () => {
    const habdleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex justify-center items-center h-[calc(100vh-3rem)]'>
            <div className='w-1/3  border border-gray-400 px-8 py-6 rounded-md'>
                <form className='flex flex-col'>
                    <label>
                        <p className='font-semibold text-2xl'>Email<span className='text-red-500'>*</span></p>
                        <input
                            required
                            type="email" 
                            className='border h-[40px] px-2 w-full border-gray-500 rounded-md mt-3'
                            placeholder='Enter your email address'
                        />
                    </label>
                    <button
                        type='submit'
                        onClick={() => {}}
                        className='self-end mt-5 bg-black hover:bg-[#00a264] text-white px-4 py-2 rounded-md transition-all duration-300'
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword