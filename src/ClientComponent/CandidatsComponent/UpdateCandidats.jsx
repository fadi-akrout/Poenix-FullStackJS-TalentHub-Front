import React, { useState } from 'react';
import './UpdateCandidats.css'; 
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import axios from 'axios'; // Import axios for making HTTP requests

function UpdateCandidats() {
  const [candidateId, setCandidateId] = useState('');
  const [diploma, setDiploma] = useState('');
  const [actualPost, setActualPost] = useState('');
  const [nbrYearsOfExperience, setNbrYearsOfExperience] = useState('');
  const [lastPostOccupied, setLastPostOccupied] = useState('');
  const [cv, setCv] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`/api/candidates/${candidateId}`, {
        diploma,
        actualPost,
        nbrYearsOfExperience,
        lastPostOccupied,
        cv
      });

      
      console.log('Candidate updated successfully:', response.data);

      setCandidateId('');
      setDiploma('');
      setActualPost('');
      setNbrYearsOfExperience('');
      setLastPostOccupied('');
      setCv(null);
    } catch (error) {
      // Handle error response
      console.error('Error updating candidate:', error);
    }
  };

  return (
    <>
      <div>
        <HeaderClient />
      </div>
      
      <section className="upcoming-meetings" >
        <div className='grid-container_UpdateCandidats'>
          <div className="form-container">
            <h2>Update Candidate Information</h2>
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
              <button className="submit-button" type="submit">Update</button>
            </form>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </section>
    </>
  );
}

export default UpdateCandidats;
