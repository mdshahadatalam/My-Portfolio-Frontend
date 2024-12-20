import React from 'react'

export const Service = () => {
  return (
   <>
     <section id='service' className='bg-[#F0F1F3] py-5 mt-4'>
        <div className="container">
            <div className="row justify-center align-items-center py-28 processRes">
                <div className="col-lg-5">
                    <h4 className='workPro'>What I do?</h4>
                    <p className='proText'>Hi I am a website front-end developer. As a front-end developer, I do basic website design as well as some backend work. Also design and make email signature figma. I do my work very efficiently. I always try to please my client.
                    </p>

                    <a target='none' href="mailto:mdshahadatalam25@gmail.com">
                    <button className="tracking-wide w-32 h-12 font-serif bg-purple-600 rounded-md text-white transition duration-300 ease-in-out transform hover:bg-purple-500 hover:scale-105 hover:shadow-lg">
                       Say Hello!
                     </button>
                    </a>
                </div>
                <div className="col-lg-7">
                   
                <div className='container mx-auto p-4'>
                  <div className='bg-white shadow-lg rounded-lg overflow-hidden my-4 MyImg'>
                      <div className='p-6 font-serif'>
                          <h4 className='text-2xl font-bold text-gray-800 mb-2 serHeader'>Frontend Developer</h4>
                          <p className='text-gray-600'>
                              Front End Developer • I make web pages come alive • Expertise: 
                              <span className='font-semibold'> HTML, CSS, Tailwind CSS, Bootstrap 5, JavaScript, React.js, Node.              js, Express.js, Mongoose, MongoDB, Firebase</span> • 
                              Formerly with <span className='font-semibold'>IBM</span>
                         </p>
                      </div>
                  </div>

                    <div className='bg-white shadow-lg rounded-lg overflow-hidden my-4 MyImg'>
                        <div className='p-6 font-serif'>
                            <h4 className='text-2xl font-bold text-gray-800 mb-2 serHeader'>Email Signature</h4>
                            <p className='text-gray-600'>
                                Are you looking for the best ways to get noticed in overloaded inboxes? 
                                Get inspired by professional email signatures you can use right away. 
                                Learn more about <span className='font-semibold'>Apple Mail email signatures</span>.
                            </p>
                        </div>
                    </div>

                     <div className='bg-white shadow-lg rounded-lg overflow-hidden my-4 MyImg'>
                         <div className='p-6 font-serif'>
                             <h4 className='text-2xl font-bold text-gray-800 mb-2 serHeader'>Figma</h4>
                             <p className='text-gray-600'>
                                 I have been working with Figma for a long time. From designing in Figma to building websites, 
                                 I can design any type of project. I use Figma effectively to bring ideas to life.
                             </p>
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
