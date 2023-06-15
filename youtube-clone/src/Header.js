import React from 'react'

import "./Header.css";

import MenuIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';



export default function Header() {
  return (
    <div className='header'>

        <div className='header-left'>
            <MenuIcon />
            <img 
                className='header-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                alt=''
            />
        </div>
        
        <div className='header-input'>
            <input type="text" />
            <SearchIcon />
        </div>

       <div className='header-icons'>
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar 
                alt="Mohit Kalia"
                src="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
            />
       </div>

    </div>
  )
}