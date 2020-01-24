import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GooglePlay from "../../assetts/google-play.png";
import AppleStore from "../../assetts/apple-store.png";
import NavBar from "../../components/navigation";

import "./landing-page.scss";

const HeadingContainer = styled.div`
  padding: 2%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HeadingContent = styled.div`
  font-family: "Seymour One", sans-serif;
  margin-top: 5%;
  margin-left: 3%;
  width: 47.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;

  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;

const AppButton = styled.img`
  width: 30%;
  @media (max-width: 800px) {
    height: auto;
    width: 60%;
  }
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    height: 150%;
    position: absolute;
    bottom: -25%;
    left: 30%;
    @media (max-width: 1200px) {
      left: 100%;
    }
  }
`;

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <HeadingContainer>
        <HeadingContent>
          <div className="sub-content">
            <h2>Point and Click Adventure</h2>
            <p>
              Point and click adventure game with access to over 100+ rooms. Can
              you save the princess?
            </p>
            <div className="store-buttons">
              <AppButton src={AppleStore} alt="Apple store button" />
              <AppButton src={GooglePlay} alt="google play store button" />
            </div>
          </div>
        </HeadingContent>
        <HeadingContent>
          <Link className="play-button" to="/play-now">
            Play Now
          </Link>
        </HeadingContent>
      </HeadingContainer>
    </div>
  );
}

export default LandingPage;