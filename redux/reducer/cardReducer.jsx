import { CARD_TYPES } from '../types';

const defaultState = {
    isShowModal: false,
    cardAction: 'GET_POST'
};

// -------- Reducer --------

export default (state = defaultState, action) => {

    switch (action.type) {

        case CARD_TYPES.SET_SHOW_MODAL: {

            return {
                ...state,
                isShowModal: action.isShow,
            };
        }

        case CARD_TYPES.SET_CARD_ACTION: {

            return {
                ...state,
                cardAction: action.action,
            };
        }

        default: {
            return state;
        }
    }
};
