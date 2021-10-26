import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const ContactsBarSection = styled.section`
    padding: 5vh 3vw;
    background: #222640;
    color: white;
    img {
      max-height: 64px;
      margin-right: 8px;
    }
    a {
      font-size: 16px;
      &:hover {
         color: #fd7e14!important;
      }
    }
    .social-bar {
        a {
          font-size: 32px;
          color: #AAA;
          margin-right: 12px;
          &:hover {
            color: #fd7e14;
          }
        };
    }
`;

const PoweredByTraboda = styled('div')`
    font-size: 16px;
    div {
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }
    img {
        position: inherit;
        display: block;
        max-height: 64px;
    }
`;

const LandingContactsBar = () => {

    return <ContactsBarSection>
        <div className="flex flex-wrap">
            <div className="w-full flex justify-center flex-wrap">
                <Fade left>
                    <div className="md:w-1/4 p-2 mb-4 flex items-center justify-center text-center">
                        <PoweredByTraboda>
                            <div>In Association with the CBSE</div>
                            <a href="http://cbseacademic.nic.in/web_material/Circulars/2021/93_Circular_2021.pdf">
                                <img
                                    src={require('../../assets/images/logos/cbse.jpg')}
                                    alt="CBSE" draggable="false"
                                />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </Fade>
                <Fade right>
                    <div className="md:w-1/4 p-2 mb-4 flex items-center justify-center text-center">
                        <PoweredByTraboda>
                            <div>Powered By Traboda</div>
                            <a href="https://app.traboda.com">
                                <img
                                    src={require('../../assets/images/logos/traboda_light.png')}
                                    alt="Traboda" draggable="false"
                                />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </Fade>
            </div>
        </div>
    </ContactsBarSection>

};

export default LandingContactsBar;
