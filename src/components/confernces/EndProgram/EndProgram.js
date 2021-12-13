import React from 'react'
import styled from "@emotion/styled";
import hack from '../../../../src/assets/images/conference/endprogram/hack1.png'
import conf from '../../../../src/assets/images/conference/endprogram/conf1.png'
import team from '../../../../src/assets/images/conference/endprogram/team4.png'

const EndProgramContainer = styled.section`
endprogram {
    width: auto;
    text-align: center;
    background-size: cover;
    height: auto;
  }
  
  title_program {
    font-size: calc(1.5rem + 2vw);
    color: tomato;
    font-weight: 600;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    padding-top: 40px;
  }
  
  endhead {
    color: white;
    font-weight: 600;
  }
  enddet {
    padding-top: 20px;
    color: white;
  }
  
  grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
  }
  
  
  grid>article {
    border: 2px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgb(250, 248, 248);
    
  }
  grid>article:hover{
    background-color: rgb(44, 33, 33);
  }
  
  grid>article img {
    max-width: 100%;
  }
  
  grid .text {
    padding: 20px;
  }
`

function EndProgram() {
    return (
        <EndProgramContainer>
        <div className="endprogram">
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="section_title"><br /><br /><br />
                    <h3 className="title_program" >
                        End to End Program
                    </h3>
                </div>
                <div className="container">
                    <main className="grid">
                        <article>
                            <img draggable="false" src={hack} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CTF Hacking Conference</h3>
                                <p className="enddet">A PAN India CTF final round, which is a centre stage that showcases the best talent in cybersecurity, with the winners getting cool rewards and scholarships.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src={conf} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">Trainings Programmes</h3>
                                <p className="enddet">Exciting training sessions and workshops to recognize and nurture talents in the field of cyber-security and empowering them to take it up in their career paths.</p>
                            </div>
                        </article>
                        <article>
                            <img draggable="false" src={team} alt="brand-img" className="img-fluid" />
                            <div className="text">
                                <h3 className="endhead">CyberSecurity Conference</h3>
                                <p className="enddet">Talks, Panel Discussions and insightful Keynote sessions on cybersecurity by top global experts in the field.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <br /><br /><br />
        </div>
        </EndProgramContainer>
    )
}

export default EndProgram
