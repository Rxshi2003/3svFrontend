import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Opportunities from '../components/Opportunities';
import About3SV from '../components/About3SV';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Opportunities />
      <About3SV />
      <Services limitTo={['Consultancy', 'Corporate Training', 'Entrepreneurship', 'Research & Development']} />
    </>
  );
}
