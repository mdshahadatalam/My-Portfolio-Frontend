import React from 'react'
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
   {/* <section className='pt-32 bg-blue-950'>
   <div className="container">
   <footer className="bg-blue-950 rounded-xl w-full p-6 lg:p-9">
            <div className="flex justify-between gap-[30px] flex-wrap w-full">
                <div className="lg:w-[25%]">
                    <h3 className="text-[1.2rem] font-semibold text-white mb-2">About The Store</h3>
                    <div className="flex flex-col gap-[8px] text-white">
                        <span><a href='#Home' className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Home</a></span>
                        <span><a href='#About'
                            className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">About</a></span>
                        <span><a href='#process'
                            className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Process</a></span>
                        <span><a href='#portfolio' className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Portfolio</a></span>
                        <span><a href='#skill' className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Skill</a></span>
                        <span><a href='#service' className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Service</a></span>
                        <span><a href='#contact' className="text-[0.9rem] text-decoration-none text-white hover:text-blue-400 cursor-pointer  ">Contact Me</a></span>
                    </div>
                </div>

                <div className="lg:w-[45%]">
                    <h3 className="text-[1.2rem] font-semibold text-white mb-2">Language</h3>
                    <div className="flex text-white flex-wrap">
                        <button
                            className="text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md">English
                        </button>
                        <button
                            className="text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md">Bangla
                        </button>
                       
                        <button
                            className="text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md">Hindi
                        </button>
                       
                    </div>
                </div>

                <div className="lg:w-[20%]">
                    <h3 className="text-[1.2rem] font-semibold text-white mb-2">Get in touch</h3>
                    <div className="flex gap-[7px] text-white">
                        <a target='none' href='https://www.facebook.com/mdshahadat.alam.35380' className="text-[1.3rem] text-white p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                            <CgFacebook/>
                        </a>
                        <a target='none' href='https://github.com/mdshahadatalam' className="text-[1.2rem] text-white p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                           <FaGithubAlt />
                        </a>
                        <a target='none' href='https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ==' className="text-[1.2rem] text-white p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                            <BsInstagram/>
                        </a>
                        <a target='none' href='http://www.linkedin.com/in/md-shahadat-alam-2a2914326' className="text-[1.2rem] text-white p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
                            <BsLinkedin/>
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="sm:flex-row flex-col flex sm:items-center gap-[15px] w-full justify-center mt-8">
                <a className="text-gray-400 cursor-pointer text-[0.8rem]">Copy Right</a>
                <a className="text-gray-400 cursor-pointer text-[0.8rem]">2024</a>
                <a className="text-gray-400 cursor-pointer text-[0.8rem]">Portfolio</a>
            </div>
        </footer>
   </div>
   </section> */}

   <section className='pt-32 bg-blue-950'>
  <div className="container">
    <footer className="bg-blue-950 rounded-xl w-full p-6 lg:p-9">
      <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
        
        <div className="w-full lg:w-[25%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">About The Store</h3>
          <div className="flex flex-col gap-2 text-white">
            {['Home', 'About', 'Process', 'Portfolio', 'Skill', 'Service', 'Contact Me'].map((item) => (
              <span key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "")}`}
                   className="text-[0.9rem] text-white hover:text-blue-400 cursor-pointer">
                   {item}
                </a>
              </span>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">Language</h3>
          <div className="flex flex-wrap gap-2 text-white">
            {['English', 'Bangla', 'Hindi'].map(lang => (
              <button key={lang} className="text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md">
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[20%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">Get in touch</h3>
          <div className="flex gap-3 text-white justify-center lg:justify-end">
            <a target='none' href='https://www.facebook.com/mdshahadat.alam.35380' className="text-xl p-1.5 rounded-full hover:bg-blue-400 text-white"><CgFacebook /></a>
            <a target='none' href='https://github.com/mdshahadatalam' className="text-xl p-1.5 rounded-full hover:bg-blue-400 text-white"><FaGithubAlt /></a>
            <a target='none' href='https://www.instagram.com/_md_shahadat_alam_?igsh=MXZleWQ2M3NjY3ZuYQ==' className="text-xl p-1.5 rounded-full hover:bg-blue-400 text-white"><BsInstagram /></a>
            <a target='none' href='http://www.linkedin.com/in/md-shahadat-alam-2a2914326' className="text-xl p-1.5 rounded-full hover:bg-blue-400 text-white"><BsLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 text-center justify-center mt-8 text-sm text-gray-400">
        <a className="cursor-pointer text-gray-400 no-underline">Copy Right</a>
        <a className="cursor-pointer text-gray-400 no-underline">2024</a>
        <a className="cursor-pointer text-gray-400 no-underline">Portfolio</a>
      </div>
    </footer>
  </div>
</section>

    </>
  )
}
