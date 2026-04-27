import React from 'react';
import { Header, Footer } from '../../components';
import {
  Hero,
  Services,
  Feature,
  Figure,
  Works,
  Contact,
  Banner,
} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
      <Figure />
      <Works />
      <Contact />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
