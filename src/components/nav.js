import React from 'react'
import navStyles from './nav.module.css'
import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <div className={ navStyles.logo }>
          <Logo />
        </div>
        <div className={ navStyles.links }>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav
