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
                                <li className="scroll-to-section"><Link to="/offers">Opprotunités D'emploi</Link></li>
                                <li className="scroll-to-section"><Link to="/AddCandidats">Postulez Maintenant</Link></li> 

                                <li className="has-sub">
                                    <a href="javascript:void(0)">Pages</a>
                                    <ul className="sub-menu">
                                        <li>< Link to="/evenements">Evenements</Link></li>
                                        <li>< Link to="/addoffer">Add new offer</Link></li>

                                        <li><a >Detail Des Offre</a></li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a href="javascript:void(0)">Account</a>
                                    <ul className="sub-menu">
                                        <li>< Link to="/signup">Sign up</Link></li>
                                        <li>< Link to="/login">Sign in</Link></li>
                                        <li>< Link to="/login">Sign in</Link></li>

                                    </ul>
                                </li>

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