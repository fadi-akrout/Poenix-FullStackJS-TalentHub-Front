import React, { useState } from 'react';
import axios from 'axios';
import { ROLES } from "../../config/roles"
import Footer from '../Dashboard/Footer';
import HeaderClient from "../Dashboard/HeaderClient";
   
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')
  const [roles, setRoles] = useState(["Student"])

  // Add any other sign up fields you need
  const onUsernameChanged = e => setUsername(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
  const onRolesChanged = e => {
    const values = Array.from(
        e.target.selectedOptions, //HTMLCollection 
        (option) => option.value
    )
    setRoles(values)
}
  const options = Object.values(ROLES).map(role => {
    return (
        <option
            key={role}
            value={role}

        > {role}</option >
    )
})


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3500/auth/signup', {
        email,
        password,
        // Include other user details as necessary
      });
      // Redirect to login page or directly log the user in
      alert('Signup successful. Please log in.');
    } catch (error) {
      console.error('Signup error', error.response.data);
      alert('Signup failed');
    }
  };

  return ( 
    <>
      <HeaderClient />

          <section className="contact-us-signup" id="contact">
                <div className="container">
                   <div className="row">

                      <div className="col-lg-12">
                           <form  id="contact" onSubmit={handleSubmit}>

                                 <label className="form__label" htmlFor="username">
                                      Username: <span className="nowrap">[3-20 letters]</span></label>
                                  <input
                                      className={`form__input`}
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="off"
                                        value={username}
                                        onChange={onUsernameChanged}
                                    />
                                 <label className="form__label" htmlFor="email">
                                                Email: <span className="nowrap">[valid email address]</span> </label>
                                          <input
                                                className={`form__input`}
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="off"
                                                value={email}
                                                onChange={onEmailChanged}
                                                />

                                  <label className="form__label" htmlFor="password">
                                      Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
                                  <input
                                      className={`form__input`}
                                      id="password"
                                      name="password"
                                      type="password"
                                      value={password}
                                      onChange={onPasswordChanged}
                                  />

                                  <label className="form__label" htmlFor="roles">
                                                      ASSIGNED ROLES:</label>
                                                  <select
                                                      id="roles"
                                                      name="roles"
                                                      className={`form__select`}
                                                      multiple={true}
                                                      size="5"
                                                      value={roles}
                                                      onChange={onRolesChanged}
                                                  >
                                                      {options}
                                                      </select>
                            
                                    <button type="submit">Sign Up</button>
                             </form>
                    </div>     
                </div>  
            </div>  
          
     
         
          </section>
          <section className="upcoming-meetings" id="meetings">
              <Footer />
          </section>
          
    </>
    
  );
};

export default Signup;