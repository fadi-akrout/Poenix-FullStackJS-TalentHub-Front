import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../HomePage/image/Logo_ESPRIT_Ariana.jpg'
function HeaderClient() {
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

    return (
        <>

            <nav className="navbar navbar-expand-lg" style={{ height: '80px', padding: '0', width: '100%', backgroundColor: '#a12c2f' }}>
                <div className="container-fluid">
                    <a className="navbar" href="#">
                        <img src={logoImage} alt="Logo" className="logo-img" style={{ width: '100px', height: 'auto' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> {/* This will render the hamburger icon */}
                    </button>
                    <div className={`collapse navbar-collapse  `} id="navbarSupportedContent" style={{ backgroundColor: '#a12c2f', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>

                        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">


                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Link to="/signup" className="nav-link">
                                    Join us
                                </Link>
                            </li>

                            <li className="nav-item text-center mx-2 mx-lg-1">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>



                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default HeaderClient