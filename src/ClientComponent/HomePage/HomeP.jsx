import React, { useState, useEffect } from 'react';
import Header from './Header';
import backgroundImage from './image/meetings-bg.jpg';
import Offers from './Offers';
import Evenements from '../EventComponent/Evenement';

function HomeP() {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
  };

  const sidebarStyle = {
    flex: '1',
    overflowY: 'auto', 
  };

  const contentStyle = {
    flex: '3', 
    padding: '30px', 
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3500/Loginn', { email, password });
        if (response.data.Status === 'Success') {
            // Redirect to appropriate page based on user role
            if (response.data.role === 'Admin') {
                navigate('/admin-dashboard');
            } else if (response.data.role === 'Teacher' || response.data.role === 'Student' || response.data.role === 'Recruiter') {
                navigate('/user-dashboard');
            }
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

const handleLogout = async () => {
    try {
        await axios.get('http://localhost:3500/logout');
        // Clear user session and redirect to login page
        sessionStorage.removeItem('userRole');
        navigate('/login');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

  return (
    <div className="App">
      <Header /> 
      <div style={backgroundImageStyle}>
        <div className="container" style={containerStyle}>
          <div style={contentStyle}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Offers />
            </div>
          </div>
          <div style={sidebarStyle}>
            <Evenements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeP;
