import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const navigate=useNavigate()
  const {resultImage,image} = useContext(AppContext)
  return (
    <div className='mx-4 min-h-[75vh] mt-14 lg:mx-44 my-3'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-2xl'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border' src={image ? URL.createObjectURL(image) :null} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={resultImage ? resultImage :null} alt="" />
              {
                !resultImage && image && <div className='absolute right-1/2 bottom-1/2 transform-translate-x-1/2 translate-y-1/2'> 
                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin '>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
        { resultImage && <div className='flex items-center justify-center sm:justify-end flex-wrap gap-4 mt-6'>
          <button onClick={()=> navigate('/')} className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>
            Try another image
          </button>
          <a href={resultImage} download className='px-8 py-2.5 text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'>Download Image</a>
        </div>}
      </div>
    </div>
  )
}

export default Result
