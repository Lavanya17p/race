import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaInstagram, FaFacebook } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import Slide from "react-reveal/Slide";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  return (
    <NavbarStyled className="navbar">
      <Slide top>
        <div className="container">
          <div className={slide ? "logo slide-right" : "logo"}>
            <h3>Race.</h3>
          </div>

          <ul className={nav ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="#power">Power</a>
            </li>
            <li>
              <a href="#speed">Speed</a>
            </li>
            <li>
              <a href="#options">Options</a>
            </li>
            <li>
              <a href="#handling">Handling</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            <div className="mobile-menu">
              <button>Shop</button>
              <button>Account</button>
              <div className="social">
                <FaFacebook className="icon" />
                <FaInstagram className="icon" />
                <GiCarWheel className="icon" />
              </div>
            </div>
          </ul>

          <ul className="nav-menu hide">
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
          </ul>

          <div className="hamburger" onClick={handleNav}>
            {nav ? (
              <FaTimes size={20} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars style={{ color: "#ffffff" }} size={20} />
            )}
          </div>
        </div>
      </Slide>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 5;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      margin: 1rem;
      z-index: 5;
      color: #f6f6f6;
    }

    .nav-menu {
      display: flex;
      li {
        padding: 1rem;
        a {
          color: #f6f6f6;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }

    .mobile-menu {
      display: none;
    }

    .hamburger {
      display: none;
      padding: 1rem;
    }
  }

  @media screen and (max-width: 940px) {
    .container {
      .hamburger {
        display: block;
        z-index: 5;
      }

      .mobile-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .nav-menu {
        position: absolute;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        height: 100vh;
        background: var(--primary-color);
        top: 0;
        right: -100%;
        transition: 0.9s ease-in-out;
        li {
          margin: 0.5rem;
          a {
            font-size: 1.2rem;
          }
          &:hover {
            border-bottom: 1px solid #aaa;
            width: 175px;
          }
        }
        button {
          margin: 1rem auto;
          padding: 0.7rem 1.5rem;
          font-size: 1.2rem;
          border-radius: 25px;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          width: 100%;
          color: #f6f6f6;
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }
        .social {
          display: flex;
          justify-content: space-evenly;
          margin: 1rem;
          .icon {
            color: #f8f8f8cc;
            font-size: 1.4rem;
          }
        }
      }
      .hide {
        display: none !important;
      }
      .active {
        right: 0;
      }
      .slide-right {
        margin-left: 45%;
        transition: 0.8s ease-in-out;
      }
    }
  }

  @media screen and (max-width: 495px) {
    .nav-menu {
      width: 75%;
    }
    .slide-right {
      margin-left: 30%;
    }
  }
`;

export default Navbar;
