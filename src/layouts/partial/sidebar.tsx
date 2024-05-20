import { StateType } from '@/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'usehooks-ts'
import { Avatar, Button, ScrollShadow, Spacer, Tooltip, Image } from '@nextui-org/react'
import { cn } from '@/utils/cn'
import SidebarMenu from './sidebar-menu'
import { sectionItems } from './sidebar-items'
import { Icon } from '@iconify/react/dist/iconify.js'
import { appSettingAction } from '@/store/reducers/app-setting'

type Props = {
  disableIsCompact?: boolean
}

const Sidebar = (props: Props) => {
  const appSettingState = useSelector((state: StateType) => state.appSettingState)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const isCompact = props.disableIsCompact ? false : appSettingState.isCompact || isMobile

  return (
    <aside
      className={cn(
        'w-screen- flex h-full w-80 flex-col p-6 transition-width',
        isCompact && 'w-16 items-center px-2 py-6'
      )}>
      <section className={cn('flex items-center gap-3 px-3', isCompact && 'justify-center gap-0')}>
        <div className='flex items-center justify-center rounded-full'>
          <div className={cn('hidden w-10 scale-0', isCompact && 'flex scale-100')}>
            <Image src='/favicon.ico' width={50} alt='logo-small' />
          </div>
          <div className={cn('flex w-52 scale-100', isCompact && 'hidden scale-0')}>
            <Image src='/favicon.ico' width={200} alt='logo' />
          </div>
        </div>
      </section>

      <div className='mt-8 flex items-center gap-3 px-3'>
        <Avatar isBordered className='flex-none text-default-600' size='sm' />
        <div className={cn('flex max-w-full flex-col', { hidden: isCompact })}>
          <p className='truncate text-small font-medium text-default-600'>FirstName LastName</p>
          <p className='truncate text-tiny text-default-400'>ผู้ดูแลระบบ</p>
        </div>
      </div>

      <ScrollShadow className='-mr-6 h-full max-h-full py-6 pr-6'>
        <SidebarMenu isCompact={isCompact} items={sectionItems} />
      </ScrollShadow>

      <Spacer y={2} />
      <div
        className={cn('mt-auto flex flex-col', {
          'items-center': isCompact
        })}>
        <Tooltip content='Help & Feedback' isDisabled={!isCompact} placement='right'>
          <Button
            fullWidth
            className={cn('justify-start truncate text-default-500 data-[hover=true]:text-foreground', {
              'justify-center': isCompact
            })}
            isIconOnly={isCompact}
            startContent={
              isCompact ? null : (
                <Icon className='flex-none text-default-500' icon='solar:info-circle-line-duotone' width={24} />
              )
            }
            variant='light'>
            {isCompact ? (
              <Icon className='text-default-500' icon='solar:info-circle-line-duotone' width={24} />
            ) : (
              'Help & Information'
            )}
          </Button>
        </Tooltip>
        <Tooltip content='Log Out' isDisabled={!isCompact} placement='right'>
          <Button
            className={cn('justify-start text-default-500 data-[hover=true]:text-foreground', {
              'justify-center': isCompact
            })}
            isIconOnly={isCompact}
            startContent={
              isCompact ? null : (
                <Icon
                  className='flex-none rotate-180 text-default-500'
                  icon='solar:minus-circle-line-duotone'
                  width={24}
                />
              )
            }
            variant='light'>
            {isCompact ? (
              <Icon className='rotate-180 text-default-500' icon='solar:minus-circle-line-duotone' width={24} />
            ) : (
              'Log Out'
            )}
          </Button>
        </Tooltip>
      </div>
    </aside>
  )
}

export default Sidebar
