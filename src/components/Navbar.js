import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  backdrop-filter: blur(10px);
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
`;

const NavButton = styled(Link)`
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid rgb(61, 106, 255);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: white;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem; /* Adjust spacing between buttons */

  &:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState('home');

  const handleSetActive = (to) => {
    setActive(to);
  };

  const scrollToSkills = () => {
    scroller.scrollTo('skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  return (
    <Nav>
      <NavButton
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        active={active === 'home'}
        onSetActive={handleSetActive}
      >
        Home
      </NavButton>
      <NavButton
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        active={active === 'about'}
        onSetActive={handleSetActive}
      >
        About
      </NavButton>
      <NavButton
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        active={active === 'skills'}
        onSetActive={handleSetActive}
        onClick={scrollToSkills}
      >
        Skills
      </NavButton>
      <NavButton
        to="work-experience"
        smooth={true}
        duration={500}
        spy={true}
        active={active === 'work-experience'}
        onSetActive={handleSetActive}
      >
        Work Experience
      </NavButton>
      <NavButton
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        active={active === 'contact'}
        onSetActive={handleSetActive}
      >
        Contact
      </NavButton>
    </Nav>
  );
};

export default Navbar;
