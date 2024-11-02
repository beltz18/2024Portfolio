'use client'

import React        from 'react'
import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import {
  baseClasses,
  menuItems,
} from '@lib/util'

const Header = () => {
  const [active, setActive] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

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
          <Avatar
            as='button'
            className='w-[40px] h-[40px] bg-[#132233] border-[2px] border-[#598392] transition-transform'
            color='success'
            name='Andi Dev'
            size='sm'
            src='/andi-dev.webp'
          />
        </NavbarContent>

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
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Header