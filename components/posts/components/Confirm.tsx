import React, { FunctionComponent } from 'react';
import { Title } from '../../../styled/components/blogs/card';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

interface Interface {
    id: number,
    title: string,
    requestPostDelete: Function,
    setAction: Function
}

type ConfirmTypes = Interface;

const Confirm: FunctionComponent<ConfirmTypes> = ({ id, title, requestPostDelete, setAction }) => {
    const handlerDelete = () => {
        requestPostDelete(id);

        setAction('GET_POST');
    }
    return (
        <div>
            <Title>
                do you really want delete {title} ?
            </Title>
            <button onClick={() => handlerDelete()}>Yes</button>
            <button onClick={() => setAction('GET_POST')}>No</button>
        </div>

    );
}

export default (
    connect(null, actions)(Confirm)
);


