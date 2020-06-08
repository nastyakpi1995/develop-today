import React, { FunctionComponent } from 'react';
import { Title } from '../../../styled/components/blogs/card';

interface Interface {
    id: number,
    title: string,
    handlerCansel: Function,
    handlerDelete: Function
}

type ConfirmTypes = Interface;

const Confirm: FunctionComponent<ConfirmTypes> = ({ handlerCansel, title, handlerDelete }) => {

    return (
        <div>
            <Title>
                do you really want delete {title} ?
            </Title>
            <button onClick={() => handlerDelete()}>Yes</button>
            <button onClick={() => handlerCansel()}>No</button>
        </div>

    );
}

export default Confirm;

