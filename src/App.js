import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Ratings from './components/Ratings';

import { Element } from 'react-scroll';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="work-experience"><WorkExperience /></Element>
      <Element name="contact"><Contact /></Element>
      <Element name="Ratings"><Ratings /></Element>


    </Router>
  );
};

export default App;
