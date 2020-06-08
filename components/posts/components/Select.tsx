import React, {FunctionComponent, useState} from 'react';
import { Dropdown, DropdownList, Button, ButtonMain } from '../../../styled/components/dropdown';

interface Interface {
    id: number,
    handler: Function,
    setAction: Function,
    UPDATE_POST: string
}

type Type = Interface;

const Select: FunctionComponent<Type> = ({ handler, setAction, UPDATE_POST }) => {
const [ isShow, setIsShow ] = useState(false);
const handleClick = () => {
    setIsShow(!isShow)
}
    return (
        <Dropdown>
            <ButtonMain type="button" onClick={handleClick}>
            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="filter" cx="2" cy="2" r="2" fill="#ACAEAC"/>
                <circle className="filter" cx="8" cy="2" r="2" fill="#ACAEAC"/>
                <circle className="filter" cx="14" cy="2" r="2" fill="#ACAEAC"/>
            </svg>
            </ButtonMain>
            {isShow &&
            <DropdownList>
                <Button type="button" onClick={() => setAction(UPDATE_POST)}>
                    Edit Gym
                </Button>
                <Button
                    type="button"
                    onClick={() => handler()}
                >
                    Delete Gym
                </Button>
            </DropdownList>
            }
        </Dropdown>
    );
}

export default Select;

