import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Shablon-style.css';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-3 position-absolute bottom-0 end-0'>
        <span className='footer-text-color'>Created by: Max Brenzey</span>
        
        <SocialIcon 
          url="https://www.linkedin.com/in/maxim-brenzey-639005190/" 
          className="icon-linkedin"
          target="_blank"
          style={{ height: 45, width: 45 }}
          bgColor="transparent"
        />
                
        <SocialIcon 
          url="https://github.com/MaxBrenzey" 
          className="icon-linkedin"
          target="_blank"
          style={{ height: 45, width: 45, marginRight: '3rem' }}
          bgColor="transparent"
        />
      </footer>
    </>
  )
}

export default Footer
