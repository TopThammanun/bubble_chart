'use client'
import router from 'next/router'
import React, { Fragment, ReactElement, ReactNode, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Icon } from '@iconify/react'
import { Accordion, AccordionItem, Card, cn } from '@nextui-org/react'
import { Image } from '@nextui-org/react'

type MenuItemProps = {
  path: string
  label: string
  icon: string
  leftElement?: ReactNode
  disablePadding?: boolean
  disable?: boolean
}

const MenuItem = (menuItemProps: MenuItemProps) => {
  const active = router.pathname === menuItemProps.path
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-xl py-2 text-base transition-all',
        !active && menuItemProps.disable
          ? 'text-foreground/60'
          : active
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-default-200/70 hover:text-default-foreground',
        menuItemProps.disablePadding ? 'pl-0' : 'px-4',
        menuItemProps.disable ? 'cursor-default' : 'cursor-pointer hover:pl-6'
      )}
      onClick={() => !menuItemProps.disable && router.push(menuItemProps.path)}>
      <div className='flex items-center gap-3'>
        <div className='flex h-full w-fit items-center'>
          <Icon icon={menuItemProps.icon} className='h-6 w-6' />
        </div>
        <div>{menuItemProps.label}</div>
      </div>
      {menuItemProps.leftElement && <div>{menuItemProps.leftElement}</div>}
    </div>
  )
}

export const MenuSidebar = () => {
  return (
    <Fragment>
      <div className='flex py-7'>
        <div className='flex w-full items-center justify-center gap-5 rounded-2xl border-2 border-primary bg-primary-50/50 py-3'>
          <Image width={55} src='/favicon.ico' alt='logo' className='rounded-none' />
          <div className='flex flex-col text-2xl font-bold text-primary'>
            <div> DOUBLE </div>
            <div className='-mt-1'>NEXT </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='px-4 font-semibold text-foreground'>MENU</div>
        <MenuItem path='#' label='หน้าแรก' icon='lucide:home' />
        <MenuItem path='#' label='หน้าสอง' icon='ep:monitor' disable />
        <MenuItem path='#' label='หน้าสาม' icon='ep:monitor' />
        <Accordion selectionMode='multiple' isCompact showDivider={false}>
          <AccordionItem
            key='1'
            aria-label='components'
            startContent={<Icon icon='heroicons:swatch' className='h-6 w-6' />}
            title='Components'
            className='pl-2'>
            <MenuItem path='' label='example' icon='lucide:dot' disablePadding={true} />
            <MenuItem path='' label='example' icon='lucide:dot' disablePadding={true} />
          </AccordionItem>
        </Accordion>
      </div>
    </Fragment>
  )
}

const Sidebar = () => {
  return (
    <Card className='sticky top-0 z-[41] h-[100dvh] w-[16rem] rounded-none bg-background/60 transition-all dark:border-r max-lg:hidden'>
      <PerfectScrollbar className='px-5'>
        <MenuSidebar />
      </PerfectScrollbar>
    </Card>
  )
}

export default Sidebar
