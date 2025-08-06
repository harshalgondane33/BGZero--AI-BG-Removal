import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-4 lg:px-44 py-3 gap-4'>
        
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm-hidden '>Copyright@Harshal | All right reserved.</p>
      <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt="facebook icon" />
        <img width={40} src={assets.twitter_icon} alt="icon" />
        <img width={40} src={assets.google_plus_icon} alt="icon" />
      </div>
    </div>
  )
}

export default Footer;
