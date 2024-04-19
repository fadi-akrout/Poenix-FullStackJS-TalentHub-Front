import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StudentProfile() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams(); // Récupère l'ID de l'URL

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://192.168.50.4:5000/students/a/${id}`);
                setProfile(response.data);
            } catch (error) {
                setError('Erreur lors du chargement du profil');
                console.error('Erreur lors du chargement du profil', error);
            }
        };

        fetchProfile();
    }, [id]); // Dépendance à l'ID pour recharger le profil si l'ID change

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!profile) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className="profile-container">
            <h1>Student Profile</h1>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Lastname:</strong> {profile.lastname}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Diploma:</strong> {profile.diploma}</p>
            <p><strong>Actual Post:</strong> {profile.actualPost}</p>
            <p><strong>Number of Years of Experience:</strong> {profile.nbrYearsOfExperience}</p>
            <p><strong>Last Post Occupied:</strong> {profile.lastPostOccupied}</p>
            <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>City:</strong> {profile.city}</p>
            <p><strong>Postal Code:</strong> {profile.postalCode}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            <p><strong>Skills:</strong> {profile.skills.join(', ')}</p> {/* Si les compétences sont un tableau */}
            <p><strong>Languages:</strong> {profile.languages.join(', ')}</p> {/* Si les langues sont un tableau */}
            <p><strong>LinkedIn Profile:</strong> {profile.linkedinProfile}</p>
            {/* Ici, vous pouvez ajouter plus de champs en fonction des données de votre profil */}
        </div>
    );
}

export default StudentProfile;
