'use client'

import React        from 'react'
import { useState } from 'react'
import LinkIcons    from '@com/Hero/LinkIcons'
import Resume       from '@com/Hero/Resume'

const Hero = () => {
  const [other, setOther] = useState<boolean>(false)

  return (
    <>
      <div className='min-h-[90vh] h-full relative'>
        <div className='bg-[#0000004A] h-full absolute top-0 left-[0px] w-full z-40 flex flex-col md:flex-row'>
          <Resume
            other={ other }
            setOther={ setOther }
          />

          <LinkIcons
            other={ other }
            setOther={ setOther }
          />
        </div>
      </div>
    </>
  )
}

export default Hero