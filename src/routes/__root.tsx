//import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import SideBar from '../components/layout/sidebar'
import TopBar from '../components/layout/topBar'
import AlertsContext from '../context/alertsContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
   <AlertsContext>
     <div className="grid grid-cols-[250px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <TopBar />
        <Outlet />  {/*  pages render here */}
      </div>
    </div>
   </AlertsContext>
  )
}
