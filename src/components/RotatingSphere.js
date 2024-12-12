import React from 'react';
import styled, { keyframes } from 'styled-components';
import tool1 from '../tool1.png';
import tool2 from '../tool2.png';
import tool3 from '../tool3.png';
import tool4 from '../tool4.png';
import tool5 from '../tool5.png';
import tool6 from '../tool6.png';
import tool7 from '../tool7.png';
import tool8 from '../tool8.png';
import tool9 from '../tool9.png';

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const SphereContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Sphere = styled.div`
  width: 100px; /* Decreased size */
  height: 100px; /* Decreased size */
  margin: 1rem;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: ${rotate} 15s infinite linear; /* Apply rotation here */
`;

const SphereFace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
`;

const Tool1 = styled(SphereFace)`
  background-image: url(${tool1});
`;

const Tool2 = styled(SphereFace)`
  background-image: url(${tool2});
`;

const Tool3 = styled(SphereFace)`
  background-image: url(${tool3});
`;

const Tool4 = styled(SphereFace)`
  background-image: url(${tool4});
`;

const Tool5 = styled(SphereFace)`
  background-image: url(${tool5});
`;

const Tool6 = styled(SphereFace)`
  background-image: url(${tool6});
`;

const Tool7 = styled(SphereFace)`
  background-image: url(${tool7});
`;

const Tool8 = styled(SphereFace)`
  background-image: url(${tool8});
`;

const Tool9 = styled(SphereFace)`
  background-image: url(${tool9});
`;

const Text = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  color: white;
`;

const RotatingSphere = () => {
  return (
    <SphereContainer>
      <div>
        <Sphere>
          <Tool1 />
        </Sphere>
        <Text>Git</Text>
      </div>
      <div>
        <Sphere>
          <Tool2 />
        </Sphere>
        <Text>React js</Text>
      </div>
      <div>
        <Sphere>
          <Tool3 />
        </Sphere>
        <Text>Java Script</Text>
      </div>
      <div>
        <Sphere>
          <Tool4 />
        </Sphere>
        <Text>Css</Text>
      </div>
      <div>
        <Sphere>
          <Tool5 />
        </Sphere>
        <Text>Mongo DB</Text>
      </div>
      <div>
        <Sphere>
          <Tool6 />
        </Sphere>
        <Text>Spring Boot</Text>
      </div>
      <div>
        <Sphere>
          <Tool7 />
        </Sphere>
        <Text>VS Code</Text>
      </div>
      <div>
        <Sphere>
          <Tool8 />
        </Sphere>
        <Text>Excel</Text>
      </div>
      <div>
        <Sphere>
          <Tool9 />
        </Sphere>
        <Text>Django</Text>
      </div>
    </SphereContainer>
  );
};

export default RotatingSphere;
