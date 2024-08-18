import React, { useState } from 'react'
import job_picture from '../assets/images/job-search.png'

const Jobs = () => {

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

  const [currPost, setCurrPost] = useState(allPosts.All_post_detsils[0])

  return (
    <>
      <div className=' flex justify-center gap-x-6 py-10'>
        <div className=' w-1/4 max-h-[80vh] overflow-y-scroll pr-1'>
          {allPosts.All_post_detsils.map((post, i) => {
            return (
              <div onClick={()=>{setCurrPost(post)}} key={i} className= {`${post==currPost?" border-[#ededed] rounded-lg":" border-white border-b-[#ededed]"} p-4 mb-1 cursor-pointer border-2 hover:bg-[#f4f4f4]`} >
                <div className=' flex items-center gap-x-3 mb-2'>
                  <img className=' w-8 rounded-full' src={post.imageUrl} alt="" />
                  <div className=' text-lg font-medium'>{post.title}</div>
                </div>
                <div>{post.description.split(" ").slice(0, 10).join(" ")}...</div>
              </div>
            )
          })}
        </div>

        <div className=' w-1/2 max-h-[80vh] flex items-center gap-x-6 p-8 border-2 border-b-[#ededed] rounded-lg'>
          <img className=' size-12 rounded-full self-start' src={currPost.imageUrl} alt="" />
          <div className=' self-start'>
            <div className=' flex items-center justify-between mb-5'>
              <div className=' text-3xl font-semibold'>{currPost.title}</div>
              <button className=' bg-[#4cd681] hover:bg-[#00a264] text-black hover:text-white font-medium py-2 px-4 rounded-md'>Apply</button>
            </div>
            <div className=' overflow-y-auto max-h-[60vh]'>
              <div className=' text-lg font-semibold mb-2'>Job Description</div>
              <div>{currPost.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs
