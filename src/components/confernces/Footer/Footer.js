import React from 'react'
import styled from "@emotion/styled";



const FooterContainer = styled.section`
footer {
    background-color: #222640;
    width: auto;
    height: auto;
    top: 0;
    padding: 0;
    background-size: cover;
    text-align: center;
    overflow: hidden;
  }
  
  logo {
    padding-left: 20px;
    position: relative;
    text-align: center;
  }
  
  h2{
      font-size: 30px;
    color:white;
  }
  middle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      text-align: center;
  }
  
  btn {
      display: inline-block;
      width: 60px;
      height: 50px;
      background-color: #f1f1f1;
      margin: 10px;
      border-radius: 50%;
      box-shadow: 0 5px 15px -5px #00000070;
      color: #3498db;
      overflow: hidden;
      position: relative;
  }
  
  btn i {
      line-height: 40px;
      font-size: 25px;
      transition: 0.2 linear;
  }
  btn:hover i {
      transform: scale(1.3);
      color: #f1f1f1;
  }
  btn::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background-color: #3498db;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
  }
  btn:hover::before{
      animation: aaa 0.7s 1;
      top: -10%;
      left: -10%;
  }
  youtube:hover::before{
      background: red;
  }
  facebook:hover::before{
      background: #3b5999;
  }
  instagram:hover::before{
      background: #e4405f;
  }
  google:hover::before {
      background: #dd4b39;
  }
  
  @keyframes aaa {
      0%{
          left: -110%;
          top: 90%;
      }
      50%{
          left: 10%;
          top: -30%
      }
      100%{
          top: -10%;
          left: -10%;
      }
  }
  
  .copyright {
    padding-top: 40px;
    color: white;
    font-size: 20px;
  }
`

function Footer() {

    return (
        <FooterContainer>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div></div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="middle">
                            <h2>Get In Touch</h2>
                            <a className="btn facebook" href="https://www.facebook.com/InCTF/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn twitter" href="https://twitter.com/InCTF">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn instagram" href="https://www.instagram.com/inctf">
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright">© InCTF 2020 - 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        </FooterContainer>
    )
}

export default Footer
