import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { PostsData } from '../../redux/typeScript/types';
import { Container, PostTitle, Wrapper } from '../../styled/components/post';
import * as actions from "../../redux/actions";

interface ownInterface {
  postsData: PostsData[],
}

type PostDataTypes = ownInterface;

const Post: FunctionComponent<PostDataTypes> = ({ postsData }) => {
  let idPost: any | number, witchPost: PostsData[];
  idPost = useRouter().query.id;
  witchPost = postsData?.filter((item) => item.id === +idPost);

  return (
    <Wrapper>
      {witchPost && witchPost.map(item => (
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

interface reduxInterface {
  getPost: {
    postsData: PostsData[],
    startRange: number,
    endPage: number
  }
}

const mapStateToProps = (state: reduxInterface) => ({
  postsData: state.getPost.postsData,
  startRange: state.getPost.startRange,
  endPage: state.getPost.endPage,
});

export default (
    connect(mapStateToProps, actions)(Post)
);
