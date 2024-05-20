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
    key: 'patient',
    title: 'จัดการข้อมูลผู้ป่วย',
    items: [
      {
        key: 'patient-create',
        href: '/patient/create',
        icon: 'solar:document-medicine-linear',
        title: 'เพิ่มข้อมูลผู้ป่วย',
        endContent: <Icon className='text-default-400' icon='solar:add-circle-line-duotone' width={24} />
      },
      {
        key: 'patient-information',
        href: '/patient/information',
        icon: 'solar:document-add-linear',
        title: 'ข้อมูลผู้ป่วย'
      },
      {
        key: 'patient-complete',
        href: '/patient/complete',
        icon: 'solar:file-check-linear',
        title: 'Complete'
      }
    ]
  },
  {
    key: 'prevent-dengue-fever',
    title: 'เฝ้าระวังและป้องกันโรคไข้เลือดออก',
    items: [
      {
        key: 'prevent-dengue-fever-create-ci',
        href: '/prevent-dengue-fever/create-ci',
        icon: 'solar:document-text-linear',
        title: 'รายงานค่า CI รายสัปดาห์',
        endContent: <Icon className='text-default-400' icon='solar:add-circle-line-duotone' width={24} />
      }
    ]
  }
]
