import React from 'react'
import "./SidebarRow.css";

export default function SidebarRow( { selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
        <Icon  className={"sidebarrow-icon"} />

        <div className='sidebarrow-title'>{title}</div>
    </div>
  )
}
