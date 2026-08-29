import React from 'react';
import Welcome from '../components/Welcome';
import Opportunities from '../components/Opportunities';
import About3SV from '../components/About3SV';
import AboutMessages from '../components/AboutMessages';

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Welcome />
      <Opportunities />
      <About3SV />
      <AboutMessages />
    </div>
  );
}
