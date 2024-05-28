import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import React, { Fragment, ReactElement } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return <div>Dashboard</div>
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
