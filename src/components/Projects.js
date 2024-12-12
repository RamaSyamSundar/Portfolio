import React from 'react';
import styled from 'styled-components';
import docter from '../docter.png';
import docker from '../docker.png';
import cicd from '../cicd.png';
import pf from '../pf.png';


const ProjectsContainer = styled.div`
  padding: 2rem;
  min-height: 100vh; /* Adjust as needed */
`;

const ProjectsHeading = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  position: relative;
  width: 280px;
  height: 250px; /* Increased height to accommodate description */
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 10px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));

  &:hover {
    transform: rotate(0deg);
    margin: 0 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    bottom: 40px;
    width: 100%;
    height: 40px;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  img {
    width: 130%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

const ProjectDescription = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 0 0 10px 10px;
  font-size: 0.8rem;
`;

const CodingProfilesContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  color: #fff;
`;

const CodingProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const CodingProfileLink = styled.a`
  text-decoration: none;
`;

const Button = styled.button`
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149cea;
  outline: none;
  background-color: black;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: black;
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: black;
    transition: 0.5s;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`;

const Projects = () => {
  const projects = [
    {
      text: 'Project 1',
      rotate: '-15',
      link: 'https://github.com/RamaSyamSundar',
      img: docter,
      description: 'Doctor Appointment System.',
    },
    {
      text: 'Project 2',
      rotate: '5',
      link: 'https://github.com/RamaSyamSundar',
      img: docker,
      description: 'WebServer Using Docker',
    },
    {
      text: 'Project 3',
      rotate: '25',
      link: 'https://github.com/RamaSyamSundar',
      img: cicd,
      description: 'CI/CD Pipeline Implementation for Automated Software Delivery.',
    },
    {
      text: 'Project 4',
      rotate: '16',
      link: 'https://github.com/RamaSyamSundar',
      img: pf,
      description: 'Portfolio Project.',
    },
  ];

  const codingProfiles = [
    {
      name: 'Code Chef',
      link: 'https://www.codechef.com/users/syamsundarrama',
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/syamsundar6677/',
    },
    {
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/profile/syamsundar6677',
    },
    {
      name: 'Codeforces',
      link: 'https://codeforces.com/profile/Ramasyamsundar',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectCards>
        {projects.map((project, index) => (
          <ProjectCard key={index} data-text={project.text} style={{ '--r': project.rotate }}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="glass">
              <img src={project.img} alt={project.text} />
            </a>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectCards>
      <br></br>
      <CodingProfilesContainer>
        <ProjectsHeading>Coding Profiles</ProjectsHeading>
        <br></br>
        <CodingProfileLinks>
          {codingProfiles.map((profile, index) => (
            <CodingProfileLink key={index} href={profile.link} target="_blank" rel="noopener noreferrer">
              <Button>{profile.name}</Button>
            </CodingProfileLink>
          ))}
        </CodingProfileLinks>
      </CodingProfilesContainer>
    </ProjectsContainer>
  );
};

export default Projects;
