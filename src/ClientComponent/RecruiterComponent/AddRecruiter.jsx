import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import Header from '../HomePage/Header';

function AddRecruiter() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        if (!formData.name.trim()) newErrors.name = "Le nom du recruteur est requis.";
        if (!formData.email.trim()) newErrors.email = "L'email est requis.";
        if (!formData.company.trim()) newErrors.company = "Le nom de l'entreprise est requis.";
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Le numéro de téléphone est requis.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post('http://localhost:3500/recruiters', formData);
            console.log(response.data);
            navigate('/dash/recruiters');
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
                                    <label htmlFor="name" className="form-label">Nom du recruteur:</label>
                                    <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">Entreprise:</label>
                                    <input type="text" id="company" className="form-control" name="company" value={formData.company} onChange={handleChange} required />
                                    {errors.company && <div className="text-danger">{errors.company}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone:</label>
                                    <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">Ajouter le recruteur</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className="upcoming-meetings" id="meetings">
                <Footer />

            </section>
            <section className="upcoming-meetings" id="meetings">
             <Footer />
           </section>
        </>
    );
}

export default AddRecruiter;
