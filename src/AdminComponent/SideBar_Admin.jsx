import React from 'react'
import {Link} from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function SideBar_Admin({openSidebarToggle, OpenSidebar}) {
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < a className='icon_header'/> TalentHub
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <Link to="/admin/home">
                    <BsGrid1X2Fill className='icon'/> Dashboard
            </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/admin/candidates">
            <BsFillArchiveFill className="icon" /> Candidates
          </Link>
            </li>
            <li className='sidebar-list-item'> 
            <Link to="/admin/eventsAdmin">
            <BsFillArchiveFill className="icon" /> Events
          </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/admin/addOfferAdmin">
                    <BsListCheck className='icon'/> ADD Job offers
            </Link>
        
            </li>
            <li className='sidebar-list-item'>
            <Link to="/admin/offerlistAdmin">
                    <BsListCheck className='icon'/> Job offers
            </Link>
        
            </li>
            <li className='sidebar-list-item'>
            <Link to="/admin/staffAdmin">
                    <BsPeopleFill className='icon'/> Staff
             </Link>
            </li>
            <li className='sidebar-list-item'>
            <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Companies
             </a>
            </li>       
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar_Admin;