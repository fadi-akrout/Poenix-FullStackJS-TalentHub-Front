import { useState } from 'react'
import './admin.css'
import Header from './HeaderAdmin'
import Sidebar from './SideBar_Admin'
import Home from './HomeAdmin'
import Candidates from './Candidats'
import {Routes, Route} from 'react-router-dom'
import EvenementsAdmin from './EventAdmin/EvenementAdmin'
import EvenementFormAdmin from './EventAdmin/AddEventAdmin'
import AddOfferAdmin from './OfferAdmin/AddOfferAdmin'
import OfferListAdmin from './OfferAdmin/OfferListAdmin'
import UpdateOfferAdmin from './OfferAdmin/UpdateOfferAdmin'
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
          <Route path="/eventsAdmin" element={<EvenementsAdmin />} />
          <Route path="/addEvent" element={<EvenementFormAdmin />} />
          <Route path="/addOfferAdmin" element={<AddOfferAdmin />} />
          <Route path="/offerlistAdmin" element={<OfferListAdmin />} />
          <Route path="/offerupdateAdmin/:id" element={<UpdateOfferAdmin />} />





        </Routes>
    </div>
  )
}

export default Admin