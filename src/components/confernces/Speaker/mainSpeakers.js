import React from 'react';
import styled from "@emotion/styled";
import shortid from "shortid";

const SpeakersContainer = styled.div`
    background: #223;
    padding: 6vh 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: tomato;
        font-weight: 600;
        padding: 1.5rem 0;
    }
    .scroll-container {
      &::-webkit-scrollbar{
          background: rgba(2,2,2,0.5);
          width: 8px;
      }
      ::-webkit-scrollbar-thumb {
          background: rgba(120,20,150,0.5);
      }
      ::-webkit-scrollbar-thumb:hover {
           background: rgba(120,20,150,0.8);
      }
    }
`

const SpeakerCard = styled.div`
    text-align: center;
    background: rgba(0,0,30,0.3);
    color: #eee;
    padding: 0 0.35rem;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    user-select: none;
    transition: all 0.5s ease;
    border: ${({ isTrainer }) => isTrainer ? `2px solid #9C27B0` : `2px solid tomato` };
    &:hover {
       transform: translateY(-8px);
       transition: all 0.5s ease;
       border-radius: 10px;
       img {
         border-radius: 15px;
         transition: all 0.7s ease;
       }
    }
    img {
      max-height: 180px;
      max-width: 100%;
      border-radius: 100vw;
      margin-bottom: 1rem;
      transition: all 0.7s ease;
      display: block;
    }
    h3 {
       font-size: calc(0.9rem + 0.15vw);
        color: #fd7e14;
        margin-bottom: 5px;
    }
    h4 {
       font-size: calc(0.75rem + 0.15vw);
       color: #eee;
       margin-bottom: 3px;
    }
    h5 {
       font-size: calc(0.8rem + 0.2vw);
       color: #FFF;
       font-weight: 600;
    }
    .trainer-badge, .speaker-badge {
       display: inline-block;
       padding: 3.5px 10px;
       font-size: calc(0.8rem + 0.25vw);
       border-radius: 5px;
       transform: translateY(-12px);
    }
    .trainer-badge {
        background: #9C27B0;
    }
    .speaker-badge {
         background: tomato;

    }
    .social-media-links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      a {
          margin-right: 8px;
          i {
            color: #AAA;
            font-size: 24px;
          }
          &:hover {
            i {
              color: white;
            }
          }
        }
    }
`

const ConferenceSpeakers = () => {

    const speakers = [
        {
            "name": "Ramesh Kumar",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../../../../src/assets/images/conference/speakers/Ramesh-kumar.jpeg").default,
        },
        {
            "name": "Ajit Dhumale",
            "designation": "Senior Engineer",
            "company": "CrowdStrike",
            "image": require("../../../../src/assets/images/conference/speakers/AjitDhumale-Saurabh-Gawas.jpg").default,
        },
        {
            "name": "Sagar Gulhane",
            "designation": "Sr. Threat Research Engineer",
            "company": "CrowdStrike",
            "image": require("../../../../src/assets/images/conference/speakers/Sagar_Gulhane.jpg").default,
        },
        {
            "name": "Aniket Amdekar",
            "designation": "General Manager - Cyber Defence Education",
            "company": "Great Learning",
            "image": require("../../../../src/assets/images/conference/speakers/Aniket-Amdekar.jpg").default,
        },
        // {
        //     "name": "Zoey Garvey",
        //     "isTrainer": true,
        //     "designation": "Consultant Software Engineer",
        //     "company": "Federal Reserve Bank of San Francisco",
        //     "image": require('../../images/speakers/zoey.jpg'),
        //     "links": {
        //         "linkedin": "https://www.linkedin.com/in/zoey-garvey-66982b34/"
        //     }
        // },
        // {
        //     "name": "Yarden Shafir",
        //     "isTrainer": true,
        //     "designation": "Software Engineer",
        //     "company": "Crowdstrike",
        //     "image": require('../../images/speakers/yarden_shafir.jpg'),
        //     "links": {
        //         "twitter": "https://twitter.com/yarden_shafir?lang=en"
        //     }
        // },
        // {
        //     "name": "Arya M Shankar",
        //     "isTrainer": true,
        //     "designation": "Product & Solution Security Professional",
        //     "company": "Siemens",
        //     "image": require('../../images/speakers/arya.JPG')
        // },
    ];

    return <SpeakersContainer id="speakers">
        <div className="row mx-0">
            <div className="col-12 px-2 py-3 text-center">
                {/* <Fade left> */}
                    <h2>Speakers</h2>
                {/* </Fade> */}
            </div>
        
            {speakers.map((s, index) =>
                <div key={shortid.generate()} className="col-xl-2 col-lg-3 col-md-4 col-6 p-2">
                    <SpeakerCard isTrainer={s.isTrainer}>
                        <div>
                            {s.isTrainer ?
                                <div className="trainer-badge">Trainer</div>
                                : <div className="speaker-badge">Speaker</div>
                            }
                            <div className="d-flex justify-content-center">
                                {s.image && <img src={s.image} alt={s.name} draggable="false" />}
                            </div>
                            <h3>{s.name}</h3>
                        </div>
                        {s.company && <div>
                            <h4>{s.designation}</h4>
                            <h5>{s.company}</h5>
                        </div>}
                        {/*{s.links &&*/}
                        {/*<div className="social-media-links">*/}
                        {/*    {s.links?.twitter &&*/}
                        {/*    <a href={s.links.twitter} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-twitter" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.linkedin &&*/}
                        {/*    <a href={s.links.linkedin} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="fab fa-linkedin" />*/}
                        {/*    </a>}*/}
                        {/*    {s.links?.website &&*/}
                        {/*    <a href={s.links.website} rel="noreferrer nofollow" target="_blank">*/}
                        {/*        <i className="far fa-globe" />*/}
                        {/*    </a>}*/}
                        {/*</div>}*/}
                    </SpeakerCard>
                </div>
            )}
        </div>
    </SpeakersContainer>

};

export default ConferenceSpeakers;
