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
                    <h4 className='workPro'>Work Process</h4>
                    <p className='proText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet, <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                    </p>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='bg-white processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out hover:scale-105  hover:shadow-lg '><FaAddressBook /></span></div>
                                <h5 className='proHead py-1'>1. Research</h5>
                                <p className='proPera text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className='bg-white processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer mt-4'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105  hover:shadow-lg '><IoAnalyticsOutline /></span></div>
                                <h5 className='proHead py-1'>2. Analyze</h5>
                                <p className='proPera text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-6">
                            <div className='bg-white  processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105 hover:shadow-lg '><MdDesignServices /></span></div>
                                <h5 className='proHead py-1'>3. Design</h5>
                                <p className='proPera text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className='bg-white processOver shadow-md rounded-md py-3 px-4 MyImg cursor-pointer mt-4'>
                                <div><span className='d-inline-block iconPro my-3 rounded-md shadow-md justify-center align-items-center d-flex text-3xl w-[72px] h-[72px] bg-[#EDD8FF] text-[#A53DFF] transform duration-300 ease-in-out  hover:scale-105 hover:shadow-lg '><CiLaptop /></span></div>
                                <h5 className='proHead py-1'>4. Launch</h5>
                                <p className='proPera text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
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
