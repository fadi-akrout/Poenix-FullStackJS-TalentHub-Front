import React, { useState, useEffect } from 'react';
import Header from './Header';
import backgroundImage from './image/meetings-bg.jpg';
import Offers from './Offers';
import Evenements from '../EventComponent/EventPreview';

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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-250px', 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const offersContainerStyle = {
    flex: '1', 
    maxWidth: '800px', 
    margin: '0 auto', 
    zIndex: 2,
  };

  const sidebarStyle = {
    flex: '1', 
    maxWidth: '300px', 
    padding: '10px',
    marginTop: '-100px', 
  };

  return (
    <div className="App">
      <Header />
      <section className="upcoming-meetings" id="meetings">
        <div className="container" style={containerStyle}>
          <div style={offersContainerStyle}>
            <Offers />
          </div>
          <div style={sidebarStyle}>
            <Evenements />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeP;
