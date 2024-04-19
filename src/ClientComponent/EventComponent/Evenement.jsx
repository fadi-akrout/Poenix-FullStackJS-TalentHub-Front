/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../HomePage/Header';
import Footer from '../Dashboard/Footer';

import './Event.css'

import useAuth from '../../hooks/useAuth'


function Evenements() {
    const [evenements, setEvenements] = useState([]);
    const {isAdmin, isRecruter, isTeacher } = useAuth()
    useEffect(() => {
        axios.get('http://localhost:3500/evenements')
            .then(response => setEvenements(response.data))
            .catch(error => console.error("Erreur de chargement", error));
    }, []);

    return (
        <>

            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 style={{color:'white'}} className="text-center mb-4">Liste des Événements</h1>
                    <div className="row">
                        {evenements.map(evenement => (
                            <div className="col-md-6 col-lg-4 mb-3" key={evenement._id}>
                                <Evenement evenement={evenement} setEvenements={setEvenements} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                    {(isAdmin || isRecruter || isTeacher) &&  <Link to="/dash/add-event" className="btn btn-danger">Ajouter un événement</Link>}
                    </div>
                </div>
            </section>

        </>
    );
}

function Evenement({ evenement, setEvenements }) {
    const [enEdition, setEnEdition] = useState(false);
    const [donneesEdition, setDonneesEdition] = useState({ ...evenement });

    const activerEdition = () => setEnEdition(true);
    const desactiverEdition = () => setEnEdition(false);
    const { username, email, isTeacher, isStudent, isAdmin, isRecruter } = useAuth()


    const handleChange = e => {
        const { name, value } = e.target;
        setDonneesEdition(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setDonneesEdition(prev => ({ ...prev, image: upload.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const sauvegarder = () => {
        axios.patch(`http://localhost:3500/evenements/${evenement._id}`, donneesEdition)
            .then(response => {
                setEvenements(prev => prev.map(ev => ev._id === evenement._id ? { ...response.data } : ev));
                desactiverEdition();
            })
            .catch(error => console.error("Erreur lors de la mise à jour", error));
    };

    const handleDelete = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
            try {
                const response = await axios.delete(`http://localhost:3500/evenements/${evenement._id}`);
                if (response.status === 200 || response.status === 204) {
                    setEvenements(prevEvenements => prevEvenements.filter(ev => ev._id !== evenement._id));
                }
            } catch (error) {
                console.error("Erreur lors de la suppression de l'événement", error);
            }
        }
    };

    return (
        <div className="card h-100">
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
                <div className="card">
                    <img className="card-img-top" src={evenement.image} alt={evenement.nom} />
                    <div className="card-body">

                        <h5 className="card-title">{evenement.nom}</h5>
                        <p className="card-text">{evenement.adresse}</p>
                        <p className="card-text">
                            Période: {new Date(evenement.dateDebut).toLocaleDateString()} - {new Date(evenement.dateFin).toLocaleDateString()}
                        </p>
                        <p className="card-text">{evenement.description}</p>
                    </div>
                    <div className="card-footer">
                        {(isAdmin || isRecruter || isTeacher) &&
                            <FaEdit onClick={activerEdition} style={{ cursor: 'pointer', color: '#0d6efd', marginRight: '10px' }} />
                        }
                        {(isAdmin || isRecruter || isTeacher) &&
                            <MdDeleteForever onClick={handleDelete} style={{ cursor: 'pointer', color: 'red' }} />
                        }

                    </div>
                </div>
            )}
        </div>
    );
}

export default Evenements;
 */