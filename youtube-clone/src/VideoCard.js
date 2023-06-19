import React from 'react'

import Avatar from '@mui/material/Avatar';

export default function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
        <img src={image} alt="" />
        <div className="video-info">
            <Avatar className='videoCard-avatar' alt={channel} src={channelImage} />
            <div className="video-text">
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
