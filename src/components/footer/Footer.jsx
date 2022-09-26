import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>OCEAN272_Works</a>

      <ul className="permalinks">
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolios'>Portfolios</a></li>
        <li><a href='#testimonials/'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/amy-lim-4762b3237' target='blank'><BsLinkedin /></a>
        <a href='https://github.com/Ocean272' target='blank'><BsGithub /></a>
        <a href='https://twitter.com/ocean272' target='blank'><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OCEAN272_Works.  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer