import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import HomeP from './ClientComponent/HomePage/HomeP';
import Profile from './ClientComponent/HomePage/Profile';
import SignUpp from './ClientComponent/HomePage/SignUpp';
import Loginn from './ClientComponent/HomePage/Loginn';
import Recruiters from './ClientComponent/RecruiterComponent/Recruiters';
import AddRecruiter from './ClientComponent/RecruiterComponent/AddRecruiter';
import Signup from './ClientComponent/auth/Signup';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';

import Header from './ClientComponent/HomePage/Header';
import Layout from './components/Layout';
import Public from './components/Public';
import Welcome from './features/auth/Welcome';
import UsersList from './features/users/UsersList';
import NotesList from './features/notes/NotesList';
import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import EditNote from './features/notes/EditNote';
import NewNote from './features/notes/NewNote';
import Prefetch from './features/auth/Prefetch';
import PersistLogin from './features/auth/PersistLogin';



// Importez les composants en utilisant React.lazy pour le lazy loading


const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const Candidate = lazy(() => import('./ClientComponent/CandidatsComponent/AddCandidate'));
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
{/*           <Route path="/Loginn" element={<Loginn />}></Route>
          <Route path="/SignUpp" element={<SignUpp />}></Route>
          <Route path="/" element={<Home />} />
         
 */}
          <Route path ="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="/login" element={<Login  />}/>
            <Route path="/signup" element={<Signup />}></Route>

            <Route element={<PersistLogin />}>
            <Route element={<Prefetch />}>
            <Route path='dash' element={<DashLayout />}>
              <Route index element={<Welcome />} />

              <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>

            <Route path="notes">
              <Route index element={<NotesList />} />
              <Route path=":id" element={<EditNote />} />
              <Route path="new" element={<NewNote />} />
            </Route>

            <Route path="addoffer">
              <Route index element ={<AddOffer />} />
            </Route>
            <Route path="recruiters">
              <Route index element ={<Recruiters />} />
            </Route>
            <Route path="add-recruiter">
              <Route index element ={<AddRecruiter />} />
            </Route>
            <Route path="updateoffer/:id">
              <Route index element ={<UpdateOffer />} />
            </Route>
            <Route path="AddCandidate">
              <Route index element ={<Candidate />} />
            </Route>
            <Route path="evenements">
              <Route index element ={<Evenement />} />
            </Route>
            <Route path="add-event">
              <Route index element ={<AddEvent />} />
            </Route>
            <Route path="admin/*">
              <Route index element ={<Admin />} />
            </Route>
            <Route path="offers">
              <Route index element ={<UpdateOffer />} />
            </Route>


         {/*    <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/HomeP" element={<HomeP />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/add-recruiter" element={<AddRecruiter />} />
          <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/updateoffer/:id" element={<UpdateOffer />} />

          <Route path="/AddCandidate" element={<Candidate />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} /> */}


            </Route>    
            </Route> 
            </Route>       


          </Route>
         


        

            
         

         
           

    

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;