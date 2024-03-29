import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBell, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faFileCirclePlus,
  faFilePen,
  faUserGear,
  faUserPlus,
  faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import logoImage from './image/Logo_ESPRIT_Ariana.jpg';
import './Header.css';
import useAuth from '../../hooks/useAuth'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice';
const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/
function Header() {
  const { username,email, isStudent, isAdmin ,isRecruter} = useAuth()
  const navigate = useNavigate()
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

    let newUserButton = null
    if (USERS_REGEX.test(pathname)) {
        newUserButton = (
            <button
                className="icon-button"
                title="New User"
                onClick={onNewUserClicked}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        )
    }

    let userButton = null
    if ( isAdmin) {
        if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
            userButton = (
                <button
                    className="icon-button"
                    title="Users"
                    onClick={onUsersClicked}
                >
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
            )
        }
    }

    let notesButton = null
    if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
        notesButton = (
            <button
                className="icon-button"
                title="Notes"
                onClick={onNotesClicked}
            >
                <FontAwesomeIcon icon={faFilePen} />
            </button>
        )
    }

    const logoutButton = (
        <button
            className="icon-button"
            title="Logout"
            onClick={sendLogout}
        >
            <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
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
        <div className={`collapse navbar-collapse rounded-pill ${dashClass} `} id="navbarSupportedContent" style={{ backgroundColor: '#fff', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/dash" className="nav-link">
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-lg mb-1" />
                </div>
                Home
              </Link>
            </li>
            {( isAdmin || isRecruter) && <li className="nav-item text-center mx-2 mx-lg-1">
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
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/dash/Profile" className="nav-link">
                <div>
                  <FontAwesomeIcon icon={faBell} className="fa-lg mb-1" />
                  <span className="badge rounded-pill badge-notification bg-info">11</span>
                </div>
                Profile
              </Link>
            </li>
            {buttonContent}
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
          <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;
