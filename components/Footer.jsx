import React from 'react'

import { AiFillMessage,AiOutlineTwitter,AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import "../styles/footer.css";


const Footer = () => {
  return (
    <footer className='footer-container'>
      <p>2024 Belinda's Hair All rights reserved</p>
      <p className="icons">
        <a href="https://github.com/Nde-Dilan"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/nde-dilan/"><AiFillLinkedin/></a>
        <a href="#"><AiOutlineTwitter/></a>
        <a href="https://wa.me/237694525931"><AiFillMessage/></a>
      </p>
    </footer>
  )
}

export default Footer;