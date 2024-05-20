'use client'

import React, { ReactNode } from 'react'
import { Card } from '@nextui-org/react'
import { useMediaQuery } from 'usehooks-ts'
import Sidebar from './partial/sidebar'
import Navbar from './partial/navbar'

type Props = {
  children: ReactNode
  startContent?: ReactNode
}

export default function MainLayout(props: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className='max-w-screen flex min-h-dvh'>
      {!isMobile && (
        <Card radius='none' className='sticky top-0 z-[41] h-dvh'>
          <Sidebar />
        </Card>
      )}
      <section className='flex flex-1 flex-col'>
        <Navbar />
        <div className='flex flex-1 flex-col p-4 pt-0'>{props.children}</div>
      </section>
    </div>
  )
}
