import React from 'react'

export type TechT = {
  name: string,
  type: 'Lang' | 'Front' | 'Back' | 'DB' | 'Other',
  Icon: React.JSX.Element,
  color: string,
  back: string,
}

export type TemplateT = {
  techList: Array<TechT>,
  title: string,
  prefix: string,
}