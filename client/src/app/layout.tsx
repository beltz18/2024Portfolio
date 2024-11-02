import '@sty/_index.min.scss'

import type { Metadata } from 'next'
import { DESCRIPTION, TITLE } from '@lib/var'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        { children }
      </body>
    </html>
  )
}