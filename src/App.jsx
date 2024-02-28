import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './ClientComponent/UserComponent/Login';

// Importez les composants en utilisant React.lazy pour le lazy loading
const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const Candidates = lazy(() => import('./ClientComponent/Models/Candidat'));
const AddCandidats = lazy(() => import('./ClientComponent/CandidatsComponent/AddCandidats'));
const Evenement = lazy(() => import('./ClientComponent/EventComponent/Evenement'));
const AddEvent = lazy(() => import('./ClientComponent/EventComponent/AddEvent'));
const AddOffer = lazy(() => import('./ClientComponent/OfferComponent/AddOffer'));
const OfferList = lazy(() => import('./ClientComponent/OfferComponent/OfferList'));




function App() {
  const [count, setCount] = useState(0); // Si vous n'utilisez pas 'count' et 'setCount', vous pouvez les retirer.

  return (
    <div>

      <Suspense fallback={<div>Chargement...</div>}> {/* Ajoutez un fallback pendant le chargement des composants */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCandidats" element={<AddCandidats />} />
          <Route path="/candidat" element={<Candidates />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} />

          <Route path="login" element={<Login />}></Route>

          <Route path="/addoffer" element={<AddOffer />} />



        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
