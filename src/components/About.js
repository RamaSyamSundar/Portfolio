import React from 'react';
import styled from 'styled-components';
import me from '../me.png'; // Adjust the path as necessary
import cv_sundar from '../cv_sundar.pdf'; // Adjust the path as necessary

const Card = styled.div`
  width: 90%;
  max-width: 85em;
  background: black;
  border-radius: 20px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3em;
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 0 2em;
  }
`;

const Info = styled.p`
  font-weight: 400;
  color: white;
  font-size: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Img = styled.div`
  width: 14.8em;
  height: 14.8em;
  background: url(${me}) center/cover no-repeat;
  border-radius: 20px;
  margin-bottom: 1em;
`;

const Share = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Anchor = styled.a`
  color: white;
  transition: .4s ease-in-out;

  &:hover {
    color: red;
  }
`;

const Button = styled.a`
  padding: 0.8em 1.7em;
  display: block;
  margin: 1em auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: .4s ease-in-out;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: red;
    color: white;
    cursor: pointer;
  }
`;

const About = () => {
  return (
    <Card>
      <Img />
      <Content>
        <h2>About Me</h2>
        <Info>
        I’m Syam Sundar, a recent graduate of KL University with a B.Tech in Computer Science with Honours, holding a current CGPA of 8.75/10. I completed a specialization in Software Modelling and DevOps.
        </Info>
        <Info>
        I possess strong problem-solving and web development skills, which have enabled me to complete various projects across different stacks and participate in hackathons.
        </Info>
        <Share>
          <Anchor href="https://github.com/RamaSyamSundar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/syamsundarrama6677/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725a.723.723 0 0 1-.725-1.146V1.146zm4.943 12.248V6.169H3.126v7.225h1.817zm-.909-8.205c.594 0 .958-.389.958-.875-.011-.497-.364-.875-.943-.875-.58 0-.958.378-.958.875 0 .486.364.875.943.875h.001zm3.862 8.205V9.359c0-.213-.015-.426-.078-.613a1.694 1.694 0 0 0-1.577-1.09c-.86 0-1.205.651-1.205 1.332v4.356h1.815v-4.131c0-.221.016-.442.08-.618a1.696 1.696 0 0 1 1.571-1.093c.862 0 1.209.653 1.209 1.339v4.324h1.815V9.358c0-.21-.016-.425-.078-.61a1.694 1.694 0 0 0-1.573-1.091c-.862 0-1.207.651-1.207 1.332v4.356H7.896z"></path>
            </svg>
          </Anchor>
          <Anchor href="https://www.instagram.com/_syam_.naidu_/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.83 0 5.556.01 4.703.048c-.854.04-1.435.174-1.943.372a3.905 3.905 0 0 0-1.417.923 3.923 3.923 0 0 0-.923 1.417c-.198.508-.333 1.089-.372 1.943C0 5.83 0 6.103 0 8s.01 2.444.048 3.297c.04.854.174 1.435.372 1.943.199.51.462.95.923 1.417.467.461.907.724 1.417.923.508.198 1.089.333 1.943.372.853.039 1.127.048 3.297.048s2.444-.01 3.297-.048c.854-.04 1.435-.174 1.943-.372a3.905 3.905 0 0 0 1.417-.923 3.923 3.923 0 0 0 .923-1.417c.198-.508.333-1.089.372-1.943.039-.853.048-1.127.048-3.297s-.01-2.444-.048-3.297c-.04-.854-.174-1.435-.372-1.943a3.916 3.916 0 0 0-.923-1.417A3.924 3.924 0 0 0 13.24.42c-.508-.198-1.089-.333-1.943-.372C10.444.01 10.17 0 8 0zm0 1.46c2.125 0 2.38.008 3.22.046.78.035 1.203.166 1.485.276.374.145.641.319.922.6.281.281.454.547.6.922.11.282.24.705.276 1.485.038.84.046 1.095.046 3.22s-.008 2.38-.046 3.22c-.035.78-.166 1.203-.276 1.485a2.464 2.464 0 0 1-.6.922 2.471 2.471 0 0 1-.922.6c-.282.11-.705.24-1.485.276-.84.038-1.095.046-3.22.046s-2.38-.008-3.22-.046c-.78-.035-1.203-.166-1.485-.276a2.487 2.487 0 0 1-.922-.6 2.481 2.481 0 0 1-.6-.922c-.11-.282-.24-.705-.276-1.485-.038-.84-.046-1.095-.046-3.22s.008-2.38.046-3.22c.035-.78.166-1.203.276-1.485.145-.374.319-.641.6-.922.281-.281.547-.454.922-.6.282-.11.705-.24 1.485-.276.84-.038 1.095-.046 3.22-.046zM8 3.89A4.11 4.11 0 1 0 8 12.11 4.11 4.11 0 0 0 8 3.89zm0 1.46a2.65 2.65 0 1 1 0 5.3 2.65 2.65 0 0 1 0-5.3zm5.22-.49a.99.99 0 1 0-.98-.99.99.99 0 0 0 .98.99z"></path>
            </svg>
          </Anchor>
        </Share>
        <Button href={cv_sundar} target="_blank">
          Resume
        </Button>
      </Content>
    </Card>
  );
};

export default About;
