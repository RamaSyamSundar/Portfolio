import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import globeVideo from '../globe.mp4'; // Ensure the correct path to your video file

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;
  min-height: 100vh;
  background-color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;

const VideoContainer = styled.div`
  flex: 2;
  margin-left: 4rem;
  margin-top: 10rem; /* Move video down */

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
`;

const ContactFormContainer = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 14rem; /* Add space between form and video */

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ContactHeading = styled.h2`
  color: white;
  margin-bottom: 1rem;
`;

const ContactDetails = styled.div`
  color: white;
  margin-bottom: 2rem;
  line-height: 1.5;

  p {
    margin: 0.5rem 0;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const ContactForm = styled.form`
  width: 450px;
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: ${gradientAnimation} 5s ease infinite;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: #e81cff;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #e81cff;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #fff;
    border-color: #fff;
  }

  &:active {
    scale: 0.95;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <ContactContainer>
      <ContactFormContainer>
        <ContactHeading>Contact Me</ContactHeading>
        <ContactDetails>
          <p>Email: syamsundarrama@gmail.com</p>
          <p>Phone: +91 7036786677</p>
          <p>Location: Guntur dist, Andhra Pradesh , India</p>
        </ContactDetails>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactFormContainer>
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src={globeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </ContactContainer>
  );
};

export default Contact;
