import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPost = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef();

    const post = {
        success: true,
        message: "Post found succesfully",
        post_details: {
            title: "MERN Developer Intern",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit nam consectetur itaque velit. Dolor sequi praesentium optio itaque molestias. Animi deleniti, expedita numquam consequuntur repellendus deserunt? Accusantium quo, obcaecati ad illo ipsam sequi commodi dolor! Corrupti cupiditate commodi cumque quae, delectus qui veniam dolorem, sequi minima aliquam earum enim quibusdam facilis explicabo excepturi neque reprehenderit molestias ducimus minus! Amet illum excepturi illo numquam debitis repellendus magni pariatur aliquid animi est neque et consectetur dolorum qui quo vel velit nihil voluptates nisi, ex odio? Odio nobis corporis repellendus asperiores sed officia voluptas vero porro amet laudantium quidem sequi, iure error, dolore odit? Corrupti laboriosam nesciunt ex ut consequatur impedit modi et voluptatem dignissimos ab! Qui dolorum dicta iusto voluptas velit! Autem harum deleniti labore velit, reiciendis nobis. Nisi, repellat! Minus fugit quaerat ipsam obcaecati, et in ipsum, blanditiis possimus tempora ut molestias cupiditate similique. Rerum illo voluptatibus consectetur veritatis atque molestias saepe ipsam aliquid doloremque laboriosam temporibus explicabo ullam cumque repellendus dolore tenetur, dignissimos placeat unde! Laudantium minus, voluptate provident alias aperiam dolor, iure magni eius illum beatae obcaecati impedit tenetur fugiat illo perferendis expedita vel, consectetur aliquid facere itaque suscipit. Numquam ipsum odit eius atque vitae? Molestiae, veniam. Ducimus explicabo sint quos sed architecto a libero illum ad voluptatem eaque in iure magnam, iste numquam fugiat omnis! Sint, facere ex eius maxime rem aliquid nihil doloremque porro eum possimus incidunt optio dolorem vero accusamus hic corporis! Libero labore numquam deserunt esse, quod nihil omnis excepturi culpa recusandae, ad animi quos sed. Magnam animi labore obcaecati accusantium exercitationem architecto, itaque quasi aliquid amet placeat necessitatibus nesciunt. Cumque molestiae commodi dicta, impedit temporibus et nam alias, ratione ad officia doloremque dignissimos ut eaque culpa libero minima pariatur saepe iste nihil. Similique quae ut voluptate explicabo animi fugiat ratione dignissimos neque eos.",
            imageUrl: "https://res.cloudinary.com/dpsb0ysde/image/upload/v1721747774/job-search_cbwggp.png",
            applied: [{}]
        }
    }

    const [form, setForm] = useState({
        title: post.post_details.title,
        description: post.post_details.description,
        imageUrl: post.post_details.imageUrl
    })

    const [imagePreview, setImagePreview] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handlePdfChange = (e) => {
        const file = e.target.files[0]
        if(file){
            setForm({...form, [e.target.name]: file})
            ReadFile(file)
        }
    }

    const ReadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImagePreview(reader.result)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(form)

        toast.success('Job Edited', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>
            <ToastContainer/>

            <div className='w-[calc(100vw-10rem)] overflow-y-auto'>
                <div className=' mx-auto w-10/12 '>
                    <h1 className="text-3xl font-semibold mb-10">Edit Post</h1>
                    <main className=' bg-gray-100 border border-gray-400 rounded-lg'>
                        <div className=' flex gap-x-10 items-center justify-center px-10 py-8 '>
                            <img className=' size-28 rounded-full' src={imagePreview || form.imageUrl} alt="" />
                            <div className=' flex flex-col gap-y-4 items-center'>
                                <h1 className=' text-xl text-black font-semibold'>Change picture</h1>
                                <div className=' flex gap-4 '>
                                    <input type="file"
                                        className=' hidden'
                                        accept="image/png, image/jpeg, image/jpg, image/gif"
                                        ref={fileInputRef} name='imageUrl'
                                        onChange={handlePdfChange}
                                    />
                                    <button onClick={() => { fileInputRef.current.click() }} className=' bg-gray-400 text-black py-2 px-4 rounded-md'>Select</button>
                                </div>
                            </div>
                        </div>

                        <div className=" pb-10">
                            <form onSubmit={handleSubmit}  action="">
                                <div className="w-10/12 mx-auto flex flex-col gap-y-3">
                                    <h2 className="text-xl text-black font-semibold ">Job Information</h2>
                                    <div className="w-full">
                                        <label>
                                            <p>Job Title</p>
                                            <input name='title' type="text" className="border border-gray-400 rounded-md mt-2 p-2 w-full"
                                                value={form.title}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <label>
                                            <p>Job Description</p>
                                            <textarea className="border border-gray-400 rounded-md mt-2 p-2 w-full"
                                                rows={7}
                                                name="description"
                                                maxLength={1500}
                                                value={form.description}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex gap-4 self-end">
                                        <button onClick={() => { navigate("/myposts") }} className="px-4 py-2 bg-gray-400 rounded-md">Cancel</button>
                                        <button type="submit" value='Submit' className=" flex items-center gap-x-1 px-4 py-2 bg-black hover:bg-[#00a264] text-white rounded-md transition-all duration-300">Edit<span className="material-symbols-outlined">edit_square</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default EditPost
