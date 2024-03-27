import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function AddRecruiter() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phoneNumber: '',
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

        // Vérifiez que tous les champs sont remplis
        const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
        if (!areFieldsFilled) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Si les vérifications sont passées, continuez avec la soumission
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
            <HeaderClient />
            <section className="contact-us" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="row">
            <div className="col-lg-12">
                    <form onSubmit={handleSubmit} id="contact">
                    <div className="col-lg-12">
                    <h2>Register as recruiter</h2>
                  </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom du recruteur:</label>
                            <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="company" className="form-label">Entreprise:</label>
                            <input type="text" id="company" className="form-control" name="company" value={formData.company} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Numero de télephone:</label>
                            <input type="text" id="phoneNumber" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter le recruteur</button>
                    </form>
                </div>
                <Footer />
                </div>
                </div>
                </div>
                </div>

            </section>
        </>
    );
}

export default AddRecruiter;
