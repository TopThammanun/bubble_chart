import { Icon } from '@iconify/react'

import { type SidebarItem } from './sidebar-menu'
import TeamAvatar from './team-avatar'
import { Chip } from '@nextui-org/react'

export const sectionItems: SidebarItem[] = [
  {
    key: 'main-menu',
    title: '',
    items: [
      {
        key: 'home',
        href: '/',
        icon: 'solar:home-2-linear',
        title: 'หน้าหลัก'
      },
      {
        key: 'projects',
        href: '#',
        icon: 'solar:widget-2-outline',
        title: 'แดชบอร์ด',
        endContent: (
          <Chip size='sm' variant='flat'>
            Coming Soon
          </Chip>
        )
      }
    ]
  },
  {
    key: 'demo',
    title: 'ตัวอย่าง',
    items: [
      {
        key: 'demo-page',
        href: '#',
        icon: 'solar:document-medicine-linear',
        title: 'Demo',
        startContent: <TeamAvatar name='Demo' />
      }
    ]
  }
]
