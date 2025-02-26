import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import ScrollContainer from "react-indiana-drag-scroll";

const CyberSecRelevanceWrap = styled.section`
    padding: 8vh 2vw;
    background: #223;
    color: #EEE;
`;

const WomenInCyberSection = styled.section`
    padding: 1rem;
    h3 {
      font-size: calc(1.1rem + 0.2vw);
    }
    h1 {
      font-weight: 900;
      font-size: calc(1.25rem + 1.35vw);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .subtitle {
      font-size: calc(1.2rem + 0.15vw);
      margin-bottom: 0.5rem;
      max-width: 650px;
      line-height: 1.35;
      color: tomato;
    }
    p {
        font-size: 14px;
        max-width: 720px;
        color: #AAA;
    }
    b {
        font-weight: 600;
        color: #FFF;
    }
    blockquote {
        font-family: 'Kalam', cursive;
        font-size: calc(1.2rem + 0.5vw);
        line-height: 1.25;
        margin-bottom: 0.5rem;
    }
`;


const CyberSecurityRelevance = () => {

    const UNSDGGoals = [
        require('../../images/unsdg/sdg4.png').default,
        require('../../images/unsdg/sdg5.png').default,
        require('../../images/unsdg/sdg8.png').default,
        require('../../images/unsdg/sdg10.png').default,
        require('../../images/unsdg/sdg11.png').default,
    ]

    return <CyberSecRelevanceWrap>
        <WomenInCyberSection>
            <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />
            <div className="row mx-0">
                <div className="col-md-7 px-2">
                    <div className="py-2">
                        <Fade>
                            <h3>Why InCTFCon?</h3>
                        </Fade>
                        <Fade delay={150}>
                            <h1>
                                <span className="d-md-inline-block">Industry needs skilled professionals </span>
                                <span className="d-md-inline-block">for securing the Digital world</span>
                            </h1>
                        </Fade>
                        <Fade delay={300}>
                            <div className="subtitle">
                            We need to high skilled professionals to  <span className="d-md-inline-block">protect the globe from the cyber pandemic.</span>
                            </div>
                        </Fade>
                    </div>
                    <Fade delay={500}>
                        <p>
                            CyberSecurity as a profession is one where demand is outstripping supply, and based on the technological
                            evolutions and ever-increasing threat landscape, it is expected that there will be triple the number
                            of job openings over the next 5 years, with <b>over 3.5 million new cybersecurity job openings in 2021</b>.
                            
                        </p>
                    </Fade>
                </div>
                <div className="col-md-5 d-flex align-items-center p-2">
                    {/* <div>
                        <Fade right>
                            <div className="pb-4">
                                <blockquote>
                                    Safeguarding our lives online requires skills and experiences that lie beyond masculine
                                    stereotypes of the hacker and soldier.
                                </blockquote>
                                <div>- Winifred R. Poster</div>
                            </div>
                        </Fade>
                        <Fade delay={200} right>
                            <div>
                                <blockquote>
                                    Women often don’t see tech or security as viable career paths because they’re
                                    often considered masculine professions.
                                </blockquote>
                                <div>- Jessica Ortega, SiteLock</div>
                            </div>
                        </Fade>
                    </div> */}
                    <div>
                        <Fade right>
                        <img style={{width:"100%"}}
                            src={require('../../images/landing-cover-image.png').default}
                            draggable="false"
                            alt="Amrita Center for CyberSecurity Systemts & Networks"
                        />
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="text-light text-center py-2 mt-4 mt-md-0 p-md-4">
                <div
                    style={{ fontSize: 'calc(0.8rem + 0.35vw)' }}
                    className="mb-0"
                >
                    Amrita Vishwa Vidyapeetham through InCTFCon proudly supports
                </div>
                <img
                    src={require('../../images/unsdg/logo.png').default}
                    className="mb-0" style={{ maxHeight: '160px', maxWidth: '100%' }}
                    alt="ShaktiCon & Amrita takes pride in supporting the UN Sustainable Development Goals"
                />
                <ScrollContainer vertical={false} className="scroll-container py-2">
                    <div className="d-flex justify-content-center p-2">
                        {UNSDGGoals.map((g) =>
                            <div className="px-2" style={{ width: '200px', minWidth: '150px' }}>
                                <img
                                    draggable="false"
                                    style={{ maxWidth: '100%', borderRadius: '10px' }}
                                    src={g}
                                    alt="UN SDG Goal"
                                />
                            </div>
                        )}
                    </div>
                </ScrollContainer>
            </div>
        </WomenInCyberSection>
    </CyberSecRelevanceWrap>

};

export default CyberSecurityRelevance;