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

           <p data-aos="zoom-in" data-aos-duration="2000" className='togePera  py-2'>This is my best project share with you</p>
            <div className="row font-serif">
                 
                  
                   {/* one  */}
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={projectImg} alt="image" /></div>
                    <div className='p-4'>
                    <small className='uiUX'>FRONTEND DESIGN / BACKEND (React.js)</small>
                    <h4 className='product'>Aytor e-commerce website</h4>
                    <p className='portDami'>Shop top-quality products with ease – fashion, tech, home & more. Fast, secure, and reliable.</p>
                     <a target='none' className='cv ' href="https://aytorw-commerce.netlify.app/"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> View live
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span></a>
                  
                    
                    </div>
                  </div>
                </div>
                  
                  {/* two  */}
                <div className="col-lg-4">
                <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid' src={projectImg2} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>FRONTEND DESIGN (Next.js)</small>
                    <h4 className='product'>NFT Marketplace</h4>
                    <p className='portDami'>Discover, buy, and sell unique digital art and NFTs. Secure, fast, and made for creators.</p>

                     <a target='none' className='cv' href="https://nft-marketplace-next-rho.vercel.app"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> View live 
                     <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span>
                     </span></a>
                    </div>
                  </div>
                </div>

                {/* three  */}
                <div className="col-lg-4">
                  <div className='portfolioCard MyImg mt-4'>
                    <div className='d-flex justify-center'><img className='img-fluid ' src={projectImg3} alt="image" /></div>
                    <div className='p-3'>
                    <small className='uiUX'>FRONTEND DESIGN / BACKEND (React.js)</small>
                    <h4 className='product'>Doctor Appointment</h4>
                    <p className='portDami'>Book doctor appointments online with ease. Fast, secure, and trusted healthcare at your fingertips.</p>
                    <a target='none' className='cv' href="https://doctor-frontend-eta.vercel.app"><span className='d-flex align-items-center case transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg hover:text-white'> View live 
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
