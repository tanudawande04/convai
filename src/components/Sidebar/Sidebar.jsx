import React from 'react'
import './Sidebar.css'
import{assets} from  '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <div className="top">
        <img className = "Menu" src="{assets.menu_icon}"  alt="" />
        
      </div>
    </div>
  )
}

export default Sidebar
