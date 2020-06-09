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
    requestPostDelete: Function,
    index: number,
    requestPostPut: Function,
    isShowModal: boolean
}

type CardTypes = Interface;

const GET_POST = 'GET_CARD';
const DELETE_POST = 'DELETE_POST';

const Card: FunctionComponent<CardTypes> = ({
  id, content, title, requestPostDelete, index, requestPostPut, isShowModal
}) => {
    const [ action, setAction ] = useState(GET_POST)

    const handlerConfirm = () => {
        setAction(DELETE_POST);
    }

    switch (action) {
        case GET_POST: {
            return (
                <CardWrapper theme={index}>
                  <SectionComponent
                    index={index}
                    id={id}
                    content={content}
                    setAction={setAction}
                    handlerConfirm={handlerConfirm}
                    title={title}
                  />
                </CardWrapper>
            );
        }

        case DELETE_POST: {
            const handlerCansel = () => {
                setAction(GET_POST)
            }
            const handler = () => {
                requestPostDelete(id)
                setAction(GET_POST);
            }
            return (
                <CardWrapper theme={index}>
                    <Confirm id={id} title={title} handlerDelete={handler} handlerCansel={handlerCansel} />
                </CardWrapper>
            );
        }

        case 'UPDATE_POST': {
            const initialValues = {
                title: title,
                body: content
            }

            if (isShowModal) {
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

const mapStateToProps = (state: any) => ({
    isShowModal: state.getPost.isShowModal
})

export default (
    connect(mapStateToProps, actions)(Card)
);

