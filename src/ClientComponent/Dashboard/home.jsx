import React from "react";
import { Link } from 'react-router-dom';
import HeaderClient from "./HeaderClient";
import Footer from "./Footer";
import OfferList from "../OfferComponent/OfferList";

export default function Home() {
  return (
    <>
      <HeaderClient />
      <section className="section main-banner" id="top" data-section="section1">
        <img className="card-img-top" src="assets/images/background1.jpeg" />
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Job Seekers</h6>
                  <h2>Welcome to TALENTHUB</h2>
                  <p>Talent Hub is an innovative platform that revolutionizes the management of professional opportunities...
                      It's a user-friendly platform that simplifies job search and application management for both individuals and organizations.</p>
                  <div className="main-button-red">
                      <a href="/signup" className="scroll-to-section">Join us now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading"> 
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>Join our website</h4>
                <ul>
                  <li><a href="#">Find more job offers and events</a></li>
                 
                </ul>
                <div className="main-button-red">
                  <Link to="/signup">APPLY <i class="fa fa-newspaper-o" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <OfferList />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
