import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const Candidates = lazy(() => import('./ClientComponent/Models/Candidat'));
const AddCandidats = lazy(() => import('./ClientComponent/CandidatsComponent/AddCandidats'));
const Evenement = lazy(() => import('./ClientComponent/EventComponent/Evenement'));
const AddEvent = lazy(() => import('./ClientComponent/EventComponent/AddEvent'));
const AddOffer = lazy(() => import('./ClientComponent/OfferComponent/AddOffer'));
const OfferList = lazy(() => import('./ClientComponent/OfferComponent/OfferList'));
const UpdateOffer = lazy(() => import('./ClientComponent/OfferComponent/UpdateOffer'));


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCandidats" element={<AddCandidats />} />
          <Route path="/candidat" element={<Candidates />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} />
          <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/updateoffer/:id" element={<UpdateOffer />} />

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;