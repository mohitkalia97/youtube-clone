import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'

export default function HomePage() {


  return (
    <>
        <Header />
        <div className="app-page">
        <Sidebar /> 
        <RecommendedVideos />
        </div> 
    </>
  )  
}

