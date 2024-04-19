import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import Header from '../HomePage/Header';

function Recruiters() {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3500/recruiters')
            .then(response => setRecruiters(response.data))
            .catch(error => console.error("Erreur de chargement", error));
    }, []);

    return (
        <>
            <Header />
            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Liste des Recruteurs</h1>
                    {recruiters.map(recruiter => (
                        <RecruiterDetail recruiter={recruiter} setRecruiters={setRecruiters} key={recruiter._id} />
                    ))}
                    <div className="text-center mt-4">
                        <Link to="/dash/add-recruiter" className="btn btn-primary">Ajouter un recruteur</Link>
                    </div>
                </div>

            </section>
            <section className="upcoming-meetings" id="meetings">
                <Footer />
            </section>
        </>
    );
}

function RecruiterDetail({ recruiter, setRecruiters }) {
    const [enEdition, setEnEdition] = useState(false);
    const [donneesEdition, setDonneesEdition] = useState({ ...recruiter });

    const activerEdition = () => setEnEdition(true);
    const desactiverEdition = () => setEnEdition(false);

    const sauvegarder = () => {
        axios.put(`http://127.0.0.1:3500/recruiters/${recruiter._id}`, donneesEdition)
            .then(response => {
                setRecruiters(prev => prev.map(r => r._id === recruiter._id ? { ...response.data } : r));
                desactiverEdition();
            })
            .catch(error => console.error("Erreur lors de la mise à jour", error));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setDonneesEdition(prev => ({ ...prev, [name]: value }));
    };

    const handleDelete = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce recruteur ?")) {
            try {
                const response = await axios.delete(`http://192.168.50.4:5000/recruiters/${recruiter._id}`);
                if (response.status === 200 || response.status === 204) {
                    setRecruiters(prevRecruiters => prevRecruiters.filter(r => r._id !== recruiter._id));
                }
            } catch (error) {
                console.error("Erreur lors de la suppression du recruteur", error);
            }
        }
    };

    return (
        <div key={recruiter._id} className="card mb-3">
            {enEdition ? (
                <div className="card-body">
                    <input className="form-control mb-2" name="name" placeholder="Nom" value={donneesEdition.name} onChange={handleChange} />
                    <input className="form-control mb-2" name="email" placeholder="Email" value={donneesEdition.email} onChange={handleChange} />
                    <input className="form-control mb-2" name="company" placeholder="Entreprise" value={donneesEdition.company} onChange={handleChange} />
                    <button className="btn btn-success me-2" onClick={sauvegarder}>Sauvegarder</button>
                    <button className="btn btn-secondary" onClick={desactiverEdition}>Annuler</button>
                </div>
            ) : (
                <div className="card-body">

                    <h5 className="card-title">{recruiter.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{recruiter.email}</h6>
                    <p className="card-text">{recruiter.company}</p>
                    <MdDeleteForever onClick={handleDelete} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                    <FaEdit onClick={activerEdition} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                </div>
            )}
        </div>
    );
}

export default Recruiters;
