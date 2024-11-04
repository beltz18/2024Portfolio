import data      from '@lib/data/En.json'
import { IconT } from '@typ/Hero'
import {
  LinkedIn,
  GitHub,
  YouTube,
} from '@com/Icons'

const [n1, n2, n3] = data.navbar

export const baseClasses = [
  'h-[10vh]',
  'max-h-[80px]',
  'bg-[#003049]',
  'z-50'
]

export const menuItems = [
  {
    name: n1,
    letter: 'e',
    link: '#',
  },
  {
    name: n2,
    letter: 'c',
    link: '#',
  },
  {
    name: n3,
    letter: 'C',
    link: '#',
  },
]

export const Icons = [
  {
    name: 'GitHub',
    Icon: ({ size }: IconT) => { return (<GitHub size={ size } />) },
    url: 'https://github.com/beltz18',
    color: 'hover:bg-[#000000] hover:text-[#F2F2F2]',
  },
  {
    name: 'LinkedIn',
    Icon: ({ size }: IconT) => { return (<LinkedIn size={ size } />) },
    url: 'https://www.linkedin.com/in/andi-montilla-26134b2b5',
    color: 'hover:bg-slate-400 hover:text-[#111111]'
  },
  {
    name: 'YouTube',
    Icon: ({ size }: IconT) => { return (<YouTube size={ size } />)},
    url: 'https://youtube.com/@AndiDev18',
    color: 'hover:bg-[#FFFFFF] hover:text-[#111111]',
  },
]

export const languages = [
  {
    label: 'English',
    short: 'En',
  },
  {
    label: 'Español',
    short: 'Es',
  },
]