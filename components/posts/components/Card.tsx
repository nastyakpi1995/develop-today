import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';

import SectionComponent from './Section'
import * as actions from "../../../redux/actions";
import Confirm from "./Confirm";
import FormBlog from '../../Form/Index';
import { CardWrapper } from '../../../styled/components/blogs/card';


interface Interface {
    id: number,
    content: string,
    title: string,
    index: number,
    requestPostPut: Function,
    isShowModal: boolean,
    action: string,
}

type CardTypes = Interface;

const Card: FunctionComponent<CardTypes> = ({
  id, content, title, index, requestPostPut, isShowModal, action,
}) => {
    const [idPost, setIdPost] = useState(0)
    switch (action) {

        case 'GET_POST': {
            return (
                <CardWrapper theme={index}>
                  <SectionComponent
                    index={index}
                    id={id}
                    content={content}
                    setIdPost={setIdPost}
                    title={title}
                  />
                </CardWrapper>
            );
        }

        case 'DELETE_POST': {
            if (idPost === id) {
                return (
                    <CardWrapper theme={index}>
                        <Confirm id={id} title={title}/>
                    </CardWrapper>
                )
            }
        }

        case 'UPDATE_POST': {
            const initialValues = {
                title: title,
                body: content
            }

            if (isShowModal && idPost === id) {
                return (
                    <FormBlog
                        onHandlerClick={requestPostPut}
                        initialValues={initialValues}
                        id={id}
                    />
                )}
        }


        default: {
            return null;
        }
    }
}

interface StateInterface {
    cardReducer: {
        isShowModal: boolean,
        cardAction: string
    }
}

const mapStateToProps = (state: StateInterface) => ({
    isShowModal: state.cardReducer.isShowModal,
    action: state.cardReducer.cardAction
})

export default (
    connect(mapStateToProps, actions)(Card)
);

