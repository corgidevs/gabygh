import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          authorUrl
        }
      }
    }
  `)

  return (
    <footer>
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>You can find me on...</h6>
          <div className="social-media">
            <ul className="nav-list">
              <li>
                <a href="https://www.linkedin.com/in/gaby-gonzalez-holguin/" target="_blank" rel="noopener" className="fa-linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/gabsholguin/" target="_blank" rel="noopener" className="fa-behance">
                  <FontAwesomeIcon icon={faBehance} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gabshol/" target="_blank" rel="noopener" className="fa-instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="mailto:ggonzalez.csm@gmail.com" className="fa-email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
          <p>Created by <a href={data.site.siteMetadata.authorUrl}>©{data.site.siteMetadata.author}</a> 2019</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
