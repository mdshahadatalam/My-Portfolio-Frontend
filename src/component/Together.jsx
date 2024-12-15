import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export const Together = () => {
  return (
    <>
    <section className='bg-[#132238] py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h4 className='togeHead py-2'>Do you have Project Idia?
                    Let's discuss your project!</h4>

                    <p className='togePera py-2'>If you have an idea or a plan for a project, then click on the button below. And help me with your best idea</p>

                    <div className='d-flex justify-center mt-5'>
                     <a target='none' className='cv' href="mailto:mdshahadatalam25@gmail.com"> <button className='togeBtn d-flex align-items-center transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg'>Let’s work Together <span className='text-2xl pt-1 ps-1'><IoIosArrowRoundForward /></span> </button></a>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </section>
    </>
  )
}
