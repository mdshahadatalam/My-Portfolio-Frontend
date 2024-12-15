// import React from 'react'
import React, {useState} from "react";

import {FaDiscord} from "react-icons/fa";
import {IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import { IoLogoSkype } from "react-icons/io5";
import { BiLogoStripe } from "react-icons/bi";
import { Process } from './Process';

export const Nav = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  return (
    <>
     <section className="font-serif py-3 bg-[#FFFFFF]">
        <div className="container">
        <nav className="flex items-center justify-between w-full relative">
            
            <p className="d-flex font-bold tracking-wide gap-x-2 align-items-center text-2xl"><span className="text-2xl d-flex justify-center align-items-center w-[56px] h-[56px] rounded-full text-white bg-[#A53DFF]"><BiLogoStripe /></span>Shahadat</p>

            <div>
            <CiMenuFries className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden text-lg">

                <a className="textSty"  href="#Home">
                <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>
                </a>

                <a href="#About"  className="textSty">
                <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">about </li>
                </a>

               <a  className="textSty" href="#process">
               <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Process</li>
               </a>

                <a  className="textSty" href="#portfolio">
                <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Portfolio</li>
                </a>

               <a className="textSty" href="#skill">
               <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Skills</li>
               </a>

              <a className="textSty" href="#service">
              <li className="hover:border-b-[#3B9DF8] text-black tracking-wide border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Services</li>
              </a>
               

                  <div className="flex items-center gap-[10px]">
                  <a href="#contact">
                  <button className="tracking-wide w-[111px] h-[48px] bg-[#A53DFF] rounded-md text-white transition duration-300 ease-in-out transform hover:bg-[#8A2BFF] hover:scale-105 hover:shadow-lg">
                       Contact
                 </button> 
                  </a>
                  </div>
            </ul>

            

            


            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} lg:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>
                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <a className="
                    textSty" href="#Home">
                    <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    </a>
                    <a className="
                    textSty" href="#AboutNav">
                    <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about</li>
                    </a>
                    
                    <a className="
                    textSty" href="#process">
                    <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Process</li>
                    </a>

                   <a className="textSty" href="#portfolio">
                   <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Portfolio</li>
                   </a>

                    <a   className="textSty" href="#skill">
                    <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Skills</li>
                    </a>

                    <a className="textSty"  href="#service">
                    <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Services</li>
                    </a>

                    <a   href="#contactNav"> <button className="btn btn-dark text-white">Contact</button></a>
                </ul>
            </aside>
        </nav>
        </div>
     </section>

    </>
  )
}
