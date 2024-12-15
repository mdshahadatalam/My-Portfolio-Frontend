import React from 'react'
import port from '../assets/images/portfolio/port.png'
import { IoIosArrowRoundForward } from "react-icons/io";

export const Portfolio = () => {
  return (
    <>
    <section  id='portfolio' className='py-5 '>
        <div className="container">
        <h4 className='togeHead text-black py-2'>Portfolio</h4>

           <p className='togePera  py-2'>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.</p>
            <div className="row font-serif">
                <div className="col-lg-4">
                  <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
            </div>
           
            <div className="row font-serif">
                <div className="col-lg-4">
                  <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid' src={port} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>UI-UX DESIGN</small>
                    <h4 className='product'>Product Admin Dashboard</h4>
                    <p className='portDami'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>

                     <span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> Case Study 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span>
                    </div>
                  </div>
                </div>
            </div>

            <div className='d-flex justify-center mt-5'>
                <button className='morePro transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg'>More Project</button>
            </div>
           
        </div>
    </section>
    </>
  )
}
