import React from 'react'
import Hero  from '@com/Hero'

const Body = () => {
  return (
    <>
      <div className='w-full h-full text-[#F2F2F2]'>
      <div className='animated' />
        <div className='max-w-[1288px] mx-auto'>
          <Hero />

          <div className='pt-4 pb-8 px-[24px]'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, officiis autem asperiores
              aliquid reprehenderit molestias ipsum aperiam nihil temporibus dolore, culpa ad. Eum harum,
              atque assumenda molestiae sunt esse. Minus?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body