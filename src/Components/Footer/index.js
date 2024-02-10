import React from "react";
import styled from "styled-components";
import logo from "../../Assets/Logo/virtuosoft-logo-2x.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FooterWrapper = styled.footer`
  background-color: #0a0a0a;
  padding: 50px 100px;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column6 = styled.div`
  flex: 0 0 100%;
  color: #fff;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
  }
`;

const Column2 = styled.div`
  flex: 0 0 100%;
  color: #fff;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    flex: 0 0 25%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterContent
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      >
        <Column6 className="col-6">
          <Row>
            <div
              style={{
                fontSize: "61px",
                lineHeight: "81px",
                fontWeight: 300,
                display: "flex",
              }}
            >
              <span>
                {"Have a project in mind? let’s talk"}
                &nbsp;
                <svg
                  width="84"
                  height="52"
                  viewBox="0 0 84 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="82"
                    height="50"
                    rx="25"
                    stroke="#393939"
                    strokeWidth="2"
                  />
                  <path
                    d="M35 26.5059H49"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 33.5938L49 26.5114L42 19.429"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div>{"contact@virtuosoft.in"}</div>
          </Row>
        </Column6>
        <Column2 className="col-2">{/* Empty col-2 */}</Column2>
        <Column2 className="col-2">
          <Row>
            <div>
              <ul style={{fontSize:"21px",lineHeight:'40px',letterSpacing:'0.5%',color:'#F5F5F5',listStyleType:'none'}}>
                <li style={{cursor:'pointer'}} onClick={()=>navigate('/')}>{'Home'}</li>
                <li style={{cursor:'pointer'}} onClick={()=>navigate('/about-us')}>{'About'}</li>
                <li style={{cursor:'pointer'}} onClick={()=>navigate('/services')}>{'Services'}</li>
                <li style={{cursor:'pointer'}} onClick={()=>navigate('/products')}>{'Products'}</li>
              </ul>
            </div>
            <div>
            <ul style={{fontSize:"21px",lineHeight:'40px',letterSpacing:'0.5%',color:'#F5F5F5',listStyleType:'none'}}>
                <li>{'Linkedin'}</li>
                <li>{'Facebook'}</li>
              </ul>
            </div>
          </Row>
        </Column2>
      </FooterContent>
      <div style={{marginTop:'100px',height:'2px',background:'#393939'}}></div>
      <div style={{display:'flex',justifyContent:'space-between',paddingTop:'23px',color:'#F5F5F5'}}>
      <img
        src={logo}
        alt="Virtuosoft-Logo"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "160px",
          height: "36px",
        }}
      />
      <span>
      Copyright © 2024 virtuosoft
      </span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
