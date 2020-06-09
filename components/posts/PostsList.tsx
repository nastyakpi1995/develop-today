import React, { FunctionComponent } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Card from './components/Card';
import * as actions from '../../redux/actions';
import { PostsData } from "../../redux/typeScript/types";
import { Container, BoxLoad } from '../../styled/components/blogs/blogs';
import { FormBlog } from "../index";

interface ownInterface {
  postsData: PostsData[],
  showMorePost: Function,
  endPage: number,
  startRange: number,
  postLoading: boolean,
  show?: boolean,
  requestPostCreate: Function,
}

type PostsListTypes = ownInterface;

const initialValues = {
    title: '',
    body: '',
};

const PostsList: FunctionComponent<PostsListTypes> = ({
  postsData, startRange, showMorePost, endPage, postLoading, requestPostCreate, show
}) => (
    <Container>
        {postLoading ? (
            <BoxLoad>
                <Loader
                    type="Circles"
                    color="black"
                    height={500}
                    width={100}
                />
            </BoxLoad>
        ) : (
            <>
                <button
                    type="button"
                    onClick={() => showMorePost()}
                    disabled={startRange === 1}
                >
                    show more posts
                </button>
                <div>
                    {postsData && postsData
                        .slice(startRange, endPage)
                        .map((item: PostsData, index: number) => (
                            <Card
                                key={item.id}
                                index={index + 4}
                                id={item.id}
                                content={item.body}
                                title={item.title}
                            />
                        ))}
                </div>
                <Link
                    href={`posts/new`}
                >
                    <a>CREATE NEW POST</a>
                </Link>
                {show &&
                <FormBlog
                    initialValues={initialValues}
                    onHandlerClick={requestPostCreate}
                />
                }
            </>
        )}
    </Container>
);

interface PropsInterface {
  getPost: {
    postsData: PostsData[],
    startRange: number,
    endPage: number,
    currentPage: number,
    pagesQuantity: number,
    postLoading: boolean,
  }
}

const mapStateToProps = (state: PropsInterface) => ({
   postsData: state.getPost.postsData,
   startRange: state.getPost.startRange,
   endPage: state.getPost.endPage,
   currentPage: state.getPost.currentPage,
   pagesQuantity: state.getPost.pagesQuantity,
   postLoading: state.getPost.postLoading,
});

export default connect(mapStateToProps, actions)(PostsList);
