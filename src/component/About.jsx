import React from 'react'
import myImg from '../assets/images/MyImages/MyImg2.jpg'
import { BsDownload } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGit } from "react-icons/fa";

export const About = () => {
  return (
    <>
    <section id='About' className='  h-[490px] aboutSectRes'>
        <div className='position-relative'>
        <div id='About' className="container position-absolute aboutSha py-5 shadow-lg  rounded-md">
            <div className="row justify-center align-items-center">
                <div className="col-lg-6  position-relative ">
                  <div data-aos="zoom-in" data-aos-duration="2000" className='d-flex justify-center'>
                  <img  src={myImg} className='img-fluid bg-[#FFFFFF] my-4  shadow-md rounded-lg MyImg' alt="images" />
                </div>
                  
                  <div data-aos="zoom-in" data-aos-duration="2000" className='possi d-flex bg-white shadow-md w-[38%] h-[60px] justify-center align-items-center rounded-md cursor-pointer position-absolute top-[380px] right-[200px] '>

                     <div> <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"> <span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></a> </div>


                     <div> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></a></div>

                     <div><a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326"><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></a></div>

                     <div> <a target='none' href="https://github.com/mdshahadatalam"> <span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></a> </div>
                  </div>

                </div>
                <div className="col-lg-6">
                    <h4 data-aos="zoom-in" data-aos-duration="2000" className='profess mt-3'>I am Professional User Experience Designer</h4>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='designDev text-justify'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences. <br/>
                    I design and develop services for customers specializing creating stylish, modern websites, web services.</p>

                    <div className='gap-x-3 d-flex buttonRes'>
                   <a target='none' href="https://github.com/mdshahadatalam">
                   <button data-aos="zoom-in" data-aos-duration="2000" className='aboutBtn w-[132px] h-[48px] font-serif tracking-wide bg-[#A53DFF] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-lg'>
                        My Project
                         </button>
                   </a>
                   <a className='cv' target='none' href="https://docs.google.com/document/d/1A75GwszbWGifLIC000LBFN5zf9H8qK8n5ovsdOkgBkU/edit?usp=sharing">
                   <button data-aos="zoom-in" data-aos-duration="2500"  className=' d-flex justify-center align-items-center aboutBtn2 w-[190px] h-[48px] font-serif tracking-wide bg-[#ffffff] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'> <span className='mx-2'><BsDownload /> </span> Download CV</button></a>
                      
                    </div>


                    {/* small device er jonno  */}

                      <div className='IConREs'>
                        <div className=' possRes d-lg-none d-flex bg-white shadow-md w-[42%] h-[60px] justify-center align-items-center rounded-md cursor-pointer'>

                     <div> <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"> <span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></a> </div>

                     <div> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="> <span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></a> </div>

                     <div> <a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326"> <span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></a> </div>

                     <div> <a target='none' href="https://github.com/mdshahadatalam"> <span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></a> </div>
                  </div>
                      </div>
                    
                </div>
            </div>
        </div>
        </div>
    </section>

    <section id='AboutNav' className='py-5 d-lg-none aboutDouble'>
        <div>
        <div id='About' className="container  aboutSha py-5 shadow-lg  rounded-md">
            <div className="row justify-center align-items-center">
                <div className="col-lg-6  position-relative ">
                  <div data-aos="zoom-in" data-aos-duration="2000" className='d-flex justify-center'>
                  <img  src={myImg} className='img-fluid bg-[#FFFFFF] my-4  shadow-md rounded-lg MyImg' alt="images" />
                </div>
                  
                  <div data-aos="zoom-in" data-aos-duration="2000" className='possi d-flex bg-white shadow-md w-[38%] h-[60px] justify-center align-items-center rounded-md cursor-pointer position-absolute top-[380px] right-[200px] '>

                     <div> <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></a> </div>

                     <div> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></a> </div>

                     <div> <a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326"><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></a> </div>

                     <div> <a target='none' href="https://github.com/mdshahadatalam"><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></a> </div>
                  </div>

                </div>
                <div className="col-lg-6">
                    <h4 data-aos="zoom-in" data-aos-duration="2000" className='profess mt-3'>I am Professional User Experience Designer</h4>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='designDev text-justify'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences. <br/>
                    I design and develop services for customers specializing creating stylish, modern websites, web services.</p>

                    <div className='gap-x-3 d-flex buttonRes'>
                    <a target='none' href="https://github.com/mdshahadatalam">
                    <button data-aos="zoom-in" data-aos-duration="2000" className='aboutBtn w-[132px] h-[48px] font-serif tracking-wide bg-[#A53DFF] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-lg'>
                        My Project
                         </button>
                    </a>

                    <a target='none' className='cv' href="https://docs.google.com/document/d/1A75GwszbWGifLIC000LBFN5zf9H8qK8n5ovsdOkgBkU/edit?usp=sharing">
                    <button data-aos="zoom-in" data-aos-duration="2500"  className=' d-flex justify-center align-items-center aboutBtn2 w-[190px] h-[48px] font-serif tracking-wide bg-[#ffffff] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'> <span className='mx-2'><BsDownload /> </span> Download CV</button></a>
                       
                    </div>


                    {/* small device er jonno  */}

                      <div data-aos="zoom-in" data-aos-duration="2000" className='IConREs'>
                        <div className=' possRes d-lg-none d-flex bg-white shadow-md w-[42%] h-[60px] justify-center align-items-center rounded-md cursor-pointer'>

                     <div> <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380"><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></a> </div>

                     <div> <a target='none' href="https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ=="><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span> </a></div>

                     <div> <a target='none' href="http://www.linkedin.com/in/md-shahadat-alam-2a2914326"><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></a> </div>

                     <div><a target='none' href="https://github.com/mdshahadatalam"><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></a></div>
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


