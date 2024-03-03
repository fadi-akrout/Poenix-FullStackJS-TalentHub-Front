import React from "react";
import { Link } from 'react-router-dom';
import HeaderClient from "./HeaderClient";
import Footer from "./Footer";

export default function Home() {
    return(
        <div>
             <>
             <div>

             <>
            <HeaderClient />
          

        </>
    </div>
 
  <section className="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
              <h6>Hello Job Seekers</h6>
              <h2>Bienvenue sur TALENTHUB</h2>
              <p>Talent Hub est une plateforme innovante qui révolutionne la gestion des opportunités professionnelles.
                 Elle intègre des technologies avancées, dont l'IA, pour rationaliser le processus de recrutement et améliorer l'efficacité.
                 Avec des fonctionnalités telles que la correspondance des compétences, l'assistance par chatbot,
                 l'évaluation en ligne des compétences et la numérisation automatisée des CV, Talent Hub met en relation les chercheurs d'emploi avec des opportunités pertinentes et aide les entreprises à trouver les candidats parfaits. 
                 C'est une plateforme conviviale qui simplifie la recherche d'emploi et la gestion des candidatures tant pour les individus que pour les organisations.</p>
              <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Rejoignez-nous dès maintenant !</a></div>
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
                <img src="assets/images/service-icon-01.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Meilleure UX</h4>
                <p>La meilleure expérience utilisateur (UX) vise à offrir aux utilisateurs une interface intuitive, facile à utiliser et esthétiquement agréable. Elle tient compte de leurs besoins et préférences, tout en minimisant les obstacles à une interaction fluide.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>FeedBack</h4>
                <p>Les candidats peuvent donner leur avis sur les offres d'emploi auxquelles ils ont postulé via des systèmes de notation et des commentaires, ce qui leur permet d'exprimer leur expérience du processus de candidature.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Modele AI</h4>
                <p>IA pour scanner CVs, extraire infos pertinentes (éducation, expérience, compétences), stockage structuré en base de données.  Tests et améliorations pour assurer l'exactitude et la fiabilité du processus d'extraction des données.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Correspondance des compétences.</h4>
                <p>Analyse des compétences des candidats et recommandation des profils correspondants aux exigences des postes.  Amélioration de l'exactitude via des mécanismes de rétroaction et validation de l'efficacité avec des tests.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>FAQ</h4>
                <p>FAQ avec NLP pour des réponses précises et conviviales. Interface utilisateur intuitive. Amélioration continue grâce à l'apprentissage automatique.</p>
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
            <h2>Opportunités d'emploi</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories">
            <h4>Catégorie de l'emploi</h4>
            <ul>
              <li><a href="#"><h5>Tous les emplois</h5></a></li>
              <li><a href="#"><h5>Offre Commercial</h5></a></li>
              <li><a href="#"><h5>Offre Administratif</h5></a></li>
              <li><a href="#"><h5>Offre Technique</h5></a></li>
              <li><a href="#"><h5>Offre de Stage</h5></a></li>
            </ul>
            <div className="main-button-red">
            <li className="scroll-to-section"><Link to="/CandidatsP">Create Account</Link></li>  
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>NEW</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Mar <span>10</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Ingénieur frontend</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>NEW</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-02.jpg" alt="Online Teaching"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>24</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Ingénieur frontend & backend</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>NEW</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-03.jpg" alt="Higher Education"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>26</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Ingénieur Backend</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>NEW</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Ingénieur Cloud</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="our-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <h2>Quelques faits sur notre plateforme</h2>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content percentage">
                    <div className="count-digit">94</div>
                    <div className="count-title">Satisfaction des clients</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">126</div>
                    <div className="count-title">Offre d'emplois par jour</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content new-students">
                    <div className="count-digit">2345</div>
                    <div className="count-title">Nouveau Abonnée</div>
                  </div>
                </div> 
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">32</div>
                    <div className="count-title">Prix</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-lg-6 align-self-center">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="contact-us" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Let's get in touch</h2>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="YOURNAME...*" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required=""/>
                  </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" className="form-control" id="message" placeholder="YOUR MESSAGE..." required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">SEND MESSAGE NOW</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="right-info">
            <ul>
              <li>
                <h6>Phone Number</h6>
                <span>010-020-0340</span>
              </li>
              <li>
                <h6>Email Address</h6>
                <span>TalentHub@phoenix.com</span>
              </li>
              <li>
                <h6>Street Address</h6>
                <span>1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>www.TalentHub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   <div> <Footer/>
   </div>
  </section>






        </>
        </div>
    )

}