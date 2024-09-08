import React, { useEffect, useState } from 'react'

const Jobs = () => {

  const [allPosts, setAllPosts] = useState({})

  const [currPost, setCurrPost] = useState()

  useEffect(() => {
    async function getPosts() {
      let res = await fetch("http://localhost:3000/post/getAllPost", {
        method: "GET",
        credentials: 'include',
      });

      res = await res.json();
      setAllPosts(res);
      setCurrPost(res.All_post_details[0])
    }
    getPosts();
  },[])

  return (
    <>
      <div className=' flex justify-center gap-x-6 py-10'>
        <div className=' w-1/4 max-h-[80vh] overflow-y-scroll pr-1'>
          {allPosts.All_post_details?.map((post, i) => {
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
          <img className=' size-12 rounded-full self-start' src={currPost?.imageUrl} alt="" />
          <div className=' self-start'>
            <div className=' flex items-center justify-between mb-5'>
              <div className=' text-3xl font-semibold'>{currPost?.title}</div>
              <button className=' bg-[#4cd681] hover:bg-[#00a264] text-black hover:text-white font-medium py-2 px-4 rounded-md'>Apply</button>
            </div>
            <div className=' overflow-y-auto max-h-[60vh]'>
              <div className=' text-lg font-semibold mb-2'>Job Description</div>
              <div>{currPost?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs
