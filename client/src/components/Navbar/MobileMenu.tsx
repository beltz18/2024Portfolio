import React from 'react'
import {
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react'
import {
  menuItems,
  Icons,
} from '@lib/util'
import { ArrowBottom } from '@com/Icons'
import { MobileT }     from '@typ/MobileMenu'

const MobileMenu = ({ active, setActive, setMenuOpen }: MobileT) => {
  return (
    <>
      <NavbarMenu className='w-full h-full bg-[#003049] z-50'>
        {
          menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full py-2 ${active === item.letter ? 'text-[#8D99AE]' : 'text-[#F2F2F2]'}`}
                href='#'
                size='lg'
                onClick={() => {
                  setActive(item.letter)
                  setMenuOpen(false)
                }}
              >
                { item.name }
              </Link>
            </NavbarMenuItem>
          ))
        }

        <NavbarItem>
          <Link
            className='w-full py-2 text-[#F2F2F2]'
            href={ undefined }
            size='lg'
            onClick={() => {
              console.log('CV')
            }}
          >
            Download CV
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className='w-full py-2 text-[#F2F2F2] flex justify-between'
            href={ undefined }
            size='lg'
            onClick={() => {
              console.log('Language')
            }}
          >
            <span>
              Language &nbsp;
              <span className='text-[#8D99AE]'>[En]</span>
            </span>
            <ArrowBottom />
          </Link>
        </NavbarItem>

        <div className='fixed bottom-0 left-0 w-full py-5 border-t-[.1px] border-[#8D99AE] flex items-center justify-around'>
          {
            Icons.map((icon, index) => (
              <Link
                key={`${icon.name + index}`}
                href={ icon.url }
                className='flex items-center gap-[6px] text-[#F2F2F2]'
                target='_blank'
              >
                { <icon.Icon size='25px' /> }
                { icon.name }
              </Link>
            ))
          }
        </div>
      </NavbarMenu>
    </>
  )
}

export default MobileMenu