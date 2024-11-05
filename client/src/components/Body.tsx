import React      from 'react'
import Hero       from '@com/Hero'
import Experience from '@com/Experience'
import Contact    from '@com/Contact'

const Body = () => {
  return (
    <>
      <div className='w-full h-full text-[#F2F2F2]'>
      <div className='animated' />
        <div className='max-w-[1288px] mx-auto'>
          <Hero />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Body