import data from '@lib/En.json'
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
    icon: <GitHub />,
    url: '#',
    color: 'hover:bg-[#000000] hover:text-[#F2F2F2]',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    url: '#',
    color: 'hover:bg-slate-400 hover:text-[#111111]'
  },
  {
    name: 'YouTube',
    icon: <YouTube />,
    url: '#',
    color: 'hover:bg-[#FFFFFF] hover:text-[#111111]',
  },
]