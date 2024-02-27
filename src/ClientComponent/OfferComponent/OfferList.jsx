import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

function OfferList() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/offers')
            .then(response => {
                setOffers(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur !", error);
            });
    }, []);

    return (
        <>
            <div>    <HeaderClient />
            </div>
            <section className="upcoming-meetings" id="meetings">
                <div className="container">
                    {offers.map(offer => (
                        <div key={offer._id}>
                            <div className="col-lg-8">
                                <div className="meeting-item">
                                    <div className="thumb">
                                        <div className="price">

                                        </div>
                                        <img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting" />
                                    </div>
                                    <div className="down-content">
                                        <div className="date">
                                            <h6>Mar <span>10</span></h6>
                                        </div>
                                        <h4>{offer.Title}</h4>
                                        <p>{offer.Experience_required}</p>
                                        <p>{offer.Domain}</p>
                                        <p>{offer.Mission}</p>
                                        <p>{offer.Salary}</p>
                                        <p>{offer.Speciality}</p>
                                        <p>{offer.JobType}</p>
                                        <p>{offer.JobCity}</p>
                                        <div className="main-button-red">
                                            <li className="scroll-to-section"><Link to="/CandidatsP">Postulez Maintenant</Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    ))}

                </div>
                <div> <Footer />
                </div>
            </section>

        </>
    );
}

export default OfferList