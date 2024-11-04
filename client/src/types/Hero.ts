import React from 'react'

export type HeroT = {
  other: boolean,
  setOther: React.Dispatch<React.SetStateAction<boolean>>
}

export type IconT = {
  size: string;
}