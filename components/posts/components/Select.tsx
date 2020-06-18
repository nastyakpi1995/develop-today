import React, { FunctionComponent, useState } from 'react';
import { Dropdown, DropdownList, Button, ButtonMain } from '../../../styled/components/dropdown';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

interface Interface {
  setAction: Function,
  index: number,
  id: number,
  setIdPost: Function,
  setIsShowModal: Function
}

type Type = Interface;

const Select: FunctionComponent<Type> = ({ setAction, index, id, setIsShowModal, setIdPost }) => {
const [ isShow, setIsShow ] = useState(false);
const handleClick = () => {
  setIsShow(!isShow)
}

const handlerChange = () => {
  setIsShowModal(true);
  setIdPost(id);
  setAction('UPDATE_POST');
}

const handlerDelete = () => {
  setIdPost(id);
  setAction('DELETE_POST');
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
          <Button type="button" onClick={handlerChange}>
              Edit Gym
          </Button>
          <Button
              type="button"
              onClick={handlerDelete}
          >
              Delete Gym
          </Button>
        </DropdownList>
      }
    </Dropdown>
  );
}

interface StateInterface {
  cardReducer: {
    isShowModal: boolean
  }
}

const mapStateToProps = (state: StateInterface) => ({
  isShowModal: state.cardReducer.isShowModal
})

export default (
  connect(mapStateToProps, actions)(Select)
);
