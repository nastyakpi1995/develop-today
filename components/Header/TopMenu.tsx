import React from 'react';
import Link from 'next/link';

import { Menu, BoxWrapper } from '../../styled/components/topMenu';

const pages = [
  { id: '', text: 'home' },
];

const TopMenu = () => (
  <Menu>
      <div>
    <BoxWrapper>
      {pages.map(page => (
        <Link
          key={page.id}
          href={`${page.id || '/'}`}
        >
          <a>{page.text}</a>
        </Link>
      ))}
    </BoxWrapper>
      </div>
  </Menu>
);

export default TopMenu;
