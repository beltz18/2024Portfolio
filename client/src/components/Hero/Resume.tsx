import React         from 'react'
import { useState }  from 'react'
import { useRef }    from 'react'
import { useEffect } from 'react'
import { motion }    from 'framer-motion'
import Typed         from 'typed.js'
import data          from '@lib/data/En.json'
import { HeroT }     from '@typ/Hero'

const Resume = ({ other, setOther }: HeroT) => {
  const [showB, setShowB] = useState<boolean>(false)
  const [p1, p2] = data.hero.paragraph

  const name  = useRef(null)
  const title = useRef(null)
  const par1  = useRef(null)
  const par2  = useRef(null)

  useEffect(() => {
    const typeName  = new Typed(name.current,  { strings: [data.hero.name], typeSpeed: 50, cursorChar: '' })
    const typeTitle = new Typed(title.current, { strings: [data.hero.title], typeSpeed: 50, cursorChar: '' })
    const typePar1  = new Typed(par1.current,  { strings: [p1], typeSpeed: 5, cursorChar: '' })

    return () => {
      typeName.destroy()
      typeTitle.destroy()
      typePar1.destroy()
    }
  }, [])

  const typeAnother = () => {
    const typePar2  = new Typed(par2.current,  { strings: [p2], typeSpeed: 1, cursorChar: '' })
    return () => typePar2.destroy()
  }

  setTimeout(() => setShowB(true), 8000)

  return (
    <>
      <div className='py-2 px-[24px] w-full h-full md:w-[60%] overflow-auto flex flex-col justify-center'>
        <h1 className='text-[42px] font-[600]' ref={name} />
        <h4 className='text-[24px] underline' ref={title} />

        <p className={`text-[16px] text-justify mt-6 ${other ? 'hidden' : 'block'}`} ref={par1} />
        <p className={`text-[14px] text-justify mt-6 ${!other ? 'hidden' : 'block'}`} ref={par2} />

        <div className='flex items-center justify-center mt-6'>
          {
            showB && !other
              ?
              (
                <>
                  <motion.span
                    className='border-[1px] border-[#F2F2F2] px-6 py-2 rounded-md cursor-pointer hover:bg-[#f2f2f2a2] hover:text-[#111]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: "linear",
                      duration: 2,
                      x: { duration: 1 }
                    }}
                    onClick={() => {
                      setOther(true)
                      setShowB(false)
                      typeAnother()
                    }}
                  >
                    Show more
                  </motion.span>
                </>
              )
              :
              (
                <>
                  <motion.a
                    href='#'
                    className='border-[1px] border-[#F2F2F2] px-6 py-2 rounded-md cursor-pointer hover:bg-[#f2f2f2a2] hover:text-[#111]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: "linear",
                      duration: 2,
                      x: { duration: 1 },
                      delay: 8,
                    }}
                  >
                    Download CV
                  </motion.a>
                </>
              )
          }
        </div>
      </div>
    </>
  )
}

export default Resume