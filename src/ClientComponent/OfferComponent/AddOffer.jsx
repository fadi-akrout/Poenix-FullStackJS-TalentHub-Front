import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../Dashboard/Footer';

function AddOffer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: '',
    Experience_required: '',
    Domain: '',
    Mission: '',
    Salary: '',
    Speciality: '',
    JobType: '',
    JobCity: '',

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
      const response = await axios.post('http://localhost:3500/offers', formData);
      console.log(response.data);
      navigate('/dash');
    } catch (error) {
      console.error("Il y a eu un problème avec l'envoi du formulaire :", error);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Add an offer</h2>
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="Title" className="form-label">Title:</label>
                        <input type="text" id="Title" className="form-control" name="Title" value={formData.Title} onChange={handleChange} required />
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="Experience_required" className="form-label">Experience required:</label>
                          <input type="text" id="Experience_required" className="form-control" name="Experience_required" value={formData.Experience_required} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="Domain" className="form-label">Domain:</label>
                          <input type="text" id="Domain" className="form-Domain" name="Domain" value={formData.Domain} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="Mission" className="form-label">Mission:</label>
                          <input type="text" id="Mission" className="form-control" name="Mission" value={formData.Mission} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="Salary" className="form-label">Salary:</label>
                          <input type="number" id="Salary" className="form-control" name="Salary" value={formData.Salary} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="Speciality" className="form-label">Speciality:</label>
                          <input type="text" id="Speciality" className="form-control" name="Speciality" value={formData.Speciality} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="JobType" className="form-label">JobType:</label>
                          <select id="JobType" className="form-control" name="JobType" value={formData.JobType} onChange={handleChange} required>
                            <option value="">Select Job Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Summer internship">Summer internship</option>
                            <option value="PFE">PFE</option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <label htmlFor="JobCity" className="form-label">JobCity:</label>
                          <input type="text" id="JobCity" className="form-control" name="JobCity" value={formData.JobCity} onChange={handleChange} required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">Add offer</button>
                        </fieldset>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>



      </section>
      <section className="upcoming-meetings" id="meetings">
        <Footer />
      </section>
    </>
  );
}

export default AddOffer