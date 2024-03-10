import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeP from './ClientComponent/HomePage/HomeP';
import Profile from './ClientComponent/HomePage/Profile';
import SignUpp from './ClientComponent/HomePage/SignUpp';
import Loginn from './ClientComponent/HomePage/Loginn';

import Recruiters from './ClientComponent/RecruiterComponent/Recruiters';
import AddRecruiter from './ClientComponent/RecruiterComponent/AddRecruiter';
//import OfferList from './ClientComponent/OfferComponent/OfferList';





// Importez les composants en utilisant React.lazy pour le lazy loading


const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const Candidate = lazy(() => import('./ClientComponent/CandidatsComponent/AddCandidate'));
const Evenement = lazy(() => import('./ClientComponent/EventComponent/Evenement'));
const AddEvent = lazy(() => import('./ClientComponent/EventComponent/AddEvent'));
const AddOffer = lazy(() => import('./ClientComponent/OfferComponent/AddOffer'));

//const Login = lazy(() => import('./ClientComponent/UserComponent/Login'));
//const Signup = lazy(() => import('./ClientComponent/UserComponent/Signup'));

const OfferList = lazy(() => import('./ClientComponent/OfferComponent/OfferList'));
const UpdateOffer = lazy(() => import('./ClientComponent/OfferComponent/UpdateOffer'));
// const Login = lazy(() => import('./ClientComponent/UserComponent/Login'));
// const Signup = lazy(() => import('./ClientComponent/UserComponent/Signup'));







function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Loginn" element={<Loginn />}></Route>
          <Route path="/SignUpp" element={<SignUpp />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/AddCandidate" element={<Candidate />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} />

          <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/HomeP" element={<HomeP />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/add-recruiter" element={<AddRecruiter />} />

          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route> */}


          <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/updateoffer/:id" element={<UpdateOffer />} />


        </Routes>
      </Suspense>
    </div>
  );
}

export default App;