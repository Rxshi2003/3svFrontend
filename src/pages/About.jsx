import React from 'react';
import Welcome from '../components/Welcome';
import Opportunities from '../components/Opportunities';
import AboutMessages from '../components/AboutMessages';

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Welcome />
      <Opportunities />
      <AboutMessages />
    </div>
  );
}
