import { Avatar } from '@mui/material';
import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import "./ChannelRow.css";

export default function ChannelRow({ image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow-logo' 
                alt={channel}
                src={image}
        />
        <div className="channelRow-text">
            <h4>
                {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
            </h4>
            <p>
                {subs} subscribers - {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}
