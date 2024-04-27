import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useParams ,useNavigate} from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../Dashboard/Footer';
import useAuth from '../../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApplyOffer() {
  const navigate = useNavigate();
 const{id}=useParams()
 const [Title,SetTitle]=useState()
 const [Experience_required,SetExperience_required]=useState()
 const [Domain,SetDomain]=useState()
 const [Mission,SetMission]=useState()
 const [Salary,SetSalary]=useState()
 const [Speciality,SetSpeciality]=useState()
 const [JobType,SetJobType]=useState()
 const [JobCity,SetJobCity]=useState()
 const { userId } = useAuth()



        useEffect(() => {
            axios.get('http://localhost:3500/offers/getoffer/'+id)
                .then(response => { console.log(response)
                   // setOffers(response.data);
                   SetTitle(response.data.Title);
                   SetExperience_required(response.data.Experience_required);
                   SetDomain(response.data.Domain);
                   SetMission(response.data.Mission);
                   SetSalary(response.data.Salary);
                   SetSpeciality(response.data.Speciality);
                   SetJobType(response.data.JobType);
                   SetJobCity(response.data.JobCity);


                })
                .catch(error => {
                    console.error("Il y a eu une erreur !", error);
                });
        }, []);




        const Update = (e) => {
          e.preventDefault();
          
          axios.post('http://localhost:3500/offers/apply/'+userId +'/'+id)
          .then(result=> {
            toast.success('Congratulations! Your application was successfully submitted!');

            console.log(result)
           // navigate('/dash')
          })
          .catch(err => {
            // Handle the error based on the error message
            if (err.response && err.response.data && err.response.data.error) {
              // Display the error message from the backend
              toast.error(err.response.data.error);
            } else {
              // Display a generic error message
              toast.error('An error occurred while applying to the offer.');
            }
            console.log(err);
          });
        }



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
          <form  id="contact" on onSubmit={Update}>
            <div className="row">
            
              <div className="col-lg-4">
              <label htmlFor="Title" className="form-label">Title:</label>
                <input type="text" id="Title" className="form-control" name="Title" value={Title} onChange={(e)=>SetTitle(e.target.value)} required disabled/>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Experience_required" className="form-label">Experience_required:</label>
                <input type="text" id="Experience_required" className="form-control" name="Experience_required" value={Experience_required} onChange={(e)=>SetExperience_required(e.target.value)} required disabled/>
              </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Domain" className="form-label">Domain:</label>
                <input type="text" id="Domain" className="form-Domain" name="Domain" value={Domain} onChange={(e)=>SetDomain(e.target.value)} required disabled/>
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Mission" className="form-label">Mission:</label>
                <input type="text" id="Mission" className="form-control" name="Mission" value={Mission} onChange={(e)=>SetMission(e.target.value)} required disabled/>
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Salary" className="form-label">Salary:</label>
                <input type="number" id="Salary" className="form-control" name="Salary" value={Salary} onChange={(e)=>SetSalary(e.target.value)} required disabled/>
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Speciality" className="form-label">Speciality:</label>
                <input type="text" id="Speciality" className="form-control" name="Speciality" value={Speciality} onChange={(e)=>SetSpeciality(e.target.value)} required disabled />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                    <label htmlFor="JobType" className="form-label">JobType:</label>
                    <select id="JobType" className="form-control" name="JobType" value={JobType} onChange={(e)=>SetJobType(e.target.value)} required disabled>
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
                <input type="text" id="JobCity" className="form-control" name="JobCity" value={JobCity} onChange={(e)=>SetJobCity(e.target.value)} required disabled />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="button">Apply Now</button>
                  <Link to="/dash/question" className="btn btn-danger">take the Quiz</Link>
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
          <ToastContainer />
</>
  );
}

export default ApplyOffer;