import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function Alumni() {
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.50.4:5000/alumnis')
            .then(response => setAlumni(response.data))
            .catch(error => console.error("Error loading alumni", error));
    }, []);

    const handleDelete = async (alumniId) => {
        if (window.confirm("Are you sure you want to delete this alumni?")) {
            try {
                const response = await axios.delete(`http://192.168.50.4:5000/alumnis/${alumniId}`);
                if (response.status === 200 || response.status === 204) {
                    setAlumni(prevAlumni => prevAlumni.filter(alum => alum._id !== alumniId));
                }
            } catch (error) {
                console.error("Error deleting alumni", error);
            }
        }
    };

    const handleEdit = (alumniId, updatedData) => {
        axios.patch(`http://192.168.50.4:5000/alumnis/${alumniId}`, updatedData)
            .then(response => {
                setAlumni(prevAlumni => prevAlumni.map(alum => {
                    if (alum._id === alumniId) {
                        return { ...alum, ...response.data };
                    }
                    return alum;
                }));
            })
            .catch(error => console.error("Error updating alumni", error));
    };

    return (
        <>
            <HeaderClient />
            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 className="text-center mb-4">List of Alumni</h1>
                    {alumni.map(alum => (
                        <AlumniCard
                            key={alum._id}
                            alumni={alum}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
                <Footer />
            </section>
        </>
    );
}

function AlumniCard({ alumni, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...alumni });

    const activateEdit = () => setIsEditing(true);
    const deactivateEdit = () => setIsEditing(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setEditedData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = () => {
        onEdit(alumni._id, editedData);
        deactivateEdit();
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control mb-2" name="name" value={editedData.name} onChange={handleChange} placeholder="Name" required />
                                <input type="text" className="form-control mb-2" name="lastname" value={editedData.lastname} onChange={handleChange} placeholder="Lastname" required />
                                <input type="email" className="form-control mb-2" name="email" value={editedData.email} onChange={handleChange} placeholder="Email" required />
                                <input type="text" className="form-control mb-2" name="diploma" value={editedData.diploma} onChange={handleChange} placeholder="Diploma" required />
                                <input type="text" className="form-control mb-2" name="actualPost" value={editedData.actualPost} onChange={handleChange} placeholder="Actual Post" required />
                                <input type="number" className="form-control mb-2" name="nbrYearsOfExperience" value={editedData.nbrYearsOfExperience} onChange={handleChange} placeholder="Number of Years of Experience" required />
                                <input type="text" className="form-control mb-2" name="lastPostOccupied" value={editedData.lastPostOccupied} onChange={handleChange} placeholder="Last Post Occupied" required />
                                <div className="mb-2">
                                    <label htmlFor="cv" className="form-label">CV (PDF only):</label>
                                    <input type="file" accept=".pdf" name="cv" id="cv" className="form-control" onChange={handleChange} required />
                                </div>
                                <input type="date" className="form-control mb-2" name="dateOfBirth" value={editedData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control mb-2" name="address" value={editedData.address} onChange={handleChange} placeholder="Address" required />
                                <input type="text" className="form-control mb-2" name="city" value={editedData.city} onChange={handleChange} placeholder="City" required />
                                <input type="text" className="form-control mb-2" name="postalCode" value={editedData.postalCode} onChange={handleChange} placeholder="Postal Code" required />
                                <input type="text" className="form-control mb-2" name="country" value={editedData.country} onChange={handleChange} placeholder="Country" required />
                                <input type="text" className="form-control mb-2" name="phoneNumber" value={editedData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
                                <input type="text" className="form-control mb-2" name="skills" value={editedData.skills} onChange={handleChange} placeholder="Skills" required />
                                <input type="text" className="form-control mb-2" name="languages" value={editedData.languages} onChange={handleChange} placeholder="Languages" required />
                                <input type="text" className="form-control mb-2" name="linkedinProfile" value={editedData.linkedinProfile} onChange={handleChange} placeholder="LinkedIn Profile" required />
                                <div className="mb-2">
                                    <label htmlFor="profileImage" className="form-label">Profile Image:</label>
                                    <input type="file" accept=".png, .jpg, .jpeg" name="profileImage" id="profileImage" className="form-control" onChange={handleChange} required />
                                </div>
                                <input type="number" className="form-control mb-2" name="graduationYear" value={editedData.graduationYear} onChange={handleChange} placeholder="graduationYear" required />
                                <input type="text" className="form-control mb-2" name="achievements" value={editedData.achievements} onChange={handleChange} placeholder="achievements" required />
                            </div>
                        </div>
                        <button className="btn btn-success me-2" onClick={saveChanges}>Save</button>
                        <button className="btn btn-secondary" onClick={deactivateEdit}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h5 className="card-title">{alumni.name} {alumni.lastname}</h5>
                        <h6 className="card-text">Email: {alumni.email}</h6>
                        <p className="card-text">Address: {alumni.address}</p>
                        <p className="card-text">Diploma: {alumni.diploma}</p>
                        <p className="card-text">skills: {alumni.skills}</p>
                        <p className="card-text">Actual Post: {alumni.actualPost}</p>
                        
                        <MdDeleteForever onClick={() => onDelete(alumni._id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                        <FaEdit onClick={activateEdit} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Alumni;
