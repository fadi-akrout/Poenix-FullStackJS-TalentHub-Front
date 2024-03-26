import React from 'react'
import { Link } from 'react-router-dom'
function HeaderClient() {

    
    return (
        <div> <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav"><Link to="/">
                            <a className="logo">
                                Talent<span className="text-danger">Hub</span>
                            </a>
                        </Link>
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/">Home</Link></li>
                                <li className="scroll-to-section"><Link to="/signup">Join us</Link></li> 
                                <li className="scroll-to-section"><Link to="/login">Login</Link></li> 

                               
                            

                                <li className="scroll-to-section"><a href="#contact">Contactez-nous</a></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>

                        </nav>
                    </div>
                </div>
            </div>
        </header></div>
    )
}

export default HeaderClient