import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
function Offers() {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:3500/offers')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
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
    navigate(`./updateoffer/${offerId}`);
}

  return (
    <section className="upcoming-meetings" id="meetings">
      <div className="container">
        <div className="row justify-content-center">
          {offers.map((offer) => (
            <div key={offer._id} className="justify-content-center col-lg-8 col-md-4 col-sm-8 mb-6"> {/* Adjusted col widths */}
              <div className="card h-100"> 
                <img src="assets/images/meeting-01.jpg" className="card-img-top" alt="Offer" />
                <div className="card-body">
                  <h5 className="card-title">{offer.Title}</h5>
                  <p className="card-text">{offer.Mission}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Experience Required:</strong> {offer.Experience_required}
                    </li>
                    <li className="list-group-item">
                      <strong>Domain:</strong> {offer.Domain}
                    </li>
                    <li className="list-group-item">
                      <strong>Salary:</strong> {offer.Salary}
                    </li>
                    <li className="list-group-item">
                      <strong>Speciality:</strong> {offer.Speciality}
                    </li>
                    <li className="list-group-item">
                      <strong>Job Type:</strong> {offer.JobType}
                    </li>
                    <li className="list-group-item">
                      <strong>Job City:</strong> {offer.JobCity}
                    </li>
                  </ul>
                  <Link to="/CandidatsP" className="btn btn-danger mt-3">Postulez Maintenant</Link>
                  <MdDeleteForever onClick={(e) => handleDelete(offer._id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                 <FaEdit onClick={() => navigateToUpdateOffer(offer._id)} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}

export default Offers;
