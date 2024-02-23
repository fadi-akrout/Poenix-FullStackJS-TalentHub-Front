import { useState } from 'react'
import Home from './ClientComponent/home'
import {Routes, Route} from 'react-router-dom'
import Admin from './AdminComponent/Admin'
import Candidates from './ClientComponent/Models/Candidat'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/candidat" element={<Candidates />} />

   </Routes>

       </div>
    </>
  )
}

export default App
