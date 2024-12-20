import React from 'react'
import myImg from '../assets/images/MyImages/MyImg.png'

export const Home = () => {
  return (
  <>
    <section id='Home' className='py-5 bg-white'>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7 col-md-12">
        <h3 className='header'>Hello, I’m Md Shahadat Alam</h3>
        <p className='font-serif text-justify tracking-wide'>
          I'm a  Website Front-end Designer and Developer based in Chittagong, Bangladesh. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
        </p>

        <a target='none' href="mailto:mdshahadatalam25@gmail.com"><button className="tracking-wide w-32 h-12 font-serif bg-purple-600 rounded-md text-white transition duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg">
          Say Hello!
        </button></a>

        <div className='row py-3 font-serif cursor-pointer'>
          <div className="col-4 px-1">
            <div className='bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center'>
              <h4 className='m-0 year'>1 Y.</h4>
              <p className='expedia'>Experience</p>
            </div>
          </div>
          <div className="col-4 px-1">
            <div className='bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center'>
              <h4 className='m-0 year'>20+</h4>
              <p className='expedia'>Projects Completed</p>
            </div>
          </div>
          <div className="col-4 px-1">
            <a className='cv' href="#About"><div className='bg-purple-100 hover-effect transition-all duration-300 ease-in-out p-3 rounded-lg text-center'>
              <h4 className='m-0 additional'>Additional Info</h4>
              <p className='expedia'>More details here</p>
            </div></a>
          </div>
        </div>
      </div>

      <div className="col-lg-5 col-md-12 d-flex justify-center">
        <img src={myImg} className='img-fluid shadow-md rounded-lg MyImg' alt="Md Shahadat Alam" />
      </div>
    </div>
  </div>
</section>
  </>
  )
}
