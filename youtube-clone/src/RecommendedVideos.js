import React from 'react'
import  "./RecommendedVideos.css";
import VideoCard from './VideoCard';

export default function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos-videos">
          <VideoCard
          title="Number one" 
          views="1M"
          timestamp="1 day ago"
          channelimage="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
          channel="Mohit Kalia"
          image="https://pbs.twimg.com/tweet_video_thumb/Den_TeTUcAAHdku.jpg"
          />
          <VideoCard
          title="Number one" 
          views="1M"
          timestamp="1 day ago"
          channelimage="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
          channel="Mohit Kalia"
          image="https://pbs.twimg.com/tweet_video_thumb/Den_TeTUcAAHdku.jpg"
          />
          <VideoCard
          title="Number one" 
          views="1M"
          timestamp="1 day ago"
          channelimage="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
          channel="Mohit Kalia"
          image="https://pbs.twimg.com/tweet_video_thumb/Den_TeTUcAAHdku.jpg"
          />
          <VideoCard
          title="Number one" 
          views="1M"
          timestamp="1 day ago"
          channelimage="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
          channel="Mohit Kalia"
          image="https://pbs.twimg.com/tweet_video_thumb/Den_TeTUcAAHdku.jpg"
          />
          
        </div>
    </div>
  )
}
