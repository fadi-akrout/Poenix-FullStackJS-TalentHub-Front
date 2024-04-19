import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
import logo from './image/talenthublogo.png';
import background from './image/meetings-bg.jpg';
import axios from 'axios';

function SignUpp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Add state for role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://192.168.50.4:5000/auth/signup', { name, email, password, role }) // Include role in the request
      .then(res => {
        navigate('/Loginn');
        console.log(name, email, password, role); // Log all fields including role
      }).catch(err => console.log(err));
  };

  return (
    <MDBContainer fluid className='bg-image d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className="bg-image" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <MDBContainer className='position-relative'>
        <MDBCard className='text-black' style={{ borderRadius: '80px', maxWidth: '100%' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon icon="user me-3" size='lg' />
                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon icon="user me-3" size='lg' />
                    <select className='w-100' onChange={(e) => setRole(e.target.value)}>
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Recruter">Recruter</option>
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                  <button type="submit" className='btn btn-danger'>Create</button>
                </form>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src={logo} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
}

export default SignUpp;
