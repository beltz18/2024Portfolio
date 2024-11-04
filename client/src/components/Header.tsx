'use client'

import React, { useState } from 'react'
import { useMediaQuery }   from 'react-responsive'
import MobileMenu          from '@com/Navbar/MobileMenu'
import { languages }       from '@lib/util'
import { Lang, CV }        from '@com/Icons'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react'
import {
  baseClasses,
  menuItems,
} from '@lib/util'

const Header = () => {
  const [active, setActive] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      <Navbar
        classNames={{ base: baseClasses }}
        maxWidth={'xl'}
        position='sticky'
        isBordered={ true }
        isBlurred={ false }
        isMenuOpen={ menuOpen }
        onMenuOpenChange={ setMenuOpen }
      >
        <NavbarContent className='sm:hidden' justify='start'>
          <NavbarMenuToggle className='text-[#F2F2F2]' />
        </NavbarContent>

        <NavbarBrand>
          <Link href='/'>
            <span className='font-bold text-[#F2F2F2] text-[20px]'>
              <span className='text-[#2D94EB]'>Andi</span> Dev
            </span>
          </Link>
        </NavbarBrand>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {
            menuItems.map((item, index) => (
              <NavbarItem
                key={`${item}-${index}`}
                isActive={ active === item.letter ? true : false }
              >
                <Link
                  href={ item.link }
                  className={`${active === item.letter ? 'text-[#8D99AE]' : 'text-[#F2F2F2]'}`}
                  onClick={() => setActive(item.letter)}
                >
                  { item.name }
                </Link>
              </NavbarItem>
            ))
          }
        </NavbarContent>

        <NavbarContent as='div' justify='end'>
          {
            !isMobile && (
              <>
                <span className='cursor-pointer'>
                  <CV />
                </span>

                <span
                  className='cursor-pointer relative'
                >
                  <Lang />
                  <span className='text-[#F2F2F2] text-[9px] font-[800] px-[2px] absolute bottom-[-5px] right-[-5px]'>
                    { languages[0].short }
                  </span>
                </span>
              </>
            )
          }

          <Tooltip
            showArrow={ true }
            placement='bottom'
            closeDelay={ 1000 }
            content={
              <span className='cursor-pointer text-[#F2F2F2] bg-[#2D94EB] rounded-md px-4 py-1 my-2'>
                Download CV
              </span>
            }
          >
            <Avatar
              as='button'
              className='w-[40px] h-[40px] bg-[#132233] border-[2px] border-[#598392] transition-transform'
              color='success'
              name='Andi Dev'
              size='sm'
              src='/andi-dev.webp'
            />
          </Tooltip>
        </NavbarContent>

        <MobileMenu
          active={ active }
          setActive={ setActive }
          setMenuOpen={ setMenuOpen }
        />
      </Navbar>
    </>
  )
}

export default Header