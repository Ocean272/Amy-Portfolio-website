import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/amy-lim-4762b3237' target='blank'><BsLinkedin /></a>
        <a href='https://github.com/Ocean272' target='blank'><BsGithub /></a>
        <a href='https://twitter.com/ocean272' target='blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials