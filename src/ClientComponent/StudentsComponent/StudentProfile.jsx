import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PDFGeneratorButton from '../PDFGeneratorButton';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function StudentProfile() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams(); // Récupère l'ID de l'URL

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/students/a/${id}`);
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
    const candidate = {
        name: profile.name,
        lastname: profile.lastname,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        linkedinProfile: profile.linkedinProfile,
        nbrYearsOfExperience: profile.nbrYearsOfExperience,
        diploma: profile.diploma,
        skills: profile.skills, // Supposant que c'est déjà un tableau
        languages: profile.languages, // Supposant que c'est déjà un tableau
    };
    const formattedDateOfBirth = new Date(profile.dateOfBirth).toLocaleDateString();


    return (
        <>
        <HeaderClient />
        <section className="upcoming-meetings py-5" id="meetings">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h1 className="card-title text-center">Student Profile</h1>
                    <div className="profile-info mt-4">
                      <p><strong>Name:</strong> {profile.name} {profile.lastname}</p>
                      <p><strong>Email:</strong> {profile.email}</p>
                      <p><strong>Diploma:</strong> {profile.diploma}</p>
                      <p><strong>Current Position:</strong> {profile.actualPost}</p>
                      <p><strong>Experience:</strong> {profile.nbrYearsOfExperience} years</p>
                      <p><strong>Last Position:</strong> {profile.lastPostOccupied}</p>
                      <p><strong>Date of Birth:</strong> {formattedDateOfBirth}</p>
                      <p><strong>Address:</strong> {profile.address}, {profile.city}, {profile.postalCode}, {profile.country}</p>
                      <p><strong>Phone:</strong> {profile.phoneNumber}</p>
                      <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
                      <p><strong>Languages:</strong> {profile.languages.join(', ')}</p>
                      <p><strong>LinkedIn:</strong> <a href={profile.linkedinProfile} target="_blank" rel="noopener noreferrer">{profile.linkedinProfile}</a></p>
                    </div>
                    <PDFGeneratorButton candidate={profile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}

export default StudentProfile;
