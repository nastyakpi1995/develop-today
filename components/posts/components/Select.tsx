import React, {FunctionComponent, useState} from 'react';
import { Dropdown, DropdownList, Button, ButtonMain } from '../../../styled/components/dropdown';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

interface Interface {
    id: number,
    handler: Function,
    setAction: Function,
    index: number,
    setIsShowModal: Function
}

type Type = Interface;


const UPDATE_POST = 'UPDATE_POST';

const Select: FunctionComponent<Type> = ({ handler, setAction, index, setIsShowModal }) => {
const [ isShow, setIsShow ] = useState(false);
const handleClick = () => {
    setIsShow(!isShow)
}
const HandlerChange = () => {
    setIsShowModal(true);
    setAction(UPDATE_POST);
}

    return (
        <Dropdown theme={index}>
            <ButtonMain theme={index} type="button" onClick={handleClick}>
            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="filter" cx="2" cy="2" r="2" fill="#ACAEAC"/>
                <circle className="filter" cx="8" cy="2" r="2" fill="#ACAEAC"/>
                <circle className="filter" cx="14" cy="2" r="2" fill="#ACAEAC"/>
            </svg>
            </ButtonMain>
            {isShow &&
            <DropdownList>
                <Button type="button" onClick={HandlerChange}>
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

const mapStateToProps = (state: any) => ({
    isShowModal: state.getPost.isShowModal
})

export default (
    connect(mapStateToProps, actions)(Select)
);
