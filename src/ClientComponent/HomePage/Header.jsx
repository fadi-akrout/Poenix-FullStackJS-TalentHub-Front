import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBell, faGlobeAmericas, faCalendarDays, faBriefcase, faIdCard, faBarChart } from '@fortawesome/free-solid-svg-icons';
import {
  faFileCirclePlus,
  faFilePen,
  faUserGear,
  faUserPlus,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons"
import logoImage from './image/Logo_ESPRIT_Ariana.jpg';
import './Header.css';
import useAuth from '../../hooks/useAuth'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice';
const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/
function Header() {


  const { username, email, isStudent, isAdmin, isRecruter } = useAuth()
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Assuming 768px is your breakpoint for the mobile menu
        setSuggestions([]); // Hide suggestions when resizing to a wider screen
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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

  const { pathname } = useLocation()

  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/dash')
  }, [isSuccess, navigate])

  const onNewNoteClicked = () => navigate('/dash/notes/new')
  const onNewUserClicked = () => navigate('/dash/users/new')
  const onNotesClicked = () => navigate('/dash/notes')
  const onUsersClicked = () => navigate('/dash/users')

  let dashClass = null
  if (!DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
    dashClass = "dash-header__container--small"
  }

  let newNoteButton = null
  if (isAdmin) {
    if (NOTES_REGEX.test(pathname)) {
      newNoteButton = (
        <button
          className="icon-button"
          title="New Note"
          onClick={onNewNoteClicked}
        >
          <FontAwesomeIcon icon={faFileCirclePlus} />
        </button>
      )
    }
  }

  let newUserButton = null
 /*  if (isAdmin) {
    if (USERS_REGEX.test(pathname)) {
      newUserButton = (
        <li className="nav-item text-center mx-2 mx-lg-1">
          <Link to="./new" className="nav-link">
            <div>
              <FontAwesomeIcon icon={faUserPlus} className="fa-lg mb-1" />
            </div>
            Add User
          </Link>
        </li>
      )
    }
  } */

  let userButton = null
  if (isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
      userButton = (

        <li className="nav-item text-center mx-2 mx-lg-1">
          <Link to="/dash/users" className="nav-link">
            <div>
              <FontAwesomeIcon icon={faUserGear} className="fa-lg mb-1" />
            </div>
            Users
          </Link>
        </li>
      )
    }
  }

  let notesButton = null
 /*  if (isAdmin) {
    if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
      notesButton = (
        <li className="nav-item text-center mx-2 mx-lg-1">
          <Link to="/dash/notes" className="nav-link">
            <div>
              <FontAwesomeIcon icon={faFilePen} className="fa-lg mb-1" />
            </div>
            Notes
          </Link>
        </li>
      )

    }
  } */

  const logoutButton = (
    <li className="nav-item text-center mx-2 mx-lg-1">
      <Link to="/" className="nav-link" onClick={sendLogout}>
        <div>
          <FontAwesomeIcon icon={faRightFromBracket} className="fa-lg mb-1" />
        </div>
        Logout
      </Link>
    </li>
  )

  const errClass = isError ? "errmsg" : "offscreen"
  let buttonContent
  if (isLoading) {
    buttonContent = <PulseLoader color={"#FFF"} />
  } else {
    buttonContent = (
      <>
        {newNoteButton}
        {newUserButton}
        {notesButton}
        {userButton}
        {logoutButton}
      </>
    )
  }


  return (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ height: '80px', padding: '0',margin:'0', width: '100%', backgroundColor: '#a12c2f' }}>
        <div className="container-fluid">
          <a className="navbar" href="#">
            <img src={logoImage} alt="Logo" className="logo-img" style={{ width: '100px', height: 'auto' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> {/* This will render the hamburger icon */}
          </button>

          <div className={`collapse navbar-collapse  ${dashClass} `} id="navbarSupportedContent" style={{ backgroundColor: '#a12c2f', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to="/dash" className="nav-link">
                  <div>
                    <FontAwesomeIcon icon={faHome} className="fa-lg" />

                  </div>
                  Home
                </Link>
              </li>

              {(isAdmin || isRecruter) && <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to="/dash/addoffer" className="nav-link">

                  <div>
                    <FontAwesomeIcon icon={faBriefcase} className="fa-lg" />
                  </div>
                  Add Offer
                </Link>
              </li>}
              {(isAdmin || isRecruter) &&
                <li className="nav-item text-center mx-2 mx-lg-1">

                  <Link to="/dash/add-event" className="nav-link">                <div>

                    <FontAwesomeIcon icon={faCalendarDays} className="fa-lg" />
                  </div>
                    Add Events
                  </Link>
                </li>}
                {(isAdmin || isRecruter) &&
                <li className="nav-item text-center mx-2 mx-lg-1">

                  <Link to="/dash/stats" className="nav-link">                <div>

                    <FontAwesomeIcon icon={faBarChart} className="fa-lg" />
                  </div>
                    Statistics
                  </Link>
                </li>}
              {/*               <li className="nav-item text-center mx-2 mx-lg-1">
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
              </li> */}


            </ul>
            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            {(!isAdmin) &&
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to="/dash/Profile" className="nav-link">
                  <div>
                    <FontAwesomeIcon icon={faIdCard} className="fa-lg" />

                  </div>
                   {username}
                </Link>
              </li>}
              {buttonContent}

            </ul>





          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;