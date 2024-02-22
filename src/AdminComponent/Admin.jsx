import { useState } from 'react'
import './admin.css'
import Header from './HeaderAdmin'
import Sidebar from './SideBar_Admin'
import Home from './HomeAdmin'
import Candidates from './Candidats'
import {Routes, Route} from 'react-router-dom'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/candidates" element={<Candidates />} />
        </Routes>
    </div>
  )
}

export default Admin