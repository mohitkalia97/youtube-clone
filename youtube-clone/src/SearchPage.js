import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import "./SearchPage.css"

export default function SearchPage() {
  return (
    <>
        <Header />
        <div className="app-page">
            <Sidebar /> 
            <div className='searchPage'>


            </div>
        </div> 
    </>
  )
}
