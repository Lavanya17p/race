import React from "react";
import styled from "styled-components";
import contact from "../assets/contact-bg.jpg";
import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <ContactStyled id="contact">
      <Slide right>
        <div className="container">
          <div className="top">
            <h1>Contact.</h1>
          </div>

          <form action="">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                cols="30"
                rows="10"
                placeholder="Type the message..."
              ></textarea>
            </div>
            <div className="bottom">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      </Slide>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  width: 100%;
  height: 100vh !important;
  height: 100%;
  background: url(${contact});
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
      margin-bottom: 1rem;
    }
    form {
      max-width: 600px;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        label {
          margin: 1rem 0 0.2rem 0.7rem;
          color: #eee;
        }
        input,
        textarea {
          margin: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          border-radius: 25px;
          color: #f6f6f6;
          outline: none;
          font-size: 1rem;
          font-family: "Roboto Condensed", sans-serif;
          &:hover {
            box-shadow: 0 0 4px 0;
          }
          &::placeholder {
            color: #333;
          }
        }
      }
    }
  }
`;

export default Contact;
