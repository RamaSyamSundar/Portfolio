import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import styled, { keyframes } from 'styled-components';
import { Element } from 'react-scroll';
import '../App.css';
import pic from '../herobg.png';
import pic1 from '../image.png';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 10%;
  padding-top: 10%;
  position: relative;
  background-image: url(${pic});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Name = styled.h1`
  font-size: 3rem;
  color: white;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Align image to the right */
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const FloatingImage = styled.img`
  max-width: 100%;
`;

const Home = () => {
  return (
    <Element name="home">
      <HomeContainer>
        <TextContainer>
          <Name>
            <TypeWriterEffect
              textStyle={{ fontFamily: 'Red Hat Display', color: '#fff', fontWeight: 500, fontSize: '1.5em' }}
              startDelay={100}
              cursorColor="white"
              text="Hello I am Syam Sundar!"
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </Name>
          <h4 style={{ color: 'white' }}>I am a recent graduate from KL University with a B.Tech in Computer Science and Engineering (Hons.)</h4>
        </TextContainer>
        <ImageContainer>
          <FloatingImage src={pic1} alt="Pic 1" />
        </ImageContainer>
      </HomeContainer>
    </Element>
  );
};

export default Home;
