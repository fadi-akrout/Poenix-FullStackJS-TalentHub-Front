import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';


function EvenementForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nom: '',
        adresse: '',
        dateDebut: '',
        dateFin: '',
        description: '',
        image: ''
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

        // Vérifiez que la date de début est antérieure à la date de fin
        if (new Date(formData.dateDebut).getTime() >= new Date(formData.dateFin).getTime()) {
            alert("La date de début doit être antérieure à la date de fin.");
            return;
        }

        // Si les vérifications sont passées, continuez avec la soumission
        try {
            const response = await axios.post('http://localhost:3500/evenements', formData);
            console.log(response.data);
            navigate('/evenements');
        } catch (error) {
            console.error("Il y a eu un problème avec l'envoi du formulaire :", error);
        }
    };
    const handleImageChange = e => {
        // Assuming you want to store the image file in state
        const file = e.target.files[0];
        if (file) {
            // Create a new FileReader object
            const reader = new FileReader();

            // Define what happens on file load
            reader.onload = (upload) => {
                // You can either set the image data in state directly,
                // or perhaps upload it to a server, etc.
                setFormData(prev => ({ ...prev, image: upload.target.result }));
            };

            // Read the file as a Data URL (base64 encoded string)
            reader.readAsDataURL(file);
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
                    <form id="contact" onSubmit={handleSubmit} className="card p-4">
                    <div className="row">
                  <div className="col-lg-12">
                    <h2>Add an Event</h2>
                  </div>
                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label">Nom de l'événement:</label>
                            <input type="text" id="nom" className="form-control" name="nom" value={formData.nom} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="adresse" className="form-label">Adresse:</label>
                            <input type="text" id="adresse" className="form-control" name="adresse" value={formData.adresse} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateDebut" className="form-label">Date de début:</label>
                            <input type="datetime-local" id="dateDebut" className="form-control" name="dateDebut" value={formData.dateDebut} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateFin" className="form-label">Date de fin:</label>
                            <input type="datetime-local" id="dateFin" className="form-control" name="dateFin" value={formData.dateFin} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea id="description" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageUpload" className="form-label">Image</label>
                            <input className="form-control" type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter l'événement</button>
                    </div>
                    </form>
                </div>
                </div>
          </div>
        </div>
       
    </div>
                </section>
        </>
    );
}

export default EvenementForm;
