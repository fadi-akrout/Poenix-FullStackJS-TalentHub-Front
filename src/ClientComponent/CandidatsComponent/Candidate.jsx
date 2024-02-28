import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/candidates')
            .then(response => setCandidates(response.data))
            .catch(error => console.error("Error loading candidates", error));
    }, []);

    const handleDelete = async (candidateId) => {
        if (window.confirm("Are you sure you want to delete this candidate?")) {
            try {
                const response = await axios.delete(`http://localhost:3500/candidates/${candidateId}`);
                if (response.status === 200 || response.status === 204) { // Status 204 is also a success, but without content.
                    setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate._id !== candidateId));
                }
            } catch (error) {
                console.error("Error deleting candidate", error);
            }
        }
    };

    return (
        <>
            <HeaderClient />
            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 className="text-center mb-4">List of Candidates</h1>
                    {candidates.map(candidate => (
                        <Candidate candidate={candidate} key={candidate._id} onDelete={handleDelete} />
                    ))}
                    <div className="text-center mt-4">
                        <Link to="/add-candidate" className="btn btn-primary">Add Candidate</Link>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

function Candidate({ candidate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...candidate });

    const activateEdit = () => setIsEditing(true);
    const deactivateEdit = () => setIsEditing(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setEditedData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = () => {
        axios.patch(`http://localhost:3500/candidates/${candidate._id}`, editedData)
            .then(response => {
                setCandidates(prev => prev.map(c => c._id === candidate._id ? { ...response.data } : c));
                deactivateEdit();
            })
            .catch(error => console.error("Error updating candidate", error));
    };

    return (
        <div key={candidate._id} className="card mb-3">
            {isEditing ? (
                <div className="card-body">
                    {/* Candidate form fields for editing */}
                    {/* Similar structure as the Evenement form fields */}
                    <button className="btn btn-success me-2" onClick={saveChanges}>Save</button>
                    <button className="btn btn-secondary" onClick={deactivateEdit}>Cancel</button>
                </div>
            ) : (
                <div className="card-body">
                    {/* Display candidate information */}
                    <h5 className="card-title">{candidate.name} {candidate.lastname}</h5>
                    <p className="card-text">Email: {candidate.email}</p>
                    {/* Add more fields as needed */}
                    <MdDeleteForever onClick={() => onDelete(candidate._id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                    <FaEdit onClick={activateEdit} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                </div>
            )}
        </div>
    );
}

export default Candidates;
