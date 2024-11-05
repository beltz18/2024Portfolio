import React         from 'react'
import { motion }    from 'framer-motion'
import { TemplateT } from '@typ/Main'

const TemplateCard = ({ techList, title, prefix }: TemplateT) => {
  return (
    <>
      <div className='flex flex-col justify-center gap-[4px]'>
        <span>{ title }</span>
        <ul className='flex items-center gap-[12px]'>
          {
            techList
              .filter((t) => t.type === prefix)
              .map((icon, index) => (
              <motion.li
                key={`${icon.name + index}`}
                className={`w-[80px] h-[80px] flex flex-col items-center justify-center gap-1 cursor-pointer text-[12px] p-2 rounded-md border-[.1px]`}
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: 1,
                  backgroundColor: icon.back,
                  color: icon.color,
                }}
                transition={{
                  duration: 2,
                  delay: 2 * index,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                { icon.Icon }
                { icon.name }
              </motion.li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default TemplateCard