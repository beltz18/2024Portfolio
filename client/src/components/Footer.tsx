import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full h-[18px] fixed bottom-0 left-0 bg-[#003049] z-50 flex items-center justify-center'>
        <span className='text-[12px] text-[#F2F2F2]'>
          Andi Dev&nbsp;-&nbsp;
          { new Date().getFullYear() }
        </span>
      </div>
    </>
  )
}

export default Footer