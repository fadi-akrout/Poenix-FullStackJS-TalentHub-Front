import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'

function Offers() {
  const [offers, setOffers] = useState([]);
  const { userId,email,isAlumni, isStudent, isAdmin ,isRecruter} = useAuth()

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://192.168.50.4:5000/offers')
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete('http://192.168.50.4:5000/offers/' + id)
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
const navigateToApply = (offerId) => {
  navigate(`./apply/${offerId}`);
}

  return (
    <section className="upcoming-meetings" id="meetings">
      <div className="container">
        <div className="row justify-content-center">
          {offers.map((offer) => (
            <div key={offer._id} className="justify-content-center col-lg-10 col-md-6 col-sm-8 mb-6"> {/* Adjusted col widths */}
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
                  {( isStudent || isAlumni) &&
                 
                  <button type="submit" className="btn btn-danger" onClick={(e) => navigateToApply(offer._id)}>Apply now</button>

                  }
                  {( isAdmin || isRecruter) &&
                  <MdDeleteForever onClick={(e) => handleDelete(offer._id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px' }} />
                 }
                  {( isAdmin || isRecruter) &&
                 <FaEdit onClick={() => navigateToUpdateOffer(offer._id)} style={{ cursor: 'pointer', float: 'right', color: '#0d6efd' }} />
}
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
