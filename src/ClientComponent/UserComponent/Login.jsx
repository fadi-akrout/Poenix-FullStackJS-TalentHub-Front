/*import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
        const response = await axios.post('http://localhost:3500/auth', formData);
        console.log(response.data);
      //  toast.success('Login successful. Welcome!')

        navigate('/');

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
                 
                  <div className="col-lg-12">
                    <fieldset>
                    <label htmlFor="email" className="form-label">email:</label>
                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
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
  )
   
}

export default Login*/

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', { username, password });
      localStorage.setItem('token', res.data.token);
      // Redirect or set state indicating successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
