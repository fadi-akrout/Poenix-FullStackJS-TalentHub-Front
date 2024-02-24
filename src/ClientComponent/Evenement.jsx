import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Evenements() {
    const [evenements, setEvenements] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/evenements')
            .then(response => {
                setEvenements(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur !", error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des Événements</h1>
            {evenements.map(evenement => (
                <div key={evenement._id}>
                    <h2>{evenement.nom}</h2>
                    <p>{evenement.description}</p>
                    {/* Plus de détails ici */}
                </div>
            ))}
        </div>
    );
}

export default Evenements;
