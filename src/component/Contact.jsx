import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
export const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [location,setLocation] = useState("")
  const [message,setMessage] = useState("")
  const [subject,setSubject] = useState("")

  const handleName =(e)=>{
    setName(e.target.value)
  }
 const handleEmail =(e)=>{
  setEmail(e.target.value)
 }
 const handleLocation =(e)=>{
  setLocation(e.target.value)
 }
 const handleMessage =(e)=>{
  setMessage(e.target.value)
 }

 const handleSubject =(e)=>{
  setSubject(e.target.value)
 }

 const handleSubmit =()=>{
  console.log(name,email,location,subject,message)
  axios.post('http://localhost:3000/sendEmail',{name,email,location,subject,message}).then(res=>{
    console.log(res);
    setName('')
    setEmail('')
    setLocation('')
    setMessage('')
    setSubject('')
    toast.success('Successfully Send', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
    
  }).catch(err=>{
    console.log(err);
    toast.error('Please try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  })
 }
 
 
  return (
    <>
     <section id='contact' className='  h-[600px] aboutSectRes'>
        <div className='position-relative'>
        <div id='About' className="container position-absolute aboutSha p-5 shadow-lg  rounded-md">
            <div className="row ">
                <div className="col-lg-6">
                 <h4 className='ConHead'>Let’s discuss your Project</h4>
                 <p className='ConDami '>Follow this for direct contact and call below number for direct voice call</p>

                 <div data-aos="zoom-in" data-aos-duration="1000" className='d-flex mt-4 ContactOver  MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF] shadow-md  d-inline-block'><IoLocationOutline /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Address:</small>
                    <p className='addressMain'>Bangladesh Chattrogram</p>
                    </div>
                 </div>
                 
                 <div data-aos="zoom-in" data-aos-duration="1500" className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF] shadow-md   d-inline-block'><MdOutlineEmail /></span></div>
                  <div className='ps-2'>
                    <small className='address'>My Email:</small>
                    <a target='none' className='cv cursor-pointer'  href="mailto:mdshahadatalam25@gmail.com"> <p className='addressMain'>mdshahadatalam25@gmail.com</p></a> 
                    </div>
                 </div>

                 <div data-aos="zoom-in" data-aos-duration="2000" className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF] shadow-md  d-inline-block'><LuPhoneCall /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Call Me Now:</small>
                   <a target='none' className='cv cursor-pointer' href="tel:01917380230"> <p className='addressMain'>01917380230</p></a>
                    </div>
                 </div>

                 <div className='mt-7 d-flex'>
                  <div data-aos="zoom-in" data-aos-duration="1000"> <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaFacebookF /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="1500"> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaInstagram /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="2000"> <a target='none' href="https://github.com/mdshahadatalam"><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaGithubAlt /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="2500"> <a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326 "><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaLinkedinIn /></span></a> </div>




                </div>

                
                </div>

                <div className="col-lg-6 font-serif">
                  <p className='ConDami'>To contact me or want to talk about the project, enter your information in the input field below</p>
                 <div className='mt-4'>
                 <div className='mt-3'>
                  <label className='label' htmlFor="name">Name*</label> <br />
                  <input required onChange={handleName} value={name} className='inP' type="text" name="name" id="name"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="email">Email*</label> <br />
                  <input required onChange={handleEmail} value={email} className='inP' type="email" name="email" id="email"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Location">Location*</label> <br />
                  <input onChange={handleLocation} value={location} className='inP' type="text" name="Location" id="Location"  />
                  </div>

                  <div className='mt-3'>
                  <label required className='label' htmlFor="Subject">Subject*</label> <br />
                  <input  onChange={handleSubject} value={subject} className='inP' type="text" name="Subject" id="Subject"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Message">Message*</label> <br />
                  <input onChange={handleMessage} value={message} className='inP' type="text" name="Message" id="Message"  />
                  </div>
                 </div>
                  
                  <div className='mt-3'> 
                  <button onClick={handleSubmit} className='submit transition text-white duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg'>Submit <VscSend /> </button>
                  </div>

                 </div>

            </div>
        </div>
        </div>
    </section>


    {/* small device  */}

    <section id='contactNav' className='py-5 d-lg-none aboutDouble'>
        <div>
        <div id='About' className="container  aboutSha p-5 shadow-lg  rounded-md">
            <div className="row">
            <div className="col-lg-6">
                 <h4 className='ConHead'>Let’s discuss your Project</h4>
                 <p className='ConDami '>Follow this for direct contact and call below number for direct voice call.</p>

                 <div data-aos="zoom-in" data-aos-duration="1000" className='d-flex mt-4 ContactOver  MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><IoLocationOutline /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Address:</small>
                    <p className='addressMain'>Bangladesh Chattrogram</p>
                    </div>
                 </div>
                 
                 <div data-aos="zoom-in" data-aos-duration="1500" className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><MdOutlineEmail /></span></div>
                  <div className='ps-2'>
                    <small className='address'>My Email:</small>
                    <a target='none' className='cv cursor-pointer' href="mailto:mdshahadatalam25@gmail.com"><p className='addressMain'>mdshahadatalam25@gmail.com</p></a>
                    </div>
                 </div>

                 <div data-aos="zoom-in" data-aos-duration="2000" className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><LuPhoneCall /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Call Me Now:</small>
                   <a target='none' className='cv cursor-pointer' href="tel:01917380230"> <p className='addressMain'>01917380230</p></a>
                    </div>
                 </div>

                 <div className='mt-7 d-flex'>
                  <div data-aos="zoom-in" data-aos-duration="1000"><a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaFacebookF /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="1500"> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaInstagram /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="2000"> <a target='none' href="https://github.com/mdshahadatalam"><span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaGithubAlt /></span></a> </div>

                  <div data-aos="zoom-in" data-aos-duration="2500"><a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326"> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaLinkedinIn /></span></a> </div>




                </div>
                </div>


                <div className="col-lg-6">
                <div className="col-lg-6 font-serif">
                  <p className='ConDami pt-4'>To contact me or want to talk about the project, enter your information in the input field below</p>
                 <div className='mt-4'>
                 <div className='mt-3'>
                  <label className='label' htmlFor="name">Name*</label> <br />
                  <input required onChange={handleName} value={name} className='inP' type="text" name="name" id="name"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="email">Email*</label> <br />
                  <input required onChange={handleEmail} value={email} className='inP' type="email" name="email" id="email"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Location">Location*</label> <br />
                  <input  onChange={handleLocation} value={location} className='inP' type="text" name="Location" id="Location"  />
                  </div>

                  <div className='mt-3'>
                  <label required className='label' htmlFor="Subject">Subject*</label> <br />
                  <input onChange={handleSubject} value={subject}  className='inP' type="text" name="Subject" id="Subject"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Message">Message*</label> <br />
                  <input  onChange={handleMessage} value={message} className='inP' type="text" name="Message" id="Message"  />
                  </div>
                 </div>
                  
                  <div className='mt-3'> 
                  <button  onClick={handleSubmit} className='submit transition duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg'>Submit <VscSend /> </button>
                  </div>

                 </div>
    
                                  
             </div>
            </div>
        </div>
        </div>
    </section>
  <ToastContainer/>
    </>
  )
}
