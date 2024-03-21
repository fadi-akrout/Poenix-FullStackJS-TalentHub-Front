import React from 'react';
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
import myImage from "./image/talenthublogo.png";

} from 'mdb-react-ui-kit';



//import myImage from "D:/Pics/7609904.png"

import './Profile.css';
import Footer from '../Dashboard/Footer';
import Header from './Header';



export default function Profile() {
  return (
    <>
    <Header />
    <section style={{ backgroundImage: 'url("src/ClientComponent/HomePage/image/meetings-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#eee' }}>
      <MDBContainer className="py-4">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 custom-card">
              <MDBCardBody className="text-center">
               {/*  <MDBCardImage
                  src={myImage} // Use the imported image as src
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                /> */}
                <p className="text-white mb-1">Full Stack Developer</p>
                <p className="text-white mb-4">Tunisia</p>
                <div className="d-flex justify-content-center mb-2">

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4 custom-card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-white">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0 custom-card">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

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
      <div>
        {candidate && <PDFGeneratorButton candidate={candidate} />}
      </div>
    </div>

    </>

  );
}
