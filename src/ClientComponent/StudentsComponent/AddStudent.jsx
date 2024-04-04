import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../Dashboard/Footer';
import useAuth from '../../hooks/useAuth'


function StudentForm() {
    const { userId, isStudent, isAdmin, isRecruter } = useAuth()
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

        phoneNumber: '',
        skills: '',
        languages: '',
        linkedinProfile: '',
        profileImage: null
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
        if (!areFieldsFilled) {
            alert("Please fill in all fields.");
            return;
        }

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.lastname.trim()) newErrors.lastname = "Lastname is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.diploma.trim()) newErrors.diploma = "Diploma is required.";
        if (!formData.actualPost.trim()) newErrors.actualPost = "Actual post is required.";
        if (!formData.nbrYearsOfExperience.trim()) newErrors.nbrYearsOfExperience = "Number of years of experience is required.";
        if (!formData.lastPostOccupied.trim()) newErrors.lastPostOccupied = "Last post occupied is required.";
        if (!formData.cv) newErrors.cv = "CV is required.";
        if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Date of birth is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
        if (!formData.skills.trim()) newErrors.skills = "Skills are required.";
        if (!formData.languages.trim()) newErrors.languages = "Languages are required.";
        if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = "LinkedIn profile is required.";
        if (!formData.profileImage) newErrors.profileImage = "Profile image is required.";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleBlur = () => {
        validateForm();
    };
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const formDataWithUserId = {
            ...formData,
            user: userId
        };

        try {
            const response = await axios.post('http://localhost:3500/Students', formDataWithUserId);
            console.log(response.data);



            const response1 = await axios.get(`http://localhost:3500/students/${userId}`);
            console.log("students", response1.data.hasUserRelation);
            let id = response1.data.student._id;
            console.log(id)
            if (response1.data.hasUserRelation) navigate(`/dash/ProfileStudent/${id}`)


        } catch (error) {
            console.error("Il y a eu un problème avec l'envoi du formulaire :", error);
        }
    };


    return (
        <>

            <Header />
            <section className="contact-us" id="contact">
                <div className="container mt-5">
                    <form onSubmit={handleSubmit} id="contact">
                        <div className="row">

                            <div className="col-lg-12">
                                <h2>Register As Student</h2>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Lastname:</label>
                                    <input type="text" id="lastname" className="form-control" name="lastname" value={formData.lastname} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="diploma" className="form-label">Diploma:</label>
                                    <input type="text" id="diploma" className="form-control" name="diploma" value={formData.diploma} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.diploma && <div className="text-danger">{errors.diploma}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="actualPost" className="form-label">Actual Post:</label>
                                    <input type="text" id="actualPost" className="form-control" name="actualPost" value={formData.actualPost} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.actualPost && <div className="text-danger">{errors.actualPost}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nbrYearsOfExperience" className="form-label">Number of Years of Experience:</label>
                                    <input type="number" id="nbrYearsOfExperience" className="form-control" name="nbrYearsOfExperience" value={formData.nbrYearsOfExperience} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.nbrYearsOfExperience && <div className="text-danger">{errors.nbrYearsOfExperience}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastPostOccupied" className="form-label">Last Post Occupied:</label>
                                    <input type="text" id="lastPostOccupied" className="form-control" name="lastPostOccupied" value={formData.lastPostOccupied} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.lastPostOccupied && <div className="text-danger">{errors.lastPostOccupied}</div>}
                                </div>
                                <div className="mb-3">

                                    <label htmlFor="cv" className="form-label">CV  (PDF only):</label><br/>
                                    <input type="file" accept=".pdf" name="cv" id="cv" className="form-control" onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.cv && <div className="text-danger">{errors.cv}</div>}
                             
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                                    <input type="date" id="dateOfBirth" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <input type="text" id="address" className="form-control" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.address && <div className="text-danger">{errors.address}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City:</label>

                                    <input type="text" id="city" className="form-control" name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.city && <div className="text-danger">{errors.city}</div>}

                                </div>
                               
                                <div className="mb-3">

                                    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                                    <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="skills" className="form-label">Skills (comma-separated):</label>
                            <input type="text" id="skills" className="form-control" name="skills" value={formData.skills} onChange={handleChange} onBlur={handleBlur} required />
                            {errors.skills && <div className="text-danger">{errors.skills}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="languages" className="form-label">Languages (comma-separated):</label>
                            <input type="text" id="languages" className="form-control" name="languages" value={formData.languages} onChange={handleChange} onBlur={handleBlur} required />
                            {errors.languages && <div className="text-danger">{errors.languages}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="linkedinProfile" className="form-label">LinkedIn Profile:</label>
                            <input type="text" id="linkedinProfile" className="form-control" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} onBlur={handleBlur} required />
                            {errors.linkedinProfile && <div className="text-danger">{errors.linkedinProfile}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profileImage" className="form-label">Profile Image:</label>
                            <input type="file" accept=".png, .jpg, .jpeg" id="profileImage" className="form-control" name="profileImage" onChange={handleChange} onBlur={handleBlur} />
                            {errors.profileImage && <div className="text-danger">{errors.profileImage}</div>}
                        </div>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-danger">Complete your profile</button>
                    </form>
                </div>

            </section>
            <section className="upcoming-meetings" id="meetings">
                <Footer />
            </section>
        </>
    );
}
}

export default StudentForm;