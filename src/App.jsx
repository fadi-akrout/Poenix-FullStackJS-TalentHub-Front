import OfferList from './ClientComponent/OfferComponent/OfferList';
import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CandidateForm from './ClientComponent/CandidatsComponent/AddCandidate';


// Importez les composants en utilisant React.lazy pour le lazy loading
const Home = lazy(() => import('./ClientComponent/Dashboard/home'));
const Admin = lazy(() => import('./AdminComponent/Admin'));
const Candidate = lazy(() => import('./ClientComponent/CandidatsComponent/AddCandidate'));
const Evenement = lazy(() => import('./ClientComponent/EventComponent/Evenement'));
const AddEvent = lazy(() => import('./ClientComponent/EventComponent/AddEvent'));



function App() {
  const [count, setCount] = useState(0); // Si vous n'utilisez pas 'count' et 'setCount', vous pouvez les retirer.

  return (
    <div>

      <Suspense fallback={<div>Chargement...</div>}> {/* Ajoutez un fallback pendant le chargement des composants */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCandidate" element={<Candidate />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/offers" element={<OfferList />} />

        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
