import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';



  function StaffAdmin() {
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.50.4:5000/staff')
            .then(response => setStaffs(response.data))
            .catch(error => console.error("Erreur de chargement", error));
    }, []);

    return (

        <>
         <main className='main-container'>
            <section >
                <div className="container my-5">
                <h1 className="text-center mb-4 black-text">Staff List</h1>
                                    {staffs.map(staff => (
                        <Staff staff={staff} setStaffs={setStaffs} key={staff._id} />
                    ))}
                    <div className="text-center mt-4">
                        <Link to="/admin/addStaffAdmin" className="btn btn-danger">Add staff</Link>
                    </div>
                </div>

            </section>
            </main>
        </>
    );
}
  
  function Staff({ staff, setStaffs }) {
    const [enEdition, setEnEdition] = useState(false);
    const [donneesEdition, setDonneesEdition] = useState({ ...staff });

    const activerEdition = () => setEnEdition(true);
    const desactiverEdition = () => setEnEdition(false);

    useEffect(() => {
        const fetchStaff = async () => {
            const result = await axios('http://192.168.50.4:5000/staff');
            setStaffs(result.data);
        };

        fetchStaff();
    }, []);


    const sauvegarder = () => {
        axios.patch(`http://192.168.50.4:5000/staff/${staff._id}`, donneesEdition)
            .then(response => {
              setStaffs(prev => prev.map(ev => ev._id === staff._id ? { ...response.data } : ev));
                desactiverEdition();
            })
            .catch(error => console.error("Erreur lors de la mise à jour", error));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setDonneesEdition(prev => ({ ...prev, [name]: value }));
    };


    const handleDelete = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
            try {
                const response = await axios.delete(`http://192.168.50.4:5000/staff/${staff._id}`);
                if (response.status === 200 || response.status === 204) { // Status 204 est aussi un succès, mais sans contenu.
                  setStaffs(prevEvenements => prevEvenements.filter(ev => ev._id !== staff._id));
                }
            } catch (error) {
                console.error("Erreur lors de la suppression de l'événement", error);
            }
        }
    };

      return (
        
        <div key={staff._id} className="cardadmin mb-3">
            {enEdition ? (
                <div className="card-body">
                    <input className="form-control mb-2" name="name" placeholder="name" value={donneesEdition.name} onChange={handleChange} />
                    <input className="form-control mb-2" name="lastname" placeholder="lastname" value={donneesEdition.lastname} onChange={handleChange} />
                    <input className="form-control mb-2" name="email" placeholder="email" value={donneesEdition.email} onChange={handleChange} />
                    <input className="form-control mb-2" name="diploma" placeholder="diploma" value={donneesEdition.diploma} onChange={handleChange} />
                    <input className="form-control mb-2" name="actualPost" placeholder="actualPost" value={donneesEdition.actualPost} onChange={handleChange} />
                    <input className="form-control mb-2" type="number" name="nbrYearsOfExperience" placeholder="nbrYearsOfExperience" value={donneesEdition.nbrYearsOfExperience} onChange={handleChange} />
                    <input className="form-control mb-2" name="lastPostOccupied" placeholder="lastPostOccupied" value={donneesEdition.lastPostOccupied} onChange={handleChange} />
                    <input className="form-control mb-2" type="date" name="dateOfBirth" value={donneesEdition.dateOfBirth.split('T')[0]} onChange={handleChange} />
                    <input className="form-control mb-2" name="adresse" placeholder="Adresse" value={donneesEdition.adresse} onChange={handleChange} />
                    <input className="form-control mb-2" name="city" placeholder="city" value={donneesEdition.city} onChange={handleChange} />
                    <input className="form-control mb-2" name="postalCode" placeholder="postalCode" value={donneesEdition.postalCode} onChange={handleChange} />
                    <input className="form-control mb-2" name="country" placeholder="country" value={donneesEdition.country} onChange={handleChange} />
                    <input className="form-control mb-2" type="number" name="phoneNumber" placeholder="phoneNumber" value={donneesEdition.phoneNumber} onChange={handleChange} />

                   
                    <button className="btn btn-success me-2" onClick={sauvegarder}>Sauvegarder</button>
                    <button className="btn btn-secondary" onClick={desactiverEdition}>Annuler</button>
                </div>
            ) : (
                <div className="card-body">
                    <h5 className="card-title">{staff.name} {staff.lastname}</h5>
                    <p className="card-text"><strong>Email: </strong>{staff.email}</p>  
                    <p className="card-text"><strong>Diploma: </strong>{staff.diploma}</p>     
                    <p className="card-text"><strong>Actual Post: </strong>{staff.actualPost}</p>     
                    <p className="card-text"><strong>Years of experience: </strong>{staff.nbrYearsOfExperience}</p>     
                    <p className="card-text"><strong>Last post occupied: </strong>{staff.lastPostOccupied}</p>  
                    <p className="card-text"><strong>Date of birth: </strong>{new Date(staff.dateOfBirth).toLocaleDateString()}</p>   
                    <p className="card-text"><strong>Adress: </strong>{staff.address}</p>  
                    <p className="card-text"><strong>City: </strong>{staff.city}</p>     
                    <p className="card-text"><strong>Postal code: </strong>{staff.postalCode}</p>     
                    <p className="card-text"><strong>Country: </strong>{staff.country}</p>  
                    <p className="card-text"><strong>Phone number: </strong>{staff.phoneNumber}</p>        
      
                        

                    <MdDeleteForever onClick={handleDelete} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />

                    <FaEdit onClick={activerEdition} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                </div>
            )}
        </div>
    );
  }


export default StaffAdmin