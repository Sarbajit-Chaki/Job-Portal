import React from 'react'
import profile_image from '../assets/images/profile.png'
import Footer from './Footer'

const MyProfile = () => {
  const profile_data = {
    "success": true,
    "message": "User details get succesfully",
    "user_details": {
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
    }
}


  return (
    <>
      <div className=' w-1/2 border-2 border-b-[#ededed] rounded-lg my-8 mx-auto '>
        <div className="box1 border-b-2 border-b-[#ededed]">
          <div className=' flex justify-between mt-6 mx-8 mb-0 '>
            <div className=' flex flex-col '>
              <div className=' text-3xl font-medium mb-3'>Profile</div>
              <div className=' font-medium'>Build a better Glassdoor experience </div>
              <div className=' font-medium'>by managing your employment information.</div>
            </div>
            <div>
              <img className=' w-64' src={profile_image} alt="" />
            </div>
          </div>
        </div>

        <div className="box2 border-b-2 border-b-[#ededed]">
          <div className=' flex flex-col mx-8 my-6  '>
            <div className=' flex items-center gap-x-3'>
              <div className=' text-2xl font-medium '>My information</div>
              <span className="material-symbols-outlined rounded-xl p-1 cursor-pointer hover:bg-[#f2f4f5]">edit</span>
            </div>
            <div className=' font-normal mb-3 '>Updating your information will offer you the most relevant jobs</div>
            <div className=' flex items-center gap-x-5'>
              <img className=' self-start w-32 rounded-full' src={profile_data.user_details.image}  alt="" />
              <div className='profile-info flex flex-col gap-y-4 '>
                <div>
                  <div className=' text-xs '>Full name*</div>
                  <div className=' text-xl'>{profile_data.user_details.firstName+" "+profile_data.user_details.lastName}</div>
                </div>
                <div>
                  <div className=' text-xs '>Employement status*</div>
                  <div className=' text-xl'>{profile_data.user_details.accountType[0].toUpperCase()+profile_data.user_details.accountType.slice(1)}</div>
                </div>
                <div>
                  <div className=' text-xs '>About*</div>
                  <div className=' text-xl'>{profile_data.user_details.additionalDetails.about}</div>
                </div>
                <div>
                  <div className=' text-xs '>Email address*</div>
                  <div className=' text-xl'>{profile_data.user_details.email}</div>
                </div>
                <div>
                  <div className=' text-xs '>Contact*</div>
                  <div className=' text-xl'>{profile_data.user_details.additionalDetails.contact}</div>
                </div>
                <div>
                  <div className=' text-xs '>Gender*</div>
                  <div className=' text-xl'>{profile_data.user_details.additionalDetails.gender}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box3">
          <div className=' flex flex-col mt-6 mx-8 mb-0 '>
            <div className=' text-2xl font-medium mb-3'>CV</div>
            <div className=' font-normal mb-3'>After you upload a CV, it will be used to pre-fill job applications that you submit via Easy Apply. You can also make your CV visible or not visible to employers that are currently hiring.</div>
            <div onClick={() => {window.open(`${profile_data.user_details.resume}`)}} className=' flex items-center gap-x-2 mb-3'>
              <span className="material-symbols-outlined">description</span>
              <div className=' text-xl font-medium hover:underline cursor-pointer'>{profile_data.user_details.firstName+"_"+profile_data.user_details.lastName+"_"+"resume"}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default MyProfile
