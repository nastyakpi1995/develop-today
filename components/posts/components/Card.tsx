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
    requestPostPut: Function
}

type CardTypes = Interface;

const Card: FunctionComponent<CardTypes> = ({
  id, content, title, requestPostDelete, index, requestPostPut
}) => {
    const GET_POST = 'GET_CARD';
    const DELETE_POST = 'DELETE_POST';
    var UPDATE_POST = 'UPDATE_POST';

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
                    UPDATE_POST={UPDATE_POST}
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

        case UPDATE_POST: {
            const initialValues = {
                title: title,
                body: content
            }

            return (
                    <FormBlog
                        onHandlerClick={requestPostPut}
                        initialValues={initialValues}
                        id={id}
                    />
            );
        }

        default: {
            return null;
        }
    }
}

export default (
    connect(null, actions)(Card)
);

