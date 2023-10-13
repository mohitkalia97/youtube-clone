import { useState } from 'react'

import "./Header.css";

import React from 'react';
import MenuIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import Avatar from '@mui/material/Avatar';
//import LoginIcon from '@mui/icons-material/Login';       //conditional
//import LogoutIcon from '@mui/icons-material/Logout';     //conditional 

import { Link } from "react-router-dom";

export default function Header() {

  const [inputSearch, setInputSearch] = useState("");


  return (
    <div className='header'>

        <div className='header-left'>
            <MenuIcon />
            <Link to={"/"}>
                <img 
                    className='header-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                    alt=''
                />
            </Link>
        </div>
        
        <div className='header-input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Suchen" type="text" />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='header-inputButton'/>
            </Link>
        </div>

       <div className='header-icons'>
            <VideoCallIcon className='header-icon' />
            <AppsIcon />
            <NotificationsIcon />
            {/* <Avatar 
                alt="Mohit Kalia"
                src="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
            /> */}
            <Link to={`/login`}>
                Login
            </Link>
       </div>

    </div>
  )
}