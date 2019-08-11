import React from 'react'
import { Link } from 'gatsby'
import navStyles from './nav.module.css'
// import logoVG from '../../public/img/logo.svg'

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <div className={ navStyles.logo }>
          <img src="https://via.placeholder.com/150" alt="Gabriela Gonzalez" />
        </div>
        <div className={ navStyles.links }>
          <ul>
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#home">About</Link>
            </li>
            <li>
              <Link to="#home">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav
