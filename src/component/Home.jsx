import React, { useEffect } from 'react'
import myImg from '../assets/images/MyImages/MyImg2.jpg'
import animation from '../../public/animation/animation.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react';

export const Home = () => {
  useEffect( ()=>{
    Aos.init();
  })

  return (
  <>
  <section id="Home" className=" pt-4 bg-white">
  <div className="container">
    <div className="row align-items-center">
      {/* Animation first on small devices, last on large */}
      <div className="col-lg-6 col-md-12 d-flex justify-center order-1 order-lg-2 mb-4 mb-lg-0">
        {/* <img src={animation} className='img-fluid shadow-md rounded-lg MyImg' alt="Md Shahadat Alam" /> */}
        <div className="w-100 d-flex justify-content-center">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>

      {/* Text Content */}
      <div className="col-lg-6 col-md-12 order-2 order-lg-1">
        <h3 className="header text-center text-lg-start mb-3">
          Hello, I’m Md Shahadat Alam
        </h3>
        <p className="font-serif text-justify tracking-wide px-2 px-md-0">
          I'm a Website Front-end Designer and Developer based in Chittagong, Bangladesh. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
        </p>

        <a target="_blank" rel="noopener noreferrer" href="mailto:mdshahadatalam25@gmail.com">
          <button
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="tracking-wide w-32 h-12 font-serif bg-purple-600 rounded-md text-white transition duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg mt-4"
          >
            Say Hello!
          </button>
        </a>

        <div className="row py-3 font-serif cursor-pointer">
          <div className="col-4 px-1">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center"
            >
              <h4 className="m-0 year">1 Y.</h4>
              <p className="expedia">Experience</p>
            </div>
          </div>
          <div className="col-4 px-1">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center"
            >
              <h4 className="m-0 year">20+</h4>
              <p className="expedia">Projects Completed</p>
            </div>
          </div>
          <div className="col-4 px-1">
            <a className="cv" href="#About">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center"
              >
                <h4 className="m-0 additional">Additional Info</h4>
                <p className="expedia">More details here</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  )
}
