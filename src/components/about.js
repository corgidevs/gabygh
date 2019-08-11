import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import picSVG from '../../public/img/pic.svg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h1>About</h1>
        <h6>Me</h6>
      </div>
      <div className="container">
        <div className="my-profile">
          <div className="profile">
            <img src="https://via.placeholder.com/150" alt="myself close to the golden gate bridge" />
          </div>
          <div className="profile">
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
          <div className="profile">
            <h2><FontAwesomeIcon icon={faDownload} /> Resume</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
