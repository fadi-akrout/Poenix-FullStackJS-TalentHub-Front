import React from "react";
import { Link } from 'react-router-dom';
import HeaderClient from "./HeaderClient";
import Footer from "./Footer";
import OfferList from "../OfferComponent/OfferList";

export default function Home() {
  return (
    <>
    <div>

      <HeaderClient />

      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Job Seekers</h6>
                  <h2>Bienvenue sur TALENTHUB</h2>
                  <p>Talent Hub est une plateforme innovante qui révolutionne la gestion des opportunités professionnelles...
                    C'est une plateforme conviviale qui simplifie la recherche d'emploi et la gestion des candidatures tant pour les individus que pour les organisations.</p>
                  <div className="main-button-red">
                    <a href="#contact" className="scroll-to-section">Rejoignez-nous dès maintenant !</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-01.png" alt="Meilleure UX" />
                  </div>
                  <div className="down-content">
                    <h4>Meilleure UX</h4>
                    <p>La meilleure expérience utilisateur (UX) vise à offrir aux utilisateurs une interface intuitive...</p>
                  </div>
                </div>
                {/* Additional items can be added here */}
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
                <h2>Opportunités d'emploi</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>Catégorie de l'emploi</h4>
                <ul>
                  <li><a href="#">Tous les emplois</a></li>
                  {/* Additional categories can be listed here */}
                </ul>
                <div className="main-button-red">
                  <Link to="/SignUpp">Postulez Maintenant</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <OfferList />
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections such as "our-facts" and "contact-us" can follow here */}

      <Footer />
    </div>
    </>
  );
}
