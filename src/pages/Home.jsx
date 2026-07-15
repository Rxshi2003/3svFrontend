import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Opportunities from '../components/Opportunities';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Opportunities />
      <Services limitTo={['Consultancy', 'Corporate Training', 'Entrepreneurship', 'Research & Development']} />
    </>
  );
}
