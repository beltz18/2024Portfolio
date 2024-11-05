import React         from 'react'
import TemplateCard  from '@com/Experience/TemplateCard'
import { techList }  from '@lib/data/techList'

const Cards = () => {
  return (
    <>
      <section className='flex flex-col gap-[4px] w-full md:w-[50%]'>
        <TemplateCard
          techList={ techList }
          title='Languages'
          prefix='Lang'
        />

        <TemplateCard
          techList={ techList }
          title='FrontEnd'
          prefix='Front'
        />

        <TemplateCard
          techList={ techList }
          title='BackEnd'
          prefix='Back'
        />

        <TemplateCard
          techList={ techList }
          title='Databases'
          prefix='DB'
        />

        <TemplateCard
          techList={ techList }
          title='Other'
          prefix='Other'
        />
      </section>
    </>
  )
}

export default Cards