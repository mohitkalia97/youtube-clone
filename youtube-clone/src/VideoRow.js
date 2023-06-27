import React from 'react'
import "./VideoRow.css"

export default function VideoRow( { views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className='videoRow'>
        <img src={image} alt="" />
        <div className="videoRow-text">
            <h3>{title}</h3> 
            <p className='videoRow-headline'>
                {channel} - <span className='videoRow-subs'>
                                <span className='videoRow-subsNumber'>
                                    {subs} 
                                </span> Subscribers </span>
                                {views} views - {timestamp}
            </p>
            <p className='videoRow-description'>{description}</p>
        </div>
    </div>
  )
}
