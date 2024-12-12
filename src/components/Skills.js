import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
import '../App.css';
import cp from '../cp.png';
import adc from '../adc.png';
import redhat from '../redhat.png';
import az from '../az.png';
import ai from '../ai.png';
import orc from '../oracle.png';
import RotatingSphere from './RotatingSphere'; // Import the new component
import Projects from './Projects'; // Import the new component

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsHeading = styled.h2`
  margin-bottom: 1rem;
`;

const SkillsButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  max-width: 80%;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: translateY(${props => (props.visible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
  flex: 0 1 calc(20% - 1rem);

  &:hover {
    background-color: #0056b3;
  }
`;

const CertificationsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: translateY(${props => (props.visible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const CertificationCard = styled.div`
  width: 300px;
  height: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover .verify-link {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CertificationDescription = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const CertificationTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const CertificationInfo = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CertificationLink = styled.a`
  display: inline-block;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const WorkExperienceContainer = styled.div`
  padding: 2rem;
  min-height: 100vh; /* Adjust as needed */
`;

const WorkExperienceCard = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust as per design */
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

const Skills = () => {
  const [showButtons, setShowButtons] = React.useState(Array(10).fill(false));
  const [showCertifications, setShowCertifications] = React.useState(false);

  const skills = ['Java', 'C++', 'SQL', 'Django', 'React.js', 'JavaScript', 'HTML/CSS', 'Database Management' , 'OSD' , 'Docker' , 'Jenkins'];

  React.useEffect(() => {
    const delay = 300;
    const timeoutIds = [];

    const showButton = index => {
      timeoutIds.push(setTimeout(() => {
        setShowButtons(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * delay));
    };

    // Show buttons sequentially
    for (let i = 0; i < showButtons.length; i++) {
      showButton(i);
    }

    // Clean up timeouts
    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, [showButtons.length]);

  React.useEffect(() => {
    // Check if all buttons are shown
    if (showButtons.every(button => button)) {
      setShowCertifications(true);
    }
  }, [showButtons]);

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      image: cp,
      link: 'https://www.credly.com/badges/2fa87609-12d7-411d-96dd-f3c85f54eb45/public_url',
    },
    {
      title: 'AWS Developer Associate',
      image: adc,
      link: 'https://www.credly.com/badges/24784eaf-2019-4b14-8d93-aac96da22f87/public_url',
    },
    {
      title: 'Red Hat Ex-183',
      image: redhat,
      link: 'https://www.credly.com/badges/cc8d1810-7a2c-4c6a-b6f1-56dcc410b33b/public_url',
    },
    {
      title: 'Cloud & Devops',
      image: az,
      link: 'https://www.credly.com/badges/796932c5-6ed6-44d7-8104-85036d58f2ac',
    },
    {
      title: 'Oracle Cloud Infrastructure',
      image: orc,
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E38F9B571645AB8A54FF45338837D5B6610D0BE616C3B5BAC8F309EA14F87DDD',
    },
  ];

  return (
    <Element name="skills">
      <SkillsContainer>
        <SkillsHeading>Skills and Certifications</SkillsHeading>
        <p>Technical Skills:</p>
        <SkillsButtons>
          {skills.map((skill, index) => (
            <Button key={index} visible={showButtons[index]}>
              {skill}
            </Button>
          ))}
        </SkillsButtons>

        {/* Certifications Section */}
        <p>Global Certifications:</p>
        <CertificationsContainer visible={showCertifications}>
          {certifications.map((certification, index) => (
            <div key={index}>
              <CertificationCard>
                <CertificationImage src={certification.image} alt={certification.title} />
                <CertificationLink className="verify-link" href={certification.link} target="_blank" rel="noopener noreferrer">
                  &#8594;
                </CertificationLink>
              </CertificationCard>
              <CertificationDescription>
                <CertificationTitle>{certification.title}</CertificationTitle>
                <CertificationInfo>{certification.info}</CertificationInfo>
              </CertificationDescription>
            </div>
          ))}
        </CertificationsContainer>

        {/* Tools & Technologies Section */}
        <p>Tools & Technologies:</p>
        <RotatingSphere /> {/* Add the RotatingSphere component */}

        {/* Projects Section */}
        <br></br>
        
        <p>Projects:</p>
        <Projects /> {/* Include the Projects component */}
      </SkillsContainer>
    </Element>
  );
};

export default Skills;
