import React from 'react';
import Head from 'next/head';

import { TopMenu } from '../index';
import { GlobalStyle } from '../../styled/pages/pages';

const Header = () => (
  <>
    <Head>
      <title>DevelopsToday</title>
    </Head>
    <GlobalStyle/>
    <TopMenu/>
  </>
);

export default Header;
