import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../HomePage/Header';
import Footer from '../Dashboard/Footer';
import useAuth from '../../hooks/useAuth'

function Evenements() {
    const [evenements, setEvenements] = useState([]);
    const { username,email, isTeacher,isStudent,isAdmin ,isRecruter} = useAuth()

    useEffect(() => {
        axios.get('http://192.168.50.4:5000/evenements')
            .then(response => setEvenements(response.data))
            .catch(error => console.error("Erreur de chargement", error));
    }, []);

    return (

        <>


            <section className="upcoming-meetings" id="meetings">
                <div className="container my-5">
                    <h1 className="text-center mb-4" style={{ color: 'white' }}>Events</h1>
                    {evenements.map(evenement => (
                        <Evenement evenement={evenement} setEvenements={setEvenements} key={evenement._id} />
                    ))}
                     {( isAdmin || isRecruter || isTeacher) &&
                    <div className="text-center mt-4">
                        <Link to="/dash/add-event" className="btn btn-danger">Add event</Link>
                    </div>}
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


    useEffect(() => {
        const fetchEvenements = async () => {
            const result = await axios('http://192.168.50.4:5000/evenements');
            setEvenements(result.data);
        };

        fetchEvenements();
    }, []);


    const sauvegarder = () => {
        axios.patch(`http://192.168.50.4:5000/evenements/${evenement._id}`, donneesEdition)
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
        if (window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS EVENT")) {
            try {
                const response = await axios.delete(`http://192.168.50.4:5000/evenements/${evenement._id}`);
                if (response.status === 200 || response.status === 204) { // Status 204 est aussi un succès, mais sans contenu.
                    setEvenements(prevEvenements => prevEvenements.filter(ev => ev._id !== evenement._id));
                }
            } catch (error) {
                console.error("Erreur lors de la suppression de l'événement", error);
            }
        }
    };




    return (

        <div key={evenement._id} className="card mb-1">
            {enEdition ? (
                <div className="card-body">
                    <input className="form-control mb-2" name="nom" placeholder="Name" value={donneesEdition.nom} onChange={handleChange} />
                    <input className="form-control mb-2" name="adresse" placeholder="Adresse" value={donneesEdition.adresse} onChange={handleChange} />
                    <input className="form-control mb-2" type="date" name="Starting date" value={donneesEdition.dateDebut.split('T')[0]} onChange={handleChange} />
                    <input className="form-control mb-2" type="date" name="Ending date" value={donneesEdition.dateFin.split('T')[0]} onChange={handleChange} />
                    <textarea className="form-control mb-2" name="description" placeholder="Description" value={donneesEdition.description} onChange={handleChange} />
                    <div className="mb-2">
                        <label htmlFor="imageUpload" className="form-label">Image</label>
                        <input className="form-control" type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <button className="btn btn-success me-2" onClick={sauvegarder}>Sauvegarder</button>
                    <button className="btn btn-secondary" onClick={desactiverEdition}>Annuler</button>
                </div>
            ) : (
                <div key={evenement._id} className="card mb-1">
                    <div className="card-body">
                        <div className="row">
                            {/* Event Image */}
                            {evenement.image && (
                                <div className="col-lg-12">
                                    <img src={evenement.image} className="card-img-top mb-1" alt="Event" style={{ width: '100%', height: 'auto' }} />
                                </div>
                            )}

                            {/* Event Details */}
                            <div className="col-lg-12">
                                <h5 className="card-title">{evenement.nom}</h5>
                                <p className="card-text">
                                    <strong>Adresse:</strong> {evenement.adresse}
                                </p>
                                <p className="card-text">
                                    <strong>Periode:</strong> {new Date(evenement.dateDebut).toLocaleDateString()} - {new Date(evenement.dateFin).toLocaleDateString()}
                                </p>
                                <p className="card-text">{evenement.description}</p>
                            </div>
                        </div>

                        {/* Event Actions */}
                        <div className="card-footer">
                            {(isAdmin || isRecruter || isTeacher) &&
                                <FaEdit onClick={activerEdition} style={{ cursor: 'pointer', color: '#0d6efd', marginRight: '10px' }} />
                            }
                            {(isAdmin || isRecruter || isTeacher) &&
                                <MdDeleteForever onClick={handleDelete} style={{ cursor: 'pointer', color: 'red' }} />
                            }
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}



export default Evenements;
