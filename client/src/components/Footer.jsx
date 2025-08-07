import React from 'react'
import { assets } from '../assets/assets'
import BG from '../assets/BGZero.svg'
import linkedin_icon from '../assets/linkedin_icon1.svg'
import github from '../assets/github.svg'
import portfolio from '../assets/portfolio.svg'
const Footer = () => {
  return (
    <div className='flex justify-between items-center px-4 lg:px-44 py-3 gap-4'>
        
        <img width={150} src={BG} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm-hidden '>Copyright@Harshal | All right reserved.</p>
      <div className='flex gap-2'>
        <a href='https://www.linkedin.com/in/harshal-gondane-bb55bb130'><img width={30} src={linkedin_icon} alt=" icon" /></a>
        <a href='https://github.com/harshalgondane33'><img width={30} src={github} alt="icon" /></a>
        <a href='https://portfolio-sigma-one-8ymo9jqez3.vercel.app'><img width={30} src={portfolio} alt="icon" /></a>
      </div>
    </div>
  )
}

export default Footer;
