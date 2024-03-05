import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import logo from './image/talenthublogo.png'; 
import background from './image/meetings-bg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/Loginn', { email, password });
      if (res.data.Status === "Success") {
        if (res.data.role === "Admin") {
          navigate('/admin/home');
        } else {
          navigate('/AddCandidate');
        }
      } else {
        console.log("Login failed: ", res.data.message);
      }
    } catch (error) {
      console.error("Error occurred: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Redirect user if already logged in
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:3000/checkAuth'); // Endpoint to check if user is authenticated
        if (res.data.authenticated) {
          navigate(res.data.role === 'Admin' ? '/admin/home' : '/HomeP');
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <MDBContainer fluid className='bg-image d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className="bg-image" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <MDBContainer className='position-relative '>
        <MDBCard className='text-black' style={{ borderRadius: '80px', maxWidth: '100%' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">LOGIN</p>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <MDBBtn type="submit" className='btn btn-danger' disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </MDBBtn>
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

export default Loginn;
