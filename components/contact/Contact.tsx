import React from 'react';

import List from './List';
import { GlobalStyle } from '../../styled/pages/pages';
import {
  Wrapper,
  Title,
  ContentWrapper,
} from '../../styled/components/contact';

const Contact = () => (
  <Wrapper>
    <GlobalStyle/>
    <div>
      <Title>Contacts</Title>
    </div>
    <ContentWrapper>
      <List/>
    </ContentWrapper>
  </Wrapper>
);

export default Contact;
