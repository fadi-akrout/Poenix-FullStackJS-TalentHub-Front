import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import useTitle from './hooks/useTitle';

import HomeP from './ClientComponent/HomePage/HomeP';
import Profile from './ClientComponent/HomePage/Profile';
import SignUpp from './ClientComponent/HomePage/SignUpp';
import Loginn from './ClientComponent/HomePage/Loginn';
import Recruiters from './ClientComponent/RecruiterComponent/Recruiters';
import AddRecruiter from './ClientComponent/RecruiterComponent/AddRecruiter';
//import Signup from './features/auth/Signup';
//import Login from './features/auth/Login';
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
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'




// Importez les composants en utilisant React.lazy pour le lazy loading


const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const AddStudent = lazy(() => import('./ClientComponent/StudentsComponent/AddStudent'));
const Student = lazy(() => import('./ClientComponent/StudentsComponent/Students'));
const AddAlumni = lazy(() => import('./ClientComponent/AlumniComponent/AddAlumni'));
const Alumni = lazy(() => import('./ClientComponent/AlumniComponent/Alumni'));
const Evenement = lazy(() => import('./ClientComponent/EventComponent/Evenement'));
const AddEvent = lazy(() => import('./ClientComponent/EventComponent/AddEvent'));
const AddOffer = lazy(() => import('./ClientComponent/OfferComponent/AddOffer'));
const OfferList = lazy(() => import('./ClientComponent/OfferComponent/OfferList'));
const UpdateOffer = lazy(() => import('./ClientComponent/OfferComponent/UpdateOffer'));
const Login = lazy(() => import('./features/auth/Login'));
const Signup = lazy(() => import('./features/auth/Signup'));

const AddStaff = lazy(() => import('./ClientComponent/StaffComponent/AddStaff'));


function App() {
/*   const [count, setCount] = useState(0);
 */
useTitle('Talent Hub')

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
{/*           <Route path="/Loginn" element={<Loginn />}></Route>
          <Route path="/SignUpp" element={<SignUpp />}></Route>
          <Route path="/" element={<Home />} />
         
 */}
          <Route path ="/" element={<Layout />}>
             {/* public routes */}
            <Route index element={<Public />} />
            <Route path="/login" element={<Login  />}/>
            <Route path="/signup" element={<Signup />}></Route>

              {/* Protected Routes */}
            <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
            <Route path='dash' element={<DashLayout />}>
              <Route index element={<Welcome />} />

              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>
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
          {/*   <Route path="AddCandidate">
              <Route index element ={<Candidate />} />
            </Route> */}
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
            <Route path="AddStudent">
              <Route index element ={<AddStudent />} />
            </Route>
             <Route path="Students">
              <Route index element ={<Student />} />
            </Route>
             <Route path="AddAlumni">
              <Route index element ={<AddAlumni />} />
            </Route>
           <Route path="Alumnis">
              <Route index element ={<Alumni />} />
            </Route>
             <Route path="staff">
              <Route index element ={<AddStaff />} />
            </Route>


         {/*    <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/HomeP" element={<HomeP />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/add-recruiter" element={<AddRecruiter />} />
          <Route path="/addoffer" element={<AddOffer />} />
          <Route path="/updateoffer/:id" element={<UpdateOffer />} />
           <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} /> */}

         


            </Route>  {/* End Dash */}  
            </Route> 
            </Route> 
            </Route>  {/* End Protected Routes */}     


          </Route>
           


    

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;