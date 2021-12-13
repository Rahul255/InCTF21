import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";


const OrganizerContainer = styled.section`
organizer {
  background: white;
  user-select: none;
}

content-container {
  padding: 5vh 5vw;
}

title_organizer {
  font-size: calc(1.5rem + 2vw);
      text-align: center;
      color: tomato;
      font-weight: 600;
      padding: 1.5rem 0;
      text-transform: none;
      margin-bottom: 1rem;
}

h2 {
  font-size: 18px;
  font-weight: 600;
  color: #444;
}

img1 {
  max-height: 78px;
  max-width: 100%;
  margin-bottom: 1rem;
}

amrita {
  @media (min-width: 700px) {
      border-right: 1px solid #999;
  }
}

cyber {
  @media (min-width: 700px) {
      border-left: 1px solid #999;
  }
}

col-md-4 {
  padding: 1rem;
}

p {
  font-size: 12px;
  max-width: 450px;
  margin-bottom: 0;
}

image {
  max-width: 100%;
}
partner_logo {
  max-width: 100%;
  max-height: 150px;
}
`

function Organizers() {
  return (
    <div className="organizer">
      <div className="content-container">
        <h3 className="title_organizer">Organized By</h3>
        <div className="row mx-0">
          <Fade left>
            <div className="col-md-4 order-md-1 order-2 text-right amrita">
              <a href="https://amrita.edu">
                <img
                  className="img1"
                  alt="Amrita Vishwa Vidyapeetham"
                  src={
                    require("../../../../src/assets/images/conference/logos/amritapuri_dark.png").default
                  }
                />
              </a>
              <h4>India's No.1 Ranked Private University</h4>
              <div className="d-flex justify-content-end">
                <p>
                  Amrita Vishwa Vidyapeetham, founded in 1994, within the next 2
                  decades has emerged among the leading universities in India,
                  and has been conferred the status of Institute of Eminence by
                  the Govt. of India. It is ranked as the fourth best university
                  in the NIRF Ranking 2020, and has been swiftly establishing
                  itself as a world class teaching and research institution.
                </p>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className="col-md-4 bi0s text-center order-md-2 order-1">
              <a href="https://bi0s.in">
                <img
                  className="img1"
                  alt="Team bi0s"
                  src={require("../../../../src/assets/images/conference/logos/bi0s_dark.png").default}
                />
              </a>
              <h4>India's No.1 Ranked CTF Hacking Team</h4>
              <div className="d-flex justify-content-center">
                <p>
                  Team bi0s is a community of college student focusing on cyber
                  security, and actively participating in CTF contests
                  worldwide. For several years now, team bi0s has consistently
                  been the No.1 CTF team in India. The team members also
                  actively involve in security research projects, organizing
                  training programs & CTFs, and developing security tools.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-4 cyber order-md-2 order-1">
              <a href="https://www.amrita.edu/center/cyber-security">
                <img
                  className="img1"
                  alt="Team bi0s"
                  src={require("../../../../src/assets/images/conference/logos/amrita_cyber.png").default}
                />
              </a>
              <h4>India's Leading CyberSec. Researchers</h4>
              <div className="d-flex">
                <p>
                  Amrita Center for Cyber Security Systems and Networks promote
                  partnership between industry, academia and the government to
                  foster innovative research and education in Cyber Security,
                  thus enhancing knowledge, deriving solutions, benefiting
                  society and mitigating risks. The Center is supported by the
                  Government of India throught many of its Departments and
                  Mission REACH programs. The Center has been designated as a
                  Center of Relevance and Excellence (CORE) for Cyber Security
                  in India.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="py-2 text-center">
        <h3 style={{ fontWeight: 600 }} className="mb-1">
          Community Partners
        </h3>
        <div className="d-flex justify-content-center">
          <div
            className="row mx-0 supporters_logos"
            style={{ maxWidth: "700px" }}
          >
            <div className="col-6 col-md-4 d-flex align-items-center justify-content-center p-1">
              <Fade down>
                <a
                  href="https://www.isacacochin.org/"
                  className="plain-link"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img
                    style={{ width: "auto" }}
                    alt="Data Security Council of India"
                    draggable="false"
                    className="partner_logo"
                    src={require("../../../../src/assets/images/conference/community-partners/ISACA_logo_Cochin_RGB.png").default}
                  />
                </a>
              </Fade>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-center align-items-center p-1">
              <Fade up>
               
                  <img
                    alt="black hoodie"
                    draggable="false"
                    className="partner_logo"
                    src={require("../../../../src/assets/images/conference/community-partners/goa.png").default}
                  />
                
              </Fade>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-center align-items-center p-1">
              <Fade up>
                
                  <img
                    alt="WiCys"
                    draggable="false"
                    className="partner_logo"
                    src={require("../../../../src/assets/images/conference/community-partners/ieee.png").default}
                  />
                
              </Fade>
            </div>
            <div className="col-6 col-md-4 d-flex align-items-center justify-content-center p-1">
              <Fade down>
                <a
                  href="https://amfoss.in/"
                  className="plain-link"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img
                    alt="team bi0s"
                    draggable="false"
                    className="partner_logo"
                    src={require("../../../../src/assets/images/conference/community-partners/amfosslogo.png").default}
                  />
                </a>
              </Fade>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-center align-items-center p-1">
              <Fade up>
                <a
                  href="https://www.shakticon.com/"
                  className="plain-link"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img
                    alt="BSides Delhi "
                    draggable="false"
                    className="partner_logo"
                    src={require("../../../../src/assets/images/conference/community-partners/shakti.png").default}
                  />
                </a>
              </Fade>
            </div>
            
          </div>
        </div>
      </div><br/><br/>
      <img
        className="image"
        alt="amritapuri vector illustration"
        draggable="false"
        src={require("../../../../src/assets/images/conference/logos/amritapuri_vector.png").default}
      />
    </div>
  );
}

export default Organizers;
