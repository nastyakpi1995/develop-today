import React from 'react';
import { connect } from 'react-redux';

import { PostsList } from '../../components';
import * as actions from '../../redux/actions';

import { Content } from '../../styled/pages/pages';


const Blog = ({ setIsShowModal }) => {
  setIsShowModal(true);

  return (
    <Content>
      <PostsList show={true}/>
    </Content>
  );
};

export default connect(null, actions)(Blog);
