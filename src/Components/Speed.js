import React from "react";
import styled from "styled-components";
import speed from "../assets/speed-bg.jpg";
import Slide from "react-reveal/Slide";

const Speed = () => {
  return (
    <SpeedStyled id="speed">
      <Slide left>
        <div className="container">
          <div className="top">
            <h1>Speed.</h1>
          </div>

          <div className="bottom">
            <button className="btn btn-dark">Drive</button>
            <button className="btn">Ride</button>
          </div>
        </div>
      </Slide>
    </SpeedStyled>
  );
};

const SpeedStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${speed});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top {
      margin-top: 7rem;
      color: #f6f6f6;
    }
    .bottom {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 600px;
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: 540px) {
    .bottom {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Speed;
