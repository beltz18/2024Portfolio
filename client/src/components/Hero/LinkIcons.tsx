import React      from 'react'
import Link       from 'next/link'
import Image      from 'next/image'
import { motion } from 'framer-motion'
import { Icons }  from '@lib/util'
import { HeroT }  from '@typ/Hero'

const LinkIcons = ({ other }: HeroT) => {
  const animationKey = other ? 'reverse' : 'normal'

  return (
    <>
      <motion.div
        key={animationKey}
        className={`w-full h-full hidden md:w-[40%] md:flex ${!other ? 'flex-col' : 'flex-col-reverse'} items-center justify-center gap-3`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: .2,
          ease: 'anticipate',
          delay: .1,
        }}
      >
        <div className='flex gap-4 items-center justify-center'>
          {
            Icons.map((icon, index) => (
              <Link
                key={ icon.name }
                href={ icon.url }
                className='w-[75px] h-[75px]'
                target='_blank'
              >
                <motion.span
                  className={`h-full rounded-md flex flex-col items-center justify-center text-[12px] ${icon.color}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .3,
                    ease: 'anticipate',
                    delay: !other ? .3 + index : .3 + index + 1,
                  }}
                >
                  { <icon.Icon size='40px' /> }
                  { icon.name }
                </motion.span>
              </Link>
            ))
          }
        </div>

        <motion.div
          className='hero-two bg-[#01161E] rounded-full'
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .3,
            ease: 'anticipate',
            delay: other ? .3 : 3.3,
          }}
        >
          <Link href={ Icons[2].url } target='_blank'>
            <Image
              width={300}
              height={300}
              src='/andi-dev.webp'
              alt='Andi Dev'
              className='hero-logo logo'
            />
            <Image
              width={300}
              height={300}
              src='/andi-dev.webp'
              alt='Andi Dev'
              className='hero-logo2 logo'
            />
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default LinkIcons