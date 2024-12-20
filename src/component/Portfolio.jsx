import React from 'react'
import port from '../assets/images/portfolio/port.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import projectImg from '../assets/images/projectImg/Aytor.png'
import projectImg2 from '../assets/images/projectImg/node.png'
import projectImg3 from '../assets/images/projectImg/Screenshot (186).png'

export const Portfolio = () => {
  return (
    <>
    <section  id='portfolio' className='py-5 '>
        <div className="container">
        <h4 data-aos="zoom-in" data-aos-duration="2000" className='togeHead text-black py-2'>Portfolio</h4>

           <p data-aos="zoom-in" data-aos-duration="2000" className='togePera  py-2'>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.</p>
            <div className="row font-serif">
                <div className="col-lg-4">
                  <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={projectImg3} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>FRONTEND DESIGN</small>
                    <h4 className='product'>Cooking with coke</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                    <a target='none' className='cv' href="https://cooking-with-coke.vercel.app/"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span></a>

                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={projectImg} alt="image" /></div>
                    <div className='p-4'>
                    <small className='uiUX'>FRONTEND DESIGN</small>
                    <h4 className='product'>Aytor e-commerce website</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                     <a target='none' className='cv ' href="https://aytorw-commerce.netlify.app/"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span></a>
                  
                    
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid' src={projectImg2} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>FRONTEND DESIGN</small>
                    <h4 className='product'>Node book save your information</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <a target='none' className='cv' href="https://note-book-umber.vercel.app/"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span></a>
                    </div>
                  </div>
                </div>
            </div>
           
            
            

            <a className='cv' target='none' href="https://github.com/mdshahadatalam"> <div className='d-flex justify-center mt-5'>
                <button className='morePro transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg'>More Project</button>
            </div></a>
            
           
        </div>
    </section>
    </>
  )
}
