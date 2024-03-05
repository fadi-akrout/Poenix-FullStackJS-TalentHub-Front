import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import myImage from "./image/talenthublogo.png";
import './Profile.css';
import Header from './Header';
import { FaLinkedin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Footer from '../Dashboard/Footer';

export default function Profile() {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3500/candidates');
        setCandidate(response.data[0]);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchData();
  }, []);

  if (!candidate) {
    return null;
  }

  return (
    <div className="full-width-header">
      <Header /> 
      <section style={{ backgroundImage: 'url("src/ClientComponent/HomePage/image/meetings-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eee' }}>
        <MDBContainer className="py-4">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4 custom-card bg-white">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={candidate.profileImage}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-black mb-1">{candidate.name}  {candidate.lastname}</p>
                  <p className="text-Black mb-4">{candidate.actualPost}</p>
                  <div className="d-flex justify-content-center mb-2">

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="8">
              <MDBCard className="mb-4 custom-card bg-white">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.name} {candidate.lastname}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.phoneNumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Diploma</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.diploma}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.address}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Actual Post</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-Black">{candidate.actualPost}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <FaLinkedin />
                      <MDBCardText>{candidate.linkedinProfile}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <GiSkills />
                      <MDBCardText>{candidate.skills}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <FaLanguage />
                      <MDBCardText>{candidate.languages}</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </section>
    </div>
  );
}
