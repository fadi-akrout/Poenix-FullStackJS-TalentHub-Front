import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,useParams ,useNavigate} from 'react-router-dom';


function UpdateOfferAdmin() {
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


        useEffect(() => {
            axios.get('http://192.168.50.4:5000/offers/getoffer/'+id)
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
          axios.patch('http://192.168.50.4:5000/offers/'+id,{Title,Experience_required,Domain,Mission,Salary,Speciality,JobType,JobCity})
          .then(result=> {
            console.log(result)
            navigate('../offerlistAdmin')
          })
          .catch(err => console.log(err) )
        }



  return (
    <>
       <main className='main-container'>
 <section className="contact-us" id="contact">
<div className="container">
  <div className="row">
    <div className="col-lg-12 align-self-center">
      <div className="row">
        <div className="col-lg-12">
          <form  id="contact" on onSubmit={Update}>
            <div className="row">
              <div className="col-lg-12">
                <h2>Update an offer</h2>
              </div>
              <div className="col-lg-4">
              <label htmlFor="Title" className="form-label">Title:</label>
                <input type="text" id="Title" className="form-control" name="Title" value={Title} onChange={(e)=>SetTitle(e.target.value)} required />
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Experience_required" className="form-label">Experience required:</label>
                <input type="text" id="Experience_required" className="form-control" name="Experience_required" value={Experience_required} onChange={(e)=>SetExperience_required(e.target.value)} required />
              </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Domain" className="form-label">Domain:</label>
                <input type="text" id="Domain" className="form-Domain" name="Domain" value={Domain} onChange={(e)=>SetDomain(e.target.value)} required />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Mission" className="form-label">Mission:</label>
                <input type="text" id="Mission" className="form-control" name="Mission" value={Mission} onChange={(e)=>SetMission(e.target.value)} required />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Salary" className="form-label">Salary:</label>
                <input type="number" id="Salary" className="form-control" name="Salary" value={Salary} onChange={(e)=>SetSalary(e.target.value)} required />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="Speciality" className="form-label">Speciality:</label>
                <input type="text" id="Speciality" className="form-control" name="Speciality" value={Speciality} onChange={(e)=>SetSpeciality(e.target.value)} required />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                    <label htmlFor="JobType" className="form-label">JobType:</label>
                    <select id="JobType" className="form-control" name="JobType" value={JobType} onChange={(e)=>SetJobType(e.target.value)} required>
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    </select>
                </fieldset>
                </div>
              <div className="col-lg-4">
                <fieldset>
                <label htmlFor="JobCity" className="form-label">JobCity:</label>
                <input type="text" id="JobCity" className="form-control" name="JobCity" value={JobCity} onChange={(e)=>SetJobCity(e.target.value)} required />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="button">Update offer</button>
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
</main>
</>
  );
}

export default UpdateOfferAdmin;