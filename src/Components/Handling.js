import React from "react";
import styled from "styled-components";
import handling from "../assets/handling-bg.jpg";
import Slide from "react-reveal/Slide";

const Handling = () => {
  return (
    <HandlingStyled id="handling">
      <Slide left>
        <div className="container">
          <div className="top">
            <h1>Handling.</h1>
          </div>

          <div className="bottom">
            <button className="btn btn-dark">Drive</button>
            <button className="btn">Ride</button>
          </div>
        </div>
      </Slide>
    </HandlingStyled>
  );
};

const HandlingStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${handling});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
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

export default Handling;
