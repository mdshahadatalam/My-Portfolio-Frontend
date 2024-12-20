import React from 'react'
import { FaAddressBook } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { CiLaptop } from "react-icons/ci";

export const Process = () => {
  return (
    <>
    <section id='process' className='bg-[#F0F1F3] py-5 mt-4'>
        <div className="container">
            <div className="row justify-center align-items-center py-28 processRes">
                <div className="col-lg-5">
                    <h4 data-aos="zoom-in" data-aos-duration="2000" className='workPro'>Work Process</h4>
                    <p data-aos="zoom-in" data-aos-duration="2500" className='proText'>I always do my best and try to please the client. I work according to all the needs of the client. I complete my work very accurately and efficiently.
                    </p>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-6">
                            <div data-aos="zoom-in" data-aos-duration="1000" className='bg-white processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out hover:scale-105  hover:shadow-lg '><FaAddressBook /></span></div>
                                <h5 className='proHead py-1'>1. Research</h5>
                                <p className='proPera text-start'>Through research, I figure out how to make the client's project attractive</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div data-aos="zoom-in" data-aos-duration="1500" className='bg-white processOver shadow-md rounded-md py-2 px-4 MyImg cursor-pointer mt-4'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105  hover:shadow-lg '><IoAnalyticsOutline /></span></div>
                                <h5 className='proHead py-1'>2. Analyze</h5>
                                <p className='proPera text-start'>By analyzing all aspects of the client's needs, we extract the opportunities and present them to the client</p>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-6">
                            <div data-aos="zoom-in" data-aos-duration="2000" className='bg-white  processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105 hover:shadow-lg '><MdDesignServices /></span></div>
                                <h5 className='proHead py-1'>3. Design</h5>
                                <p className='proPera text-start'>We start the design by combining all the needs of the client</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div data-aos="zoom-in" data-aos-duration="2500" className='bg-white processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer mt-4'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105 hover:shadow-lg '><CiLaptop /></span></div>
                                <h5 className='proHead py-1'>4. Launch</h5>
                                <p className='proPera text-start'>In this step, all the design of the website is launched</p>
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
