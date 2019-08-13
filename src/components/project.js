import React from 'react'
import Project1 from '../assets/case1.svg'

const Project = () => {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-heading">
          <h1>Work</h1>
          <h6>My Portfolio</h6>
        </div>
        <div className="my-projects">
          <div className="project">
            <Project1 />
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="dashboard" />
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="privada 14" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
