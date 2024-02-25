import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/bgi.jpg';
import './CandidatsP.css'; 

function CandidatsP() {
  const [candidateId, setCandidateId] = useState('');
  const [diploma, setDiploma] = useState('');
  const [actualPost, setActualPost] = useState('');
  const [nbrYearsOfExperience, setNbrYearsOfExperience] = useState('');
  const [lastPostOccupied, setLastPostOccupied] = useState('');
  const [cv, setCv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      console.log("Form submitted:", { candidateId, diploma, actualPost, nbrYearsOfExperience, lastPostOccupied, cv: fileContent });
    };
    reader.readAsText(cv);

    setCandidateId('');
    setDiploma('');
    setActualPost('');
    setNbrYearsOfExperience('');
    setLastPostOccupied('');
    setCv(null);
  };

  return (
    <>
      <header className="header-area header-sticky" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Talent<span className="text-danger">Hub</span>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li><a href="meetings.html">Opportunités D'emploi</a></li>
                  <li className="scroll-to-section"><Link to="/CandidatsP">Postulez Maintenant</Link></li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="meetings.html">Offres</a></li>
                      <li><a href="meeting-details.html">Détail Des Offres</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#contact">Contactez-nous</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className='grid-container'>
        <div className="form-container">
          <h2>Candidats Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Candidate ID:
              <input className="input-field" type="text" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} />
            </label>
            <label>
              Diploma:
              <input className="input-field" type="text" value={diploma} onChange={(e) => setDiploma(e.target.value)} />
            </label>
            <label>
              Actual Post:
              <input className="input-field" type="text" value={actualPost} onChange={(e) => setActualPost(e.target.value)} />
            </label>
            <label>
              Number of Years of Experience:
              <input className="input-field" type="number" value={nbrYearsOfExperience} onChange={(e) => setNbrYearsOfExperience(e.target.value)} />
            </label>
            <label>
              Last Post Occupied:
              <input className="input-field" type="text" value={lastPostOccupied} onChange={(e) => setLastPostOccupied(e.target.value)} />
            </label>
            <label>
              CV:
              <input className="input-field" type="file" onChange={(e) => setCv(e.target.files[0])} />
            </label>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CandidatsP;