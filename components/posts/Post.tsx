import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { PostsData } from '../../redux/typeScript/types';
import * as actions from "../../redux/actions";

import { Container, PostTitle, Wrapper } from '../../styled/components/post';


interface OwnInterface {
  postsData: PostsData[],
}

type PostDataTypes = OwnInterface;

const Post: FunctionComponent<PostDataTypes> = ({ postsData }) => {
  const idPost = useRouter().query.id;
  // @ts-ignore
  const posts = postsData?.filter((item) => item.id === +idPost);

  return (
    <Wrapper>
      {posts && posts.map(item => (
        <Container>
          <PostTitle>
            {item.title}
          </PostTitle>
          <p>{item.body}</p>
        </Container>
      ))}
    </Wrapper>
  );
};

interface ReduxInterface {
  getPost: {
    postsData: PostsData[],
    startRange: number,
    endPage: number
  }
}

const mapStateToProps = (state: ReduxInterface) => ({
  postsData: state.getPost.postsData,
  startRange: state.getPost.startRange,
  endPage: state.getPost.endPage,
});

export default (
  connect(mapStateToProps, actions)(Post)
);
