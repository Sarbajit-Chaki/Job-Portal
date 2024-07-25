import { useState } from 'react'
import job_picture from '../assets/images/job-search.png'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const MyPosts = () => {
    const [allPosts, setAllPosts] = useState({
        success: true,
        message: "All post get succesfully",
        "All_post_detsils": [
          {
            "title": "MERN Developer Intern",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit nam consectetur itaque velit. Dolor sequi praesentium optio itaque molestias. Animi deleniti, expedita numquam consequuntur repellendus deserunt? Accusantium quo, obcaecati ad illo ipsam sequi commodi dolor! Corrupti cupiditate commodi cumque quae, delectus qui veniam dolorem, sequi minima aliquam earum enim quibusdam facilis explicabo excepturi neque reprehenderit molestias ducimus minus! Amet illum excepturi illo numquam debitis repellendus magni pariatur aliquid animi est neque et consectetur dolorum qui quo vel velit nihil voluptates nisi, ex odio? Odio nobis corporis repellendus asperiores sed officia voluptas vero porro amet laudantium quidem sequi, iure error, dolore odit? Corrupti laboriosam nesciunt ex ut consequatur impedit modi et voluptatem dignissimos ab! Qui dolorum dicta iusto voluptas velit! Autem harum deleniti labore velit, reiciendis nobis. Nisi, repellat! Minus fugit quaerat ipsam obcaecati, et in ipsum, blanditiis possimus tempora ut molestias cupiditate similique. Rerum illo voluptatibus consectetur veritatis atque molestias saepe ipsam aliquid doloremque laboriosam temporibus explicabo ullam cumque repellendus dolore tenetur, dignissimos placeat unde! Laudantium minus, voluptate provident alias aperiam dolor, iure magni eius illum beatae obcaecati impedit tenetur fugiat illo perferendis expedita vel, consectetur aliquid facere itaque suscipit. Numquam ipsum odit eius atque vitae? Molestiae, veniam. Ducimus explicabo sint quos sed architecto a libero illum ad voluptatem eaque in iure magnam, iste numquam fugiat omnis! Sint, facere ex eius maxime rem aliquid nihil doloremque porro eum possimus incidunt optio dolorem vero accusamus hic corporis! Libero labore numquam deserunt esse, quod nihil omnis excepturi culpa recusandae, ad animi quos sed. Magnam animi labore obcaecati accusantium exercitationem architecto, itaque quasi aliquid amet placeat necessitatibus nesciunt. Cumque molestiae commodi dicta, impedit temporibus et nam alias, ratione ad officia doloremque dignissimos ut eaque culpa libero minima pariatur saepe iste nihil. Similique quae ut voluptate explicabo animi fugiat ratione dignissimos neque eos.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Wordpress Developer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam labore alias nihil, placeat dolorum in assumenda eveniet obcaecati facere! Dolore ut sint illo deserunt repudiandae doloremque esse repellat earum nobis impedit, vero, modi nostrum obcaecati delectus consequatur excepturi minima? Nihil in inventore rerum perferendis cumque vero suscipit deserunt ipsam repellendus aperiam est quis nulla reiciendis quos delectus totam minus error ea, ratione velit ducimus. Et nostrum nemo laudantium adipisci doloribus numquam atque quae aliquid quasi distinctio sint nihil itaque quas minima rem, vel maxime fugit, quisquam eveniet placeat obcaecati. Aperiam quo quaerat asperiores earum nihil distinctio unde quos vitae.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Assistant Manager",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit nam consectetur itaque velit. Dolor sequi praesentium optio itaque molestias. Animi deleniti, expedita numquam consequuntur repellendus deserunt? Accusantium quo, obcaecati ad illo ipsam sequi commodi dolor! Corrupti cupiditate commodi cumque quae, delectus qui veniam dolorem, sequi minima aliquam earum enim quibusdam facilis explicabo excepturi neque reprehenderit molestias ducimus minus! Amet illum excepturi illo numquam debitis repellendus magni pariatur aliquid animi est neque et consectetur dolorum qui quo vel velit nihil voluptates nisi, ex odio? Odio nobis corporis repellendus asperiores sed officia voluptas vero porro amet laudantium quidem sequi, iure error, dolore odit? Corrupti laboriosam nesciunt ex ut consequatur impedit modi et voluptatem dignissimos ab! Qui dolorum dicta iusto voluptas velit! Autem harum deleniti labore velit, reiciendis nobis. Nisi, repellat! Minus fugit quaerat ipsam obcaecati, et in ipsum, blanditiis possimus tempora ut molestias cupiditate similique. Rerum illo voluptatibus consectetur veritatis atque molestias saepe ipsam aliquid doloremque laboriosam temporibus explicabo ullam cumque repellendus dolore tenetur, dignissimos placeat unde! Laudantium minus, voluptate provident alias aperiam dolor, iure magni eius illum beatae obcaecati impedit tenetur fugiat illo perferendis expedita vel, consectetur aliquid facere itaque suscipit. Numquam ipsum odit eius atque vitae? Molestiae, veniam. Ducimus explicabo sint quos sed architecto a libero illum ad voluptatem eaque in iure magnam, iste numquam fugiat omnis! Sint, facere ex eius maxime rem aliquid nihil doloremque porro eum possimus incidunt optio dolorem vero accusamus hic corporis! Libero labore numquam deserunt esse, quod nihil omnis excepturi culpa recusandae, ad animi quos sed. Magnam animi labore obcaecati accusantium exercitationem architecto, itaque quasi aliquid amet placeat necessitatibus nesciunt. Cumque molestiae commodi dicta, impedit temporibus et nam alias, ratione ad officia doloremque dignissimos ut eaque culpa libero minima pariatur saepe iste nihil. Similique quae ut voluptate explicabo animi fugiat ratione dignissimos neque eos.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Sales Expert",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam labore alias nihil, placeat dolorum in assumenda eveniet obcaecati facere! Dolore ut sint illo deserunt repudiandae doloremque esse repellat earum nobis impedit, vero, modi nostrum obcaecati delectus consequatur excepturi minima? Nihil in inventore rerum perferendis cumque vero suscipit deserunt ipsam repellendus aperiam est quis nulla reiciendis quos delectus totam minus error ea, ratione velit ducimus. Et nostrum nemo laudantium adipisci doloribus numquam atque quae aliquid quasi distinctio sint nihil itaque quas minima rem, vel maxime fugit, quisquam eveniet placeat obcaecati. Aperiam quo quaerat asperiores earum nihil distinctio unde quos vitae.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Junior Software Developer",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit nam consectetur itaque velit. Dolor sequi praesentium optio itaque molestias. Animi deleniti, expedita numquam consequuntur repellendus deserunt? Accusantium quo, obcaecati ad illo ipsam sequi commodi dolor! Corrupti cupiditate commodi cumque quae, delectus qui veniam dolorem, sequi minima aliquam earum enim quibusdam facilis explicabo excepturi neque reprehenderit molestias ducimus minus! Amet illum excepturi illo numquam debitis repellendus magni pariatur aliquid animi est neque et consectetur dolorum qui quo vel velit nihil voluptates nisi, ex odio? Odio nobis corporis repellendus asperiores sed officia voluptas vero porro amet laudantium quidem sequi, iure error, dolore odit? Corrupti laboriosam nesciunt ex ut consequatur impedit modi et voluptatem dignissimos ab! Qui dolorum dicta iusto voluptas velit! Autem harum deleniti labore velit, reiciendis nobis. Nisi, repellat! Minus fugit quaerat ipsam obcaecati, et in ipsum, blanditiis possimus tempora ut molestias cupiditate similique. Rerum illo voluptatibus consectetur veritatis atque molestias saepe ipsam aliquid doloremque laboriosam temporibus explicabo ullam cumque repellendus dolore tenetur, dignissimos placeat unde! Laudantium minus, voluptate provident alias aperiam dolor, iure magni eius illum beatae obcaecati impedit tenetur fugiat illo perferendis expedita vel, consectetur aliquid facere itaque suscipit. Numquam ipsum odit eius atque vitae? Molestiae, veniam. Ducimus explicabo sint quos sed architecto a libero illum ad voluptatem eaque in iure magnam, iste numquam fugiat omnis! Sint, facere ex eius maxime rem aliquid nihil doloremque porro eum possimus incidunt optio dolorem vero accusamus hic corporis! Libero labore numquam deserunt esse, quod nihil omnis excepturi culpa recusandae, ad animi quos sed. Magnam animi labore obcaecati accusantium exercitationem architecto, itaque quasi aliquid amet placeat necessitatibus nesciunt. Cumque molestiae commodi dicta, impedit temporibus et nam alias, ratione ad officia doloremque dignissimos ut eaque culpa libero minima pariatur saepe iste nihil. Similique quae ut voluptate explicabo animi fugiat ratione dignissimos neque eos.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Python Developer",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam labore alias nihil, placeat dolorum in assumenda eveniet obcaecati facere! Dolore ut sint illo deserunt repudiandae doloremque esse repellat earum nobis impedit, vero, modi nostrum obcaecati delectus consequatur excepturi minima? Nihil in inventore rerum perferendis cumque vero suscipit deserunt ipsam repellendus aperiam est quis nulla reiciendis quos delectus totam minus error ea, ratione velit ducimus. Et nostrum nemo laudantium adipisci doloribus numquam atque quae aliquid quasi distinctio sint nihil itaque quas minima rem, vel maxime fugit, quisquam eveniet placeat obcaecati. Aperiam quo quaerat asperiores earum nihil distinctio unde quos vitae.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "Assistant Professor",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam labore alias nihil, placeat dolorum in assumenda eveniet obcaecati facere! Dolore ut sint illo deserunt repudiandae doloremque esse repellat earum nobis impedit, vero, modi nostrum obcaecati delectus consequatur excepturi minima? Nihil in inventore rerum perferendis cumque vero suscipit deserunt ipsam repellendus aperiam est quis nulla reiciendis quos delectus totam minus error ea, ratione velit ducimus. Et nostrum nemo laudantium adipisci doloribus numquam atque quae aliquid quasi distinctio sint nihil itaque quas minima rem, vel maxime fugit, quisquam eveniet placeat obcaecati. Aperiam quo quaerat asperiores earum nihil distinctio unde quos vitae.",
            "imageUrl": `${job_picture}`
          },
          {
            "title": "JRF-Junior Research Fellow",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit nam consectetur itaque velit. Dolor sequi praesentium optio itaque molestias. Animi deleniti, expedita numquam consequuntur repellendus deserunt? Accusantium quo, obcaecati ad illo ipsam sequi commodi dolor! Corrupti cupiditate commodi cumque quae, delectus qui veniam dolorem, sequi minima aliquam earum enim quibusdam facilis explicabo excepturi neque reprehenderit molestias ducimus minus! Amet illum excepturi illo numquam debitis repellendus magni pariatur aliquid animi est neque et consectetur dolorum qui quo vel velit nihil voluptates nisi, ex odio? Odio nobis corporis repellendus asperiores sed officia voluptas vero porro amet laudantium quidem sequi, iure error, dolore odit? Corrupti laboriosam nesciunt ex ut consequatur impedit modi et voluptatem dignissimos ab! Qui dolorum dicta iusto voluptas velit! Autem harum deleniti labore velit, reiciendis nobis. Nisi, repellat! Minus fugit quaerat ipsam obcaecati, et in ipsum, blanditiis possimus tempora ut molestias cupiditate similique. Rerum illo voluptatibus consectetur veritatis atque molestias saepe ipsam aliquid doloremque laboriosam temporibus explicabo ullam cumque repellendus dolore tenetur, dignissimos placeat unde! Laudantium minus, voluptate provident alias aperiam dolor, iure magni eius illum beatae obcaecati impedit tenetur fugiat illo perferendis expedita vel, consectetur aliquid facere itaque suscipit. Numquam ipsum odit eius atque vitae? Molestiae, veniam. Ducimus explicabo sint quos sed architecto a libero illum ad voluptatem eaque in iure magnam, iste numquam fugiat omnis! Sint, facere ex eius maxime rem aliquid nihil doloremque porro eum possimus incidunt optio dolorem vero accusamus hic corporis! Libero labore numquam deserunt esse, quod nihil omnis excepturi culpa recusandae, ad animi quos sed. Magnam animi labore obcaecati accusantium exercitationem architecto, itaque quasi aliquid amet placeat necessitatibus nesciunt. Cumque molestiae commodi dicta, impedit temporibus et nam alias, ratione ad officia doloremque dignissimos ut eaque culpa libero minima pariatur saepe iste nihil. Similique quae ut voluptate explicabo animi fugiat ratione dignissimos neque eos.",
            "imageUrl": `${job_picture}`
          }
        ]
    })

    const navigate = useNavigate()
    return (
        <div className='w-full'>
            <div className='w-1/2 py-10 mx-auto'>
                <h1 className='text-3xl font-semibold'>My Posts</h1>
                <div className=''>
                    {allPosts.All_post_detsils.map((post, index) => {
                        return (
                            <div key={index} className='px-5 py-6 my-14 border border-gray-400 rounded-lg'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <img src={post.imageUrl} className='h-16 w-16' />
                                        <h2 className='font-semibold text-xl'>{post.title}</h2>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <button 
                                            onClick={()=>{navigate(`/myposts/appliedUsers`)}}
                                            className='bg-black text-white hover:bg-[#00a264] px-3 py-1 rounded-md transition-all duration-300'>
                                            Applied Users
                                        </button>
                                        <button onClick={()=>{navigate(`/myposts/editPost/:postId`)}}>
                                            <FaRegEdit color='green' size={28} />
                                        </button>
                                        <button><MdDeleteOutline color='red' size={28}/></button>
                                    </div>
                                </div>
                                <div className='mt-5 mx-auto w-[95%]'>
                                    <h2 className='font-semibold text-lg'>Job Description</h2>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyPosts