import React from 'react'

const AppliedUsers = () => {

  const appliedUsers = [
    {
      "_id": "6694d7fde6aa4b9d7c7470b9",
      "firstName": "Dibakar",
      "lastName": "Ghosh",
      "email": "ghoshdibakar81@gmail.com",
      "password": "$2b$10$IEx2OG9xXI/6uLuYhAVkLeDsuwVWC9GFKNAPs0QcDrh/AHZW5vj96",
      "accountType": "employee",
      "image": "https://api.dicebear.com/5.x/initials/svg?seed=Dibakar Ghosh",
      "additionalDetails": {
          "_id": "6694d7fde6aa4b9d7c7470b7",
          "DOB": "26/06/2003",
          "gender": "Male",
          "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium dicta ullam alias maiores unde perspiciatis eum possimus labore, quaerat nam corrupti molestiae, quas ipsum ex numquam cupiditate blanditiis repudiandae. Sequi minus consectetur aperiam nobis commodi quae iusto eum provident in hic error atque laboriosam deserunt earum, asperiores dolores vel amet eos labore sed! Necessitatibus, asperiores voluptas. Eum illum, impedit facilis modi molestiae quam tempore vel maiores eligendi praesentium alias, officia vero cum sit. Ab omnis nobis aliquid, sed, distinctio alias reiciendis debitis facilis pariatur dolore id veritatis corporis explicabo itaque earum voluptate, doloribus soluta error deleniti illum laboriosam? Unde!",
          "contact": "9874563215",
          "__v": 0
        },
      "posts": [],
      "apply": [],
      "__v": 0,
      "resume": "https://res.cloudinary.com/dpsb0ysde/image/upload/v1721031320/profile_resume/nzift5zebkkluxrgpu4i.pdf"
    },
    {
      "_id": "6694d7fde6aa4b9d7c7470b9",
      "firstName": "Sarbajit",
      "lastName": "Chaki",
      "email": "chakisarbajit234@gmail.com",
      "password": "$2b$10$IEx2OG9xXI/6uLuYhAVkLeDsuwVWC9GFKNAPs0QcDrh/AHZW5vj96",
      "accountType": "employee",
      "image": "https://api.dicebear.com/5.x/initials/svg?seed=Sarbajit Chaki",
      "additionalDetails": {
          "_id": "6694d7fde6aa4b9d7c7470b7",
          "DOB": "14/05/2004",
          "gender": "Male",
          "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium dicta ullam alias maiores unde perspiciatis eum possimus labore, quaerat nam corrupti molestiae, quas ipsum ex numquam cupiditate blanditiis repudiandae. Sequi minus consectetur aperiam nobis commodi quae iusto eum provident in hic error atque laboriosam deserunt earum, asperiores dolores vel amet eos labore sed! Necessitatibus, asperiores voluptas. Eum illum, impedit facilis modi molestiae quam tempore vel maiores eligendi praesentium alias, officia vero cum sit. Ab omnis nobis aliquid, sed, distinctio alias reiciendis debitis facilis pariatur dolore id veritatis corporis explicabo itaque earum voluptate, doloribus soluta error deleniti illum laboriosam? Unde!",
          "contact": "9874563215",
          "__v": 0
      },
      "posts": [],
      "apply": [],
      "__v": 0,
      "resume": "https://res.cloudinary.com/dpsb0ysde/image/upload/v1721031320/profile_resume/nzift5zebkkluxrgpu4i.pdf"
  },
  ]
  return (
    <div>
      {
        appliedUsers.map((user,index) => (
          <div key={index} className='mx-auto my-8 w-1/2 border border-gray-400 rounded-lg py-6'>
            <div className='flex flex-col items-center'>
              <img src={user.image} alt="user" className='w-20 h-20 rounded-full mx-auto'/>
              <p className='font-semibold text-xl mt-2'>{user.firstName + " " + user.lastName}</p>
              <p className='italic'>{user.email}</p>
              {
                user.additionalDetails.contact && 
                <p className='font-semibold mt-1'>Contact Number : <span> </span>
                <span className='font-normal'>{user.additionalDetails.contact}</span></p>
              }
              {
                user.additionalDetails.gender && 
                <p className='font-semibold mt-1'>Gender : <span> </span> 
                <span className='font-normal'>{user.additionalDetails.gender}</span></p>
              }
              {
                user.additionalDetails.DOB && 
                <p className='font-semibold mt-1'>Date of Birth :<span> </span> 
                <span className='font-normal'>{user.additionalDetails.DOB}</span></p>
              }
              <a href={`${user.resume}`} target='_blank' className='bg-black mt-4 px-4 py-2 text-white hover:bg-[#00a264] rounded-md transition-all duration-300'>View Resume</a>
            </div>
            <div className='w-10/12 mx-auto'>
              <div className='bg-gray-300 h-[1px] my-6'></div>
              <p className='font-semibold text-lg'>About</p>
              <p>{user.additionalDetails.about}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AppliedUsers