import React from 'react'
import myImg from '../assets/images/MyImages/MyImg.png'
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
                  <div className='d-flex justify-center'>
                  <img  src={myImg} className='img-fluid bg-[#FFFFFF] my-4  shadow-md rounded-lg MyImg' alt="images" />
                </div>
                  
                  <div className='possi d-flex bg-white shadow-md w-[38%] h-[60px] justify-center align-items-center rounded-md cursor-pointer position-absolute top-[380px] right-[200px] '>

                     <div><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></div>
                  </div>

                </div>
                <div className="col-lg-6">
                    <h4 className='profess mt-3'>I am Professional User Experience Designer</h4>
                    <p className='designDev text-justify'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences. <br/>
                    I design and develop services for customers specializing creating stylish, modern websites, web services.</p>

                    <div className='gap-x-3 d-flex buttonRes'>
                    <button className='aboutBtn w-[132px] h-[48px] font-serif tracking-wide bg-[#A53DFF] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-lg'>
                        My Project
                         </button>
                        <button  className=' d-flex justify-center align-items-center aboutBtn2 w-[190px] h-[48px] font-serif tracking-wide bg-[#ffffff] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'> <span className='mx-2'><BsDownload /> </span> Download CV</button>
                    </div>


                    {/* small device er jonno  */}

                      <div className='IConREs'>
                        <div className=' possRes d-lg-none d-flex bg-white shadow-md w-[42%] h-[60px] justify-center align-items-center rounded-md cursor-pointer'>

                     <div><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></div>
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
                  <div className='d-flex justify-center'>
                  <img  src={myImg} className='img-fluid bg-[#FFFFFF] my-4  shadow-md rounded-lg MyImg' alt="images" />
                </div>
                  
                  <div className='possi d-flex bg-white shadow-md w-[38%] h-[60px] justify-center align-items-center rounded-md cursor-pointer position-absolute top-[380px] right-[200px] '>

                     <div><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></div>
                  </div>

                </div>
                <div className="col-lg-6">
                    <h4 className='profess mt-3'>I am Professional User Experience Designer</h4>
                    <p className='designDev text-justify'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences. <br/>
                    I design and develop services for customers specializing creating stylish, modern websites, web services.</p>

                    <div className='gap-x-3 d-flex buttonRes'>
                    <button className='aboutBtn w-[132px] h-[48px] font-serif tracking-wide bg-[#A53DFF] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-lg'>
                        My Project
                         </button>
                        <button  className=' d-flex justify-center align-items-center aboutBtn2 w-[190px] h-[48px] font-serif tracking-wide bg-[#ffffff] rounded-sm transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'> <span className='mx-2'><BsDownload /> </span> Download CV</button>
                    </div>


                    {/* small device er jonno  */}

                      <div className='IConREs'>
                        <div className=' possRes d-lg-none d-flex bg-white shadow-md w-[42%] h-[60px] justify-center align-items-center rounded-md cursor-pointer'>

                     <div><span className=' text-xl w-[48px] h-[45px] text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2]  hover:scale-105 hover:text-white hover:shadow-lg'><RiFacebookFill /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaInstagram /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px] 
                      text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><GrLinkedinOption /></span></div>

                     <div><span className='text-xl w-[48px] h-[45px]  text-[#A53DFF] d-inline-block rounded-md justify-center align-items-center d-flex contactIcon transition-transform duration-300 ease-in-out hover:bg-[#8A2BE2] hover:scale-105 hover:text-white hover:shadow-l'><FaGit /></span></div>
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


