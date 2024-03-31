import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBell, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import logoImage from './image/Logo_ESPRIT_Ariana.jpg';
import './Header.css';
import useAuth from '../../hooks/useAuth'
function Header() {

  const { username, email, isStudent, isAdmin, isRecruter } = useAuth()
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // A mock function to simulate getting search suggestions
  // This should be replaced with a real search suggestion function
  const getSearchSuggestions = (value) => {
    // Here you would typically make an API call to get suggestions
    // For the purposes of this example, we'll use static data
    const allSuggestions = [
      'ajout evenements',
      'ajout offer',
      'tous les evenements'
      // ... more suggestions
    ];
    return allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 1) {
      setSuggestions(getSearchSuggestions(value));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    // Here you would navigate based on the suggestion
    // For example:
    if (suggestion === 'ajout event') {
      navigate('/dash/add-event');
    } else if (suggestion === 'ajout offer') {
      navigate('/dash/addoffer');
    }
    else if (suggestion === 'evenements') {
      navigate('/dash/evenements');
    }
    // Add more conditions for different suggestions and routes here
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSuggestions([]);
    // Navigate based on the search term
    // Example logic (needs to be adapted to your actual search routes)
    if (searchTerm.toLowerCase().includes('ajout event')) {
      navigate('/dash/add-event');
    } else if (searchTerm.toLowerCase().includes('ajout offer')) {
      navigate('/dash/addoffer');
    }
    else if (searchTerm.toLowerCase().includes('evenements')) {
      navigate('/dash/evenements');
    }
    // Add more conditions for different search terms and routes here
    setSearchTerm(''); // Clear the search input after navigation
  };
  return (
    <nav className="navbar navbar-expand-lg" style={{ height: '80px', padding: '0', width: '100%' }}>
      <div className="container-fluid">
        <a className="navbar" href="#">
          <img src={logoImage} alt="Logo" className="logo-img" style={{ width: '100px', height: 'auto' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars text-light"></i>
        </button>
        <div className="collapse navbar-collapse rounded-pill" id="navbarSupportedContent" style={{ backgroundColor: '#fff', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/HomeP" className="nav-link">
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-lg mb-1" />
                </div>
                Home
              </Link>
            </li>

            {(isRecruter | isAdmin) && <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="./addoffer" className="nav-link">
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-lg mb-1" />
                </div>
                Offres
              </Link>
            </li>}
            <li className="nav-item text-center mx-2 mx-lg-1">

              <Link to="/dash/add-event" className="nav-link">                <div>

                <FontAwesomeIcon icon={faHome} className="fa-lg mb-1" />
              </div>
                Evenements
              </Link>
            </li>
            <li className="nav-item dropdown text-center mx-2 mx-lg-1">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                aria-expanded="false">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="fa-lg mb-1" />
                  <span className="badge rounded-pill badge-notification bg-primary">11</span>
                </div>
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Add Event</a></li>
                <li><a className="dropdown-item" href="#">Add Offer</a></li>
                <li><a className="dropdown-item" href="#">Add Candidate</a></li>
              </ul>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0" onSubmit={handleSearch}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
                <div className="search-suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectSuggestion(suggestion)}
                      className="suggestion"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="./Profile" className="nav-link">
                <div>
                  <FontAwesomeIcon icon={faBell} className="fa-lg mb-1" />
                  <span className="badge rounded-pill badge-notification bg-info">11</span>
                </div>
                Profile
              </Link>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                <div>
                  <FontAwesomeIcon icon={faGlobeAmericas} className="fa-lg mb-1" />
                  <span className="badge rounded-pill badge-notification bg-success">11</span>
                </div>
                Notifications
              </a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Header;
