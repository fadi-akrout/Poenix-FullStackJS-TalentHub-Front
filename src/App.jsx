import { useState } from 'react';
import Home from './ClientComponent/home';
import { Routes, Route } from 'react-router-dom';
import Admin from './AdminComponent/Admin';
import Candidates from './ClientComponent/Models/Candidat';
import CandidatsP from './ClientComponent/CandidatsP';
import Evenement from './ClientComponent/Evenement';

function App() {
  const [count, setCount] = useState(0); // Si vous n'utilisez pas 'count' et 'setCount', vous pouvez les retirer.

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CandidatsP" element={<CandidatsP />} />
        <Route path="/candidat" element={<Candidates />} />
        <Route path="/evenements" element={<Evenement />} />
        <Route path="/admin/*" element={<Admin />} />
        {/* Supprimez les lignes commentées ou en double ci-dessous */}
        {/* <Route path="/candidats" element={<Candidats />} /> */}
      </Routes>
    </div>
  );
}

export default App;
