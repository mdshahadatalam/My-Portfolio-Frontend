import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export const Contact = () => {
  return (
    <>
     <section id='contact' className='  h-[600px] aboutSectRes'>
        <div className='position-relative'>
        <div id='About' className="container position-absolute aboutSha p-5 shadow-lg  rounded-md">
            <div className="row ">
                <div className="col-lg-6">
                 <h4 className='ConHead'>Let’s discuss your Project</h4>
                 <p className='ConDami '>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>

                 <div className='d-flex mt-4 ContactOver  MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><IoLocationOutline /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Address:</small>
                    <p className='addressMain'>Bangladesh Chattrogram</p>
                    </div>
                 </div>
                 
                 <div className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><MdOutlineEmail /></span></div>
                  <div className='ps-2'>
                    <small className='address'>My Email:</small>
                    <p className='addressMain'>mdshahadatalam25@gmail.com</p>
                    </div>
                 </div>

                 <div className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><LuPhoneCall /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Call Me Now:</small>
                    <p className='addressMain'>01917380230</p>
                    </div>
                 </div>

                 <div className='mt-7 d-flex'>
                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaFacebookF /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaInstagram /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaGithubAlt /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white'> <FaLinkedinIn /></span></div>




                </div>

                
                </div>

                <div className="col-lg-6 font-serif">
                  <p className='ConDami'>There are many variations of passages of Lorem Ipsu available,
                  but the majority have suffered alte.</p>
                 <div className='mt-4'>
                 <div className='mt-3'>
                  <label className='label' htmlFor="name">Name*</label> <br />
                  <input className='inP' type="text" name="name" id="name"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="email">Email*</label> <br />
                  <input className='inP' type="email" name="email" id="email"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Location">Location*</label> <br />
                  <input className='inP' type="text" name="Location" id="Location"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Subject">Subject*</label> <br />
                  <input className='inP' type="text" name="Subject" id="Subject"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Message">Message*</label> <br />
                  <input className='inP' type="text" name="Message" id="Message"  />
                  </div>
                 </div>
                  
                  <div className='mt-3'> 
                  <button className='submit transition text-white duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg'>Submit <VscSend /> </button>
                  </div>

                 </div>

            </div>
        </div>
        </div>
    </section>

    <section id='contactNav' className='py-5 d-lg-none aboutDouble'>
        <div>
        <div id='About' className="container  aboutSha p-5 shadow-lg  rounded-md">
            <div className="row">
            <div className="col-lg-6">
                 <h4 className='ConHead'>Let’s discuss your Project</h4>
                 <p className='ConDami '>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>

                 <div className='d-flex mt-4 ContactOver  MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><IoLocationOutline /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Address:</small>
                    <p className='addressMain'>Bangladesh Chattrogram</p>
                    </div>
                 </div>
                 
                 <div className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><MdOutlineEmail /></span></div>
                  <div className='ps-2'>
                    <small className='address'>My Email:</small>
                    <p className='addressMain'>mdshahadatalam25@gmail.com</p>
                    </div>
                 </div>

                 <div className='d-flex mt-4 ContactOver MyImg'>
                  <div><span className=' d-flex justify-center align-items-center text-xl w-[48px] h-[48px] iconHo rounded-sm p-[12px] text-[#A53DFF] bg-[#EDD8FF]  d-inline-block'><LuPhoneCall /></span></div>
                  <div className='ps-2'>
                    <small className='address'>Call Me Now:</small>
                    <p className='addressMain'>01917380230</p>
                    </div>
                 </div>

                 <div className='mt-7 d-flex'>
                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaFacebookF /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaInstagram /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaGithubAlt /></span></div>

                  <div> <span className='w-[48px] MyImg h-[48px] d-inline-block rounded-md shadow-md bg-[#EDD8FF] d-flex justify-center align-items-center ms-2 text-[#af3dff] hover:bg-[#af3dff] hover:text-white'> <FaLinkedinIn /></span></div>




                </div>
                </div>


                <div className="col-lg-6">
                <div className="col-lg-6 font-serif">
                  <p className='ConDami pt-4'>There are many variations of passages of Lorem Ipsu available,
                  but the majority have suffered alte.</p>
                 <div className='mt-4'>
                 <div className='mt-3'>
                  <label className='label' htmlFor="name">Name*</label> <br />
                  <input className='inP' type="text" name="name" id="name"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="email">Email*</label> <br />
                  <input className='inP' type="email" name="email" id="email"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Location">Location*</label> <br />
                  <input className='inP' type="text" name="Location" id="Location"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Subject">Subject*</label> <br />
                  <input className='inP' type="text" name="Subject" id="Subject"  />
                  </div>

                  <div className='mt-3'>
                  <label className='label' htmlFor="Message">Message*</label> <br />
                  <input className='inP' type="text" name="Message" id="Message"  />
                  </div>
                 </div>
                  
                  <div className='mt-3'> 
                  <button className='submit transition duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg'>Submit <VscSend /> </button>
                  </div>

                 </div>
    
                                  
             </div>
            </div>
        </div>
        </div>
    </section>

    </>
  )
}
