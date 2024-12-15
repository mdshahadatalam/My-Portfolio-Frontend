// import React from 'react'
import React, { useState } from 'react';

export const Education = () => {
    const [statutes, setStatutes] = useState([
        { id: 1, title: 'SSC', description: 'Charlokhsya Union High school',subject:'Science' },
        { id: 2, title: 'DIPLOMA', description: 'Chittagong Polytechnic Institute',subject:'Computer Science' },
        { id: 3, title: 'INDUSTRIAL TRANING', description: 'Creative It Institute',subject:'Web Development' },
      ]);
    
  return (
    <>
     <section id='education' className='py-16'>
     <div className="education-statutes">
      <h1 className="title">Education Statutes</h1>
      <div className="statute-list">
        {statutes.map(statute => (
          <div className="statute-card cursor-pointer" key={statute.id}>
            <h2 className="statute-title font-serif tracking-wide">{statute.title}</h2>
            <p className="statute-description font-serif tracking-wide">{statute.description}</p>
            <p className='font-serif tracking-wide'> Subject: {statute.subject}</p>
          </div>
        ))}
      </div>
    </div>
     </section>
    </>
  )
}
