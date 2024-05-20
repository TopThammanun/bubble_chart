'use client'

import React, { useState, ReactNode, Fragment } from 'react'
import router from 'next/router'
import { Icon } from '@iconify/react'
import { Button, Card, ScrollShadow, Tooltip } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import Drawer from '@/components/drawer'
import Sidebar from './sidebar'
import { appSettingAction } from '@/store/reducers/app-setting'
import { StateType } from '@/store'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
  breadcrumb?: ReactNode
}

const Navbar = (props: Props) => {
  const { breadcrumb } = props
  const dispatch = useDispatch()
  const appSettingState = useSelector((state: StateType) => state.appSettingState)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isOpenToggle, setIsOpenToggle] = useState(false)

  const onToggleCompact = () => {
    dispatch(appSettingAction.onToggleCompact())
  }

  const logout = () => {
    router.push('/')
  }

  return (
    <Fragment>
      <Drawer
        direction='left'
        open={isOpenToggle}
        onClose={() => {
          setIsOpenToggle(!isOpenToggle)
        }}
        size={'20rem'}>
        <Sidebar disableIsCompact={true} />
      </Drawer>
      <nav className='sticky top-0 z-[40]'>
        <div className='bg-gradient-to-b from-background from-60% to-background/0 p-4 max-md:p-4 max-md:pt-3'>
          <Card className='flex flex-row items-center justify-between border-1 p-2'>
            <div className='flex items-center gap-5'>
              {!isMobile && (
                <Tooltip
                  showArrow={true}
                  content={`${appSettingState.isCompact ? 'ขยายเมนู' : 'ย่อเมนู'}`}
                  delay={0}
                  closeDelay={200}>
                  <Button isIconOnly size='sm' variant='light' onPress={onToggleCompact}>
                    <Icon icon='mynaui:sidebar-alt' width={26} height={26} className='text-default-500' />
                  </Button>
                </Tooltip>
              )}
              <div className='flex gap-2 lg:hidden'>
                <div
                  className='cursor-pointer'
                  onClick={() => {
                    setIsOpenToggle(!isOpenToggle)
                  }}>
                  <Icon icon='lucide:menu' className='h-6 w-6' />
                </div>
                <p>Health Center CMU</p>
              </div>
              {breadcrumb && breadcrumb}
            </div>
            <div className='flex items-center gap-2'></div>
          </Card>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
