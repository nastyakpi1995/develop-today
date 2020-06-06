import React from 'react';
import { icons, links, description } from '../../constants/contact';

import { Name, Menu, Link, Ul, Li, Description } from '../../styled/components/contact';

const List = () => (
  <Menu>
    <Name>Anastasia:</Name>
    <div>
      <Ul>
        {icons.map((icon, index) => (
          <Li key={index}>
            <Link href={links[index]}>
              <img src={icon} alt="icon"/>
              <Description>{description[index]}</Description>
            </Link>
          </Li>
        ))}
      </Ul>
        <a href="CV_Krat Anastasia.pdf" download title="Load CV in pdf">
            <i>My CV</i>
        </a>
    </div>
  </Menu>
);

List.propTypes = {};

export default List;
