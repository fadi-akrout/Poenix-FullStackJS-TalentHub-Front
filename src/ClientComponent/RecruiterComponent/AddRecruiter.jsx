import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import Header from '../HomePage/Header';
import useAuth from '../../hooks/useAuth'


function AddRecruiter() {
    const { userId } = useAuth()

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phoneNumber: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.company.trim()) newErrors.company = "Company name is required";
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const formDataWithUserId = {
            ...formData,
            user: userId // assuming userId is the correct property name
        };

        try {
            const response = await axios.post('http://localhost:3500/recruiters', formDataWithUserId);
            console.log(response.data);
            navigate('/dash');
        } catch (error) {
            console.error("Il y a eu un problème avec l'envoi du formulaire :", error);
        }
    };

    return (
        <>
            <Header />
            <section className="contact-us" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-self-center">
                            <form onSubmit={handleSubmit} className="card p-4">
                                <div className="col-lg-12">
                                    <h2>Register as Recruiter</h2>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
            
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">Company:</label>
                                    <input type="text" id="company" className="form-control" name="company" value={formData.company} onChange={handleChange} required />
                                    {errors.company && <div className="text-danger">{errors.company}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                    <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">Complete your profile</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className="upcoming-meetings" id="meetings">
             <Footer />
           </section>
        </>
    );
}

export default AddRecruiter;
