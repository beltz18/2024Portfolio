import React from 'react'

export type MobileT = {
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
}