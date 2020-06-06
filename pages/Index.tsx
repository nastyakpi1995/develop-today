import React from 'react';
import { ParticlesSlider, PostsList } from '../components/index';
import { Body } from '../styled/pages/pages';

const HomePage = () => (
  <>
    <Body>
      <ParticlesSlider/>
    </Body>
    <PostsList/>
  </>
);

export default HomePage;
