import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import "./SearchPage.css"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';

export default function SearchPage() {
  return (
    <>
        <Header />
        <div className="app-page">
            <Sidebar /> 
            <div className='searchPage'>
                <div className='searchPage-filter'>
                    <TuneOutlinedIcon />
                    <h2>FILTER</h2>
                </div>
                <hr />

                <ChannelRow 
                    image="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
                    channel="Mohit Kalia"
                    verified
                    subs="1M"
                    noOfVideos={10}
                    description="Welcome to my Channel!"
                />
                <hr />
            </div>
        </div> 
    </>
  )
}
