import React from 'react'

export const Skill = () => {
  return (
    <>
    <section id='skill' className='py-32 bg-gray-100'>
  <div className="container mx-auto">
    <h1 className='text-3xl font-serif text-center text-gray-800 mb-8' data-aos="zoom-in">Skills Overview</h1>
    <div className="row">
      {[
        { skill: 'HTML5', percentage: '95%', color: 'bg-danger' },
        { skill: 'CSS3', percentage: '95%', color: 'bg-success' },
        { skill: 'Tailwind CSS', percentage: '80%', color: 'bg-info' },
        { skill: 'Bootstrap', percentage: '95%', color: 'bg-primary' },
        { skill: 'JavaScript', percentage: '70%', color: 'bg-gray-500' },
        { skill: 'React.js', percentage: '80%', color: 'bg-danger' },
        { skill: 'Node.js', percentage: '70%', color: 'bg-danger' },
        { skill: 'Express.js', percentage: '70%', color: 'bg-info' },
        { skill: 'Mongoose.js', percentage: '80%', color: 'bg-slate-950' },
        { skill: 'Firebase/Authentication', percentage: '70%', color: 'bg-success' },
        { skill: 'MongoDb', percentage: '80%', color: 'bg-black' },
      ].map((item, index) => (
        <div className="col-12 col-sm-6 col-md-4  col-lg-4 py-4" key={index} data-aos="zoom-in" data-aos-duration="1000">
          <div className="bg-white shadow-lg MyImg cursor-pointer rounded-lg p-4">
            <h4 className='text-lg font-semibold text-gray-700 mb-2'>{item.skill}</h4>
            <div className="progress">
              <div
                className={`progress-bar ${item.color}`}
                role="progressbar"
                style={{ width: item.percentage }}
                aria-valuenow={parseInt(item.percentage)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {item.percentage}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}
