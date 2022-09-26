import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

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
        <a href='https://linkedin.com'><AiFillLinkedin /></a>
        <a href='https://github.com'><AiFillGithub /></a>
        <a href='https://twitter.com'><AiFillTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OCEAN272_Works.  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer