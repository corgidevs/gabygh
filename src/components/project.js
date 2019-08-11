import React from 'react'
// import case1SVG from '../../public/img/case1.svg'
// import case2SVG from '../../public/img/case2.svg'
// import case3SVG from '../../public/img/case3.svg'

const Project = () => {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-heading">
          <h1>Work</h1>
          <h6>My Portfolio</h6>
          <div className="my-projects">
            <div className="project">
              <img src="https://via.placeholder.com/150"  alt="queryla" />
            </div>
            <div className="project">
              <img src="https://via.placeholder.com/150" alt="admin portal" />
            </div>
            <div className="project">
              <img src="https://via.placeholder.com/150" alt="privada 14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
