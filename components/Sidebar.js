import { CalendarIcon, ChevronDownIcon, ClockIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SidebarRow from './SidebarRow'
import { useSession } from 'next-auth/react'

function Sidebar() {
const {data : session}=useSession()
    return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={session.user.image} title={session.user.name}/> 
      <SidebarRow Icon={UsersIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
      <SidebarRow Icon={ComputerDesktopIcon} title='Watch'/>
      <SidebarRow Icon={CalendarIcon} title='Events'/>
      <SidebarRow Icon={ClockIcon} title='memories'/>
      <SidebarRow Icon={ChevronDownIcon} title='See More'/>
      </div>
  )
}

export default Sidebar
