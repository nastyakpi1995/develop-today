import React from 'react';
import Head from 'next/head';

import { TopMenu } from '../components/index';
import { GlobalStyle } from '../styled/pages/pages';

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
