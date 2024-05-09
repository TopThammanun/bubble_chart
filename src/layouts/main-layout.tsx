'use client'

import React, { Fragment, ReactNode } from 'react'
import Navbar from './partial/navbar'
import Footer from './partial/footer'
import Sidebar from './partial/sidebar'

type Props = {
  children: ReactNode
  breadcrumb?: ReactNode
}

const MainLayout = (props: Props) => {
  const { breadcrumb } = props

  return (
    <Fragment>
      <div className='max-w-screen flex min-h-[100dvh] flex-row'>
        <Sidebar />
        <div className='w-full lg:w-[calc(100vw-16rem)]'>
          <div className='flex min-h-[100dvh] flex-col'>
            <Navbar breadcrumb={breadcrumb} />
            <div className='flex-grow'>
              <div className='px-6 pb-6 max-md:px-5 max-md:pb-5'>{props.children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MainLayout
