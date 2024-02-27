import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function Evenements() {
    const [evenements, setEvenements] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/evenements')
            .then(response => setEvenements(response.data))
            .catch(error => console.error("Erreur de chargement", error));
    }, []);

    return (

        <>
            <HeaderClient />
            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Liste des Événements</h1>
                    {evenements.map(evenement => (
                        <Evenement evenement={evenement} setEvenements={setEvenements} key={evenement._id} />
                    ))}
                    <div className="text-center mt-4">
                        <Link to="/add-event" className="btn btn-primary">Ajouter un événement</Link>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

function Evenement({ evenement, setEvenements }) {
    const [enEdition, setEnEdition] = useState(false);
    const [donneesEdition, setDonneesEdition] = useState({ ...evenement });

    const activerEdition = () => setEnEdition(true);
    const desactiverEdition = () => setEnEdition(false);

    useEffect(() => {
        const fetchEvenements = async () => {
            const result = await axios('http://localhost:3500/evenements');
            setEvenements(result.data);
        };

        fetchEvenements();
    }, []);


    const sauvegarder = () => {
        axios.patch(`http://localhost:3500/evenements/${evenement._id}`, donneesEdition)
            .then(response => {
                setEvenements(prev => prev.map(ev => ev._id === evenement._id ? { ...response.data } : ev));
                desactiverEdition();
            })
            .catch(error => console.error("Erreur lors de la mise à jour", error));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setDonneesEdition(prev => ({ ...prev, [name]: value }));
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
                setDonneesEdition(prev => ({ ...prev, image: upload.target.result }));
            };

            // Read the file as a Data URL (base64 encoded string)
            reader.readAsDataURL(file);
        }
    };
    const handleDelete = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
            try {
                const response = await axios.delete(`http://localhost:3500/evenements/${evenement._id}`);
                if (response.status === 200 || response.status === 204) { // Status 204 est aussi un succès, mais sans contenu.
                    setEvenements(prevEvenements => prevEvenements.filter(ev => ev._id !== evenement._id));
                }
            } catch (error) {
                console.error("Erreur lors de la suppression de l'événement", error);
            }
        }
    };




    return (
        <div key={evenement._id} className="card mb-3">
            {enEdition ? (
                <div className="card-body">
                    <input className="form-control mb-2" name="nom" placeholder="Nom" value={donneesEdition.nom} onChange={handleChange} />
                    <input className="form-control mb-2" name="adresse" placeholder="Adresse" value={donneesEdition.adresse} onChange={handleChange} />
                    <input className="form-control mb-2" type="date" name="dateDebut" value={donneesEdition.dateDebut.split('T')[0]} onChange={handleChange} />
                    <input className="form-control mb-2" type="date" name="dateFin" value={donneesEdition.dateFin.split('T')[0]} onChange={handleChange} />
                    <textarea className="form-control mb-2" name="description" placeholder="Description" value={donneesEdition.description} onChange={handleChange} />
                    <div className="mb-2">
                        <label htmlFor="imageUpload" className="form-label">Image</label>
                        <input className="form-control" type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <button className="btn btn-success me-2" onClick={sauvegarder}>Sauvegarder</button>
                    <button className="btn btn-secondary" onClick={desactiverEdition}>Annuler</button>
                </div>
            ) : (
                <div className="card-body">
                    <h5 className="card-title">{evenement.nom}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{evenement.adresse}</h6>
                    <p className="card-text">Début: {new Date(evenement.dateDebut).toLocaleDateString()}</p>
                    <p className="card-text">Fin: {new Date(evenement.dateFin).toLocaleDateString()}</p>
                    <p className="card-text">{evenement.description}</p>
                    {evenement.image && <img src={evenement.image} className="card-img-bottom" alt="Event" style={{ maxWidth: '20%', height: 'auto' }} />}
                    <MdDeleteForever onClick={handleDelete} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />

                    <FaEdit onClick={activerEdition} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                </div>
            )}
        </div>
    );
}



export default Evenements;
