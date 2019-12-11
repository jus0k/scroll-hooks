import React from 'react';
import { Header } from '../../components';
import { Hero, Services, Feature, Figure, Works } from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
      <Figure />
      <Works />
    </>
  );
};

export default Home;
