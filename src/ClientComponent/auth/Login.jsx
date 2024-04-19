import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Dashboard/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/auth', {
        email,
        password,
      });
      // Save token to local storage
      localStorage.setItem('token', response.data.accessToken);
      alert('Login successful');
    } catch (error) {
      console.error('Login error', error.response.data);
      alert('Login failed');
    }
  };

  return (
    <>
    <section className="contact-us" id="contact">
    <div className="container">
    <div className="row">
  
      <div className="col-lg-12">
    <form id="contact" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
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

export default Login;