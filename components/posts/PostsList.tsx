import React, {FunctionComponent, useEffect, useState} from 'react';
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
  requestPostCreate: Function
}

type PostsListTypes = ownInterface;

const PostsList: FunctionComponent<PostsListTypes> = ({
  postsData, startRange, showMorePost, endPage, postLoading, requestPostCreate, show
}) => {
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        debugger
        if (show) {
            setIsShowModal(true);
        }
    }, [show])

debugger
    const initialValues = {
        title: '',
        body: '',
    };
    return (
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
                                    setIsShowModal={setIsShowModal}
                                    isShowModal={isShowModal}
                                />
                            ))}
                    </div>
                    <Link
                        href={`posts/new`}
                    >
                        <a>CREATE NEW POST</a>
                    </Link>
                    {isShowModal &&
                        <FormBlog
                            initialValues={initialValues}
                            onHandlerClick={requestPostCreate}
                            setIsShowModal={setIsShowModal}
                            isShowModal={isShowModal}
                        />
                    }
                </>
            )}
        </Container>
    );
}

interface PropsInterface {
  getPost: {
    postsData: PostsData[],
    startRange: number,
    endPage: number,
    currentPage: number,
    pagesQuantity: number,
    postLoading: boolean
  }
}

const mapStateToProps = (state: PropsInterface) => ({
   postsData: state.getPost.postsData,
   startRange: state.getPost.startRange,
   endPage: state.getPost.endPage,
   currentPage: state.getPost.currentPage,
   pagesQuantity: state.getPost.pagesQuantity,
   postLoading: state.getPost.postLoading
});

export default connect(mapStateToProps, actions)(PostsList);
