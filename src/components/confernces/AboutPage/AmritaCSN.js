import React from 'react';
import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";
import Fade from "react-reveal/Fade";

const CyberSection = styled.section`
    background: #E3F2FE;
    h1 {
      font-weight: 600;
      font-size: calc(1.35rem + 1vw);
      margin-bottom: 15px;
    }
    img {
        max-width: 100%;
        max-height: 90px;
    }
    p {
        font-size: 14px;
    }
    .amritapuri-illustration {
        max-height: unset;
    }
`;

const CyberOrg = styled.div`
    background: white;
    padding: 1rem;
    margin-right: 10px;
    min-width: 200px;
    max-width: 75vw;
    height: 100%;
    h4 {
        font-weight: 900;
        color: #B71C1C;
    }
    h5 {
        color: #333;
        font-weight: 600;
        line-height: 1;
        font-size: calc(0.8rem + 0.25vw);
    }
    img {
        max-width: 100%;
        max-height: 90px;
    }
    p {
        font-size: 13px!important;
        line-height: 1.2;
    }
`;

const AmritaCenterForCyber = () => {

    const cyberOrgs = [
        {
            "name": "team bi0s",
            "tagline": "India's First & No.1 Ranked CTF Team",
            "logo": require('../../images/team_bi0s.png').default,
            "text": <>
                team bi0s is the India's No.1 ranked CTF team for 4 years running, and was the first
                CTF team to formed in India back in 2007. Today, team bi0s is passionate community
                of over 100 student members, mentored by their seniors, research scholars, alumni and faculty.
            </>
        },
        {
            "name": "InCTF",
            "tagline": "India's First & Premier CTF Contest",
            "logo": require('../../images/inctf_logo.png').default,
            "text": <>
                InCTF is an annual Capture The Flag (CTF) event organized by team bi0s, for college students
                in India in its national editions, and everyone else through its international edition. InCTF
                was the first CTF event to be held in India when it was started in 2010.
            </>
        },
        {
            "name": "InCTF Jr",
            "tagline": "India's First & Only CTF Contest for School Students",
            "logo": require('../../images/inctfjr_logo.png').default,
            "text": <>
                Amrita InCTF Junior is the first and only national-level CTF contest held exclusively for school
                students in India. Every year the brightest young hackers from all across India participate in this
                the learn & hack CTF contest, win exciting prizes & kick-start their cyber-security career.
            </>
        },
        {
            "name": "Team Shakti",
            "tagline": "India's First & Only Women CTF Team",
            "logo": require('../../images/shaktictf.png').default,
            "text": <>
                Team Shakti is a group of budding young female minds who have joined together for the cause of bringing about a change in the field of cyber-security. Established as a Capture The Flag team, the team works tirelessly to spread knowledge and make a contribution to balance the prevalent gender gap in the field.
            </>
        },
    ]

    return <CyberSection>
        <div className="container p-2">
            <Fade>
                <div className="mt-5">
                    <h5 className="mb-0">What is our track record?</h5>
                    <h1>CyberSecurity at Amrita</h1>
                </div>
            </Fade>
            <div className="row mx-0">
                <div className="col-md-4 p-2">
                    <Fade down>
                        <img
                            src={require('../../images/amrita_cyber.png').default}
                            draggable="false"
                            alt="Amrita Center for CyberSecurity Systemts & Networks"
                        />
                    </Fade>
                </div>
                <div className="col-md-8 p-1">
                    <Fade up>
                        <p>
                            <b>Amrita Center for Cybersecurity Systems and Networks</b> has pioneered training of professionals and
                            students and today its ‘bi0s’ team is ranked No. 1 in India and amongst the Top in the world for
                            ethical ranking. Empowering young women in the field of cybersecurity is one of its core
                            objectives deriving inspiration from the Chancellor of Amrita Vishwa Vidyapeetham -
                            Sri Mata Amritanandamayi Devi.
                        </p>
                    </Fade>
                </div>
            </div>
            <ScrollContainer vertical={false} hideScrollbars={false} className="scroll-container py-2">
                <div className="d-flex p-3" style={{ cursor: 'grabbing' }}>
                    {cyberOrgs.map((i, index) =>
                        <Fade right delay={index * 150}>
                            <CyberOrg>
                                <a href={i.url} target="_blank" rel="noreferrer" className="d-block mb-2 text-center">
                                    <img alt={i.name} draggable="false" src={i.logo} />
                                </a>
                                <h4>{i.name}</h4>
                                <h5>{i.tagline}</h5>
                                <p>{i.text}</p>
                            </CyberOrg>
                        </Fade>
                    )}
                </div>
            </ScrollContainer>
        </div>
        {/* <img
          src={require('../../images/amritapuri_illustration.png').default}
          style={{ width: '100%', height: 'auto' }}
          className="amritapuri-illustration"
          draggable="false" alt="amritapuri"
      /> */}
    </CyberSection>

};

export default AmritaCenterForCyber;