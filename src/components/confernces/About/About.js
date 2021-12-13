import React from "react";

import styled from "@emotion/styled";
// import image from '../../images/desktop1.png'
import Fade from "react-reveal/Fade";

const AboutContainer = styled.section`
about{
  padding-top: 20px;
  width: auto;
  background-color: #222;
  background-size: cover;
  overflow: hidden;
}

p{
  font-size: 16px;
  color: white;
}
about_span{
  color: white;
}
span2{
  color: tomato;
}

para{
  font-size: 1.2rem;
  padding-bottom: 0.3rem;
  color: white;
  padding-top: 30px;
}

title_about{
      font-size: calc(1.5rem + 2vw);
     
      color: tomato;
      font-weight: 600;
      padding: 1.5rem 0;
      margin-bottom: 1rem;
      padding-top: 40px   ;
}


wrapper {
  padding: 5vh 1rem;
  min-height: 80vh;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.35) 20%,
    rgba(0, 0, 0, 0.85)
  );
}

p {
  color: white;
  font-size: 14px;
  max-width: 600px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

h4 {
  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.5);
  font-size: calc(1rem + 0.5vw);
}
headpara {
  font-weight: 900;
  color: white;
  font-size: calc(1.5rem + 1.5vw);
  text-transform: uppercase;
  text-shadow: 2px 3px 4px rgba(250, 248, 248, 0.5);
}
`;

function About() {
  return (
    <AboutContainer>
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="title_about">
              <span className="about_span">What is</span> InCTFcon{" "}
              <span className="about_span">?</span>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center ">
            <div>
              <Fade left>
                <p className="para">
                  <span className="span2">InCTFCon</span> is an international Cybersecurity conference organised on behalf of Amrita InCTF to address the skill gap, 
                  to inspire and empower the youth to take up careers in cyberspace. 
                </p>
                <p className="para">
                  Our pre-conference national contest (InCTF) boasts a{" "}
                  <strong>
                    participant strength of over 15000 students from all over
                    India
                  </strong>
                  , from top institutes such as the IITs and NITs.The big dream behind this conference is 
                  to inculcate a new generation of cybersecurity professionals to protect the globe from a cyber pandemic and to 
                  safeguard India's future in the digital atmosphere.
                </p>
              </Fade>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center ">
            <div style={{ maxWidth: "720px" }}>

              <Fade delay={200}>
                <h1 className="headpara">Inspiring & Empowering Youth in CyberSecurity</h1>
              </Fade>
              <div>
                {/* <Fade delay={350}>
                      <p className="para">
                        InCTFCon is a global conference aimed at training,
                        encouraging and educating young people to pursue,
                        espouse and embrace cybersecurity.
                      </p>
                    </Fade> */}
                <Fade delay={500}>
                  <p className="para">
                    InCTFCOn offers contests, programs and world-class
                    workshops along with the pre-conference event InCTF,
                    which is one of the biggest cybersecurity contests in
                    India. Over the years, InCTFCon has created a unique,
                    ever-growing community with people from academia and the
                    industry, ready to empower young people for years to
                    come.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

        </div>
        <br />

      </div>
    </div>
    </AboutContainer>
  );
}

export default About;
