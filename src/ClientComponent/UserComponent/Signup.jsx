import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Diploma: '',
    LastPostOccupied: '',
    NbrOfExperience: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Vérifiez que tous les champs sont remplis
      const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
      if (!areFieldsFilled) {
          alert("Veuillez remplir tous les champs.");
          return;
      }

      // Si les vérifications sont passées, continuez avec la soumission
      try {
          const response = await axios.post('http://localhost:3500/auth/signup', formData);
          console.log(response.data);
          navigate('/login');
      } catch (error) {
          console.error("Il y a eu un problème avec l'envoi du formulaire :", error);
      }
  };
 
  return (
    <>
        <div>
            <HeaderClient />
        </div>
      <section className="contact-us" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <form  id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Sign Up</h2>
                  </div>
                  <div className="col-lg-4">
                  <label htmlFor="FirstName" className="form-label">FirstName:</label>
                    <input type="text" id="FirstName" className="form-control" name="FirstName" value={formData.FirstName} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="LastName" className="form-label">LastName:</label>
                    <input type="text" id="LastName" className="form-control" name="LastName" value={formData.LastName} onChange={handleChange} required />
                  </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="PhoneNumber" className="form-label">PhoneNumber:</label>
                    <input type="number" id="PhoneNumber" className="form-Domain" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="Diploma" className="form-label">Diploma:</label>
                    <input type="text" id="Diploma" className="form-control" name="Diploma" value={formData.Diploma} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="LastPostOccupied" className="form-label">LastPostOccupied:</label>
                    <input type="text" id="LastPostOccupied" className="form-control" name="LastPostOccupied" value={formData.LastPostOccupied} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="NbrOfExperience" className="form-label">NbrOfExperience:</label>
                    <input type="number" id="NbrOfExperience" className="form-control" name="NbrOfExperience" value={formData.NbrOfExperience} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="email" className="form-label">email:</label>
                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                    <label htmlFor="password" className="form-label">password:</label>
                    <input type="password" id="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    </fieldset>
                  </div>
        
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">SignUp</button>
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
    <div> 
        <Footer/>
    </div>

  </section>
    </>
  );
   
}

export default Signup