import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import Profile from '../HomePage/Profile'; 

function StudentForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        diploma: '',
        actualPost: '',
        nbrYearsOfExperience: '',
        lastPostOccupied: '',
        cv: null,
        dateOfBirth: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phoneNumber: '',
        skills: '',
        languages: '',
        linkedinProfile: '',
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Verify that all fields are filled
        const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
        if (!areFieldsFilled) {
            alert("Please fill in all fields.");
            return;
        }
    
        
        try {
            const response = await axios.post('http://localhost:3500/students', formData);
            console.log(response.data);
            
            
            navigate('/Profile', { student: formData }); 

        } catch (error) {
            console.error("There was a problem with form submission:", error);
        }
    };
    

    return (
        <>
            <HeaderClient />
            <section className="upcoming-meetings" id="meetings">
                <div className="container mt-5">
                    <form onSubmit={handleSubmit} className="card p-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 style={{ color: 'Black' }}>Register As Student</h1>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Lastname:</label>
                                    <input type="text" id="lastname" className="form-control" name="lastname" value={formData.lastname} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="diploma" className="form-label">Diploma:</label>
                                    <input type="text" id="diploma" className="form-control" name="diploma" value={formData.diploma} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="actualPost" className="form-label">Actual Post:</label>
                                    <input type="text" id="actualPost" className="form-control" name="actualPost" value={formData.actualPost} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nbrYearsOfExperience" className="form-label">Number of Years of Experience:</label>
                                    <input type="number" id="nbrYearsOfExperience" className="form-control" name="nbrYearsOfExperience" value={formData.nbrYearsOfExperience} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastPostOccupied" className="form-label">Last Post Occupied:</label>
                                    <input type="text" id="lastPostOccupied" className="form-control" name="lastPostOccupied" value={formData.lastPostOccupied} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cv" className="form-label">CV  (PDF only):</label><br/>
                                    <input type="file" accept=".pdf" name="cv" id="cv" className="form-control" onChange={handleChange} required />
                             
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                                    <input type="date" id="dateOfBirth" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <input type="text" id="address" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City:</label>
                                    <input type="text" id="city" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="postalCode" className="form-label">Postal Code:</label>
                                    <input type="text" id="postalCode" className="form-control" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country:</label>
                                    <input type="text" id="country" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                                    <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="skills" className="form-label">Skills (comma-separated):</label>
                            <input type="text" id="skills" className="form-control" name="skills" value={formData.skills} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="languages" className="form-label">Languages (comma-separated):</label>
                            <input type="text" id="languages" className="form-control" name="languages" value={formData.languages} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="linkedinProfile" className="form-label">LinkedIn Profile:</label>
                            <input type="text" id="linkedinProfile" className="form-control" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profileImage" className="form-label">Profile Image:</label>
                            <input type="file" accept=".png, .jpg, .jpeg" id="profileImage" className="form-control" name="profileImage" onChange={handleChange} />
                        </div>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default StudentForm;
