import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'

/* function navigateToUpdateOffer(offerId) {
    const navigate = useNavigate();
    navigate(`/updateoffer/${offerId}`);
  } */
function OfferList() {
    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:3500/offers')
            .then(response => {
                setOffers(response.data);
            })
            .catch(error => {
                console.error("Il y a eu une erreur !", error);
            });
    }, []);
    const handleDelete = (id) => {
        axios.delete('http://localhost:3500/offers/' + id)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
            .catch(error => {
                console.error("Il y a eu une erreur !", error);
            });

    }
    const navigateToUpdateOffer = (offerId) => {
        navigate(`/updateoffer/${offerId}`);
    }

  // Slice the offers array to display only the first four offers
  const displayedOffers = offers.slice(0, 4);
    return (
        <>
            <section className="upcoming-meetings" id="meetings">
                <div className="container">
                    <div className="row">
                        {displayedOffers.map(offer => (
                            <div key={offer._id} className="col-lg-6 col-md-6 col-sm-12">
                                <div className="meeting-item">
                                    <div className="thumb">
                                        <div className="price"></div>
                                        <img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting" />
                                    </div>
                                    <div className="down-content">
                                        <div className="job-offer">
                                            <h4 className="job-title">{offer.Title}</h4>
                                            <div className="job-details">
                                                <p className="job-info"><span className="info-label"><strong>Experience Required:</strong></span> {offer.Experience_required}</p>
                                                <p className="job-info"><span className="info-label"><strong>Domain:</strong></span> {offer.Domain}</p>
                                                <p className="job-info"><span className="info-label"><strong>Mission:</strong></span> {offer.Mission}</p>
                                                <p className="job-info"><span className="info-label"><strong>Salary:</strong></span> {offer.Salary}</p>
                                                <p className="job-info"><span className="info-label"><strong>Speciality:</strong></span> {offer.Speciality}</p>
                                                <p className="job-info"><span className="info-label"><strong>Job Type:</strong></span> {offer.JobType}</p>
                                                <p className="job-info"><span className="info-label"><strong>Job City:</strong></span> {offer.JobCity}</p>
                                                <Feedback offerId={offer._id} />
                                            </div>
                                        </div>
                                        <div className="main-button-red">
                                            <li className="scroll-to-section"><Link to="/signup">Apply now</Link></li>
                                        </div>
                                        {/* <MdDeleteForever onClick={(e) => handleDelete(offer._id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                                        <FaEdit onClick={() => navigateToUpdateOffer(offer._id)} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                                   */}  </div>
                                    <div className="feedback">
                                        {[...Array(5)].map((star, index) => {
                                            const ratingValue = index + 1;

                                            return (
                                            <label key={index}>
                                                <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => handleRating(ratingValue)}
                                                />
                                                <FaStar
                                                className="star"
                                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                                />
                                            </label>
                                            );
                                        })}
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default OfferList;