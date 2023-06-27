import React from 'react'

import Avatar from '@mui/material/Avatar';
import "./VideoCard.css";

export default function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
        <img className='videoCard-thumbnail' src={image} alt="" />
        <div className="videoCard-info">
            <Avatar className='videoCard-avatar' 
                    alt={channel} 
                    src={channelImage} />
            <div className="videoCard-text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} * {timestamp}
                </p>
            </div>
        </div>
    </div>

  )
}
