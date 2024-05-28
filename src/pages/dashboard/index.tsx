import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import React, { Fragment, ReactElement } from 'react'
import ReactECharts from 'echarts-for-react'
import { Spacer } from '@nextui-org/react'

type Props = {}

const Dashboard = (props: Props) => {
  const optionPieChart = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        fontFamily: 'Prompt, sans-serif',
        fontSize: 14
      }
    },
    series: [
      {
        name: 'ปรเภทกิจกรรม',
        type: 'pie',
        radius: ['50%', '95%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          position: 'inside',
          formatter: '{d}%',
          color: 'white',
          fontSize: 16,
          fontFamily: 'Prompt, sans-serif',
          offset: [0, 0]
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'การจัดประชุม' },
          { value: 735, name: 'กิจกรรมนอกอาคาร' },
          { value: 580, name: 'กิจกรรมในอาคาร' },
          { value: 484, name: 'ทัศนศึกษา' }
        ]
      }
    ]
  }

  const optionBarChart = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        type: 'bar',
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          borderRadius: [6, 6, 0, 0]
        },
        showBackground: true
      },
      {
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        type: 'bar',
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          borderRadius: [6, 6, 0, 0]
        },
        showBackground: true
      }
    ]
  }

  return (
    <div>
      <h1 className='text-4xl font-semibold'>DASHBOARD</h1>
      <Spacer y={5} />
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-4 rounded-xl border-2 bg-content1 p-5'>
          <h2 className='text-center text-xl font-semibold'>ปรเภทกิจกรรม</h2>
          <ReactECharts option={optionPieChart} />
        </div>
        <div className='col-span-8'>
          <div className='col-span-4 rounded-xl border-2 bg-content1 p-5'>
            <h2 className='text-center text-xl font-semibold'>แสดงข้อมูลตลอดทั้งปี</h2>
            <ReactECharts option={optionBarChart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

Dashboard.authGuard = false

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
