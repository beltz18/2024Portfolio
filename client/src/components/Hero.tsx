import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='h-[90vh] relative'>
        <div className='h-full absolute top-0 left-[0px] w-full z-40 flex'>
          <div className='bg-[#0004] py-2 px-[24px] w-[60%] overflow-auto'>
            <h1 className='text-[42px]'>Andi Montilla</h1>
            <h4 className='underline'>[ Full Stack Developer ]</h4>

            <p className='text-[14px] text-justify mt-6'>
              With 5+ years of hands-on experience as a Full Stack Developer, I bring expertise in both front-end and
              back-end technologies, crafting robust, high-performance web applications. I've had the privilege of working
              with cross-functional teams and leading small development groups (5-10 members) to deliver top-quality projects.
              I&apos;m passionate about problem-solving and possess exceptional debugging skills, consistently driving
              innovative solutions in fast-paced environments.
            </p>
          </div>

          <div className='w-[40%] h-full bg-[#01161E]'></div>
        </div>
      </div>
    </>
  )
}

export default Hero