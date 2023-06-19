import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home" />         
        <SidebarRow Icon={WhatshotIcon}title="Trending" /> 
        <SidebarRow Icon={SubscriptionsIcon}title="Subscription" /> 
        <hr /> 
         {/* When you pass a component as a prop always use capital letter    */}
    </div>
    
  )
}
