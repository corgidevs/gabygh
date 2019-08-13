import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Pic from '../assets/pic.svg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-img">
          <Pic />
        </div>

        <div className="about-details">
          <div className="about-heading">
            <h1>About</h1>
            <h6>Me</h6>
            <div className="about-resume">
          <ul className="nav-list">
            <li>
              <a href="">
              <FontAwesomeIcon icon={faDownload} /> Resume
              </a>
            </li>
          </ul>
        </div>
          </div>
          <p>Hello! My name is Gabriela Gonzalez Holguin and I am an UX Designer
              with a multidisciplinary background. My diverse interests brought
              me to the User Experience world in a very unorthodox way. I have
              always been a very curious person that learns by getting the hands
              into the problems. I’m a resourceful professional, if I don’t know
              the answer I will search for it. I get my inspiration from my own
              experiences and the people that I meet. I’m also very food driven
              and a dog lover! If I’m not making mockups or user testing I might
              be having a long walk with my dog, eating something delicious or
              binge watching an anime. Right now I live at San Francisco with
              my husband and my dog.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
