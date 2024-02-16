import React from "react";
import styled from "styled-components";
import logo from "../../Assets/Logo/virtuosoft-logo-2x.png";
import { useNavigate } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #0a0a0a;
  padding: 50px 100px;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const FooterContent = styled.div`
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
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
  }
`;

const FooterDiv = styled.div`
  font-size: 68px;
  line-height: 81px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    font-size: 55px;
    line-height: 70px;
    padding-bottom: 20px;
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
      <FooterContent>
        <Column6 className="col-6">
          <Row>
            <FooterDiv>
              <span>{"Have a project"}</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/contact-us')}>
                {"in mind? let's talk "}
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
            </FooterDiv>
          </Row>
        </Column6>
        <Column2 className="col-2">{/* Empty col-2 */}</Column2>
        <Column2 className="col-2">
          <Row>
            <div>
              <ul
                style={{
                  fontSize: "21px",
                  lineHeight: "40px",
                  letterSpacing: "0.5%",
                  color: "#F5F5F5",
                  listStyleType: "none",
                }}
              >
                <li style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  {"Home"}
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  // onClick={() => navigate("/about-us")}
                >
                  <a href="#about-us" style={{textDecoration:'none',fontSize: "21px",
                  lineHeight: "40px",
                  letterSpacing: "0.5%",
                  color: "#F5F5F5",}}>
                  {"About"}
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  // onClick={() => navigate("#services")}
                >
                  <a href="#services" style={{textDecoration:'none',fontSize: "21px",
                  lineHeight: "40px",
                  letterSpacing: "0.5%",
                  color: "#F5F5F5",}}>
                  {"Services"}
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/products")}
                >
                  {"Products"}
                </li>
              </ul>
            </div>
            <div>
              <ul
                style={{
                  fontSize: "21px",
                  lineHeight: "40px",
                  letterSpacing: "0.5%",
                  color: "#F5F5F5",
                  listStyleType: "none",
                }}
              >
                <li> <a  style={{
                  cursor:'pointer',
                  textDecoration:'none',
                  color: "#F5F5F5",
                }} href="https://www.linkedin.com/company/virtuosoft" target="_blank" rel="noreferrer">
                {"Linkedin"}</a></li>
                <li>{"Facebook"}</li>
              </ul>
            </div>
          </Row>
        </Column2>
      </FooterContent>
      <div
        style={{ marginTop: "100px", height: "2px", background: "#393939" }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "23px",
          color: "#F5F5F5",
        }}
      >
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
         <span style={{ display: window.innerWidth > 768 ? "block" : "none" }}>
          {"Copyright © 2024 virtuosoft"}
        </span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
