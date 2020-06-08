import FETCH_TYPES from '../types';

const defaultState = {
  totalLength: 0,
  endPage: 5,
  startRange: 0,
  postsData: null,
  postPutSuccess: false,
  postLoading: false,
  currentPost: '',
  postErrors: null,
};

// -------- Reducer --------

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TYPES.GET_REQUEST: {
      return {
        ...state,
        postLoading: true,
      };
    }

    case FETCH_TYPES.GET_SUCCESS: {
      return {
        ...state,
        postLoading: false,
        postsData: action.data,
        startRange: action.data.length - 4,
        endPage: action.data.length,
        totalLength: action.data.length,
      };
    }

    case FETCH_TYPES.GET_FAIL: {
      return {
        ...state,
        postErrors: action.data,
        postPutSuccess: false,
        postLoading: false,
      };
    }

    case FETCH_TYPES.POST_REQUEST: {
      return {
        ...state,
        postLoading: true,
      };
    }

    case FETCH_TYPES.POST_SUCCESS: {
      return {
        ...state,
        postPutSuccess: true,
        postLoading: false,
        postsData: action.data,
        endPage: action.data.length,
      };
    }

    case FETCH_TYPES.POST_FAIL: {
      return {
        ...state,
        postErrors: action.data,
        postPutSuccess: false,
        postLoading: false,
      };
    }

    case FETCH_TYPES.DELETE_REQUEST: {

      return {
        ...state,
        postLoading: true,
      };
    }

    case FETCH_TYPES.DELETE_SUCCESS: {

      return {
        ...state,
        postLoading: false,
        postsData: action.data,
        startRange: action.data.length - 4,
      };
    }

    case FETCH_TYPES.DELETE_FAIL: {
      return {
        ...state,
        postPutSuccess: false,
        postLoading: false,
      };
    }

    case FETCH_TYPES.PUT_REQUEST: {
      return {
        ...state,
        postLoading: true,
      };
    }

    case FETCH_TYPES.PUT_SUCCESS: {
      return {
        ...state,
        postPutSuccess: true,
        postLoading: false,
        postsData: action.data,
      };
    }

    case FETCH_TYPES.PUT_FAIL: {
      return {
        ...state,
        postPutSuccess: false,
        postLoading: false,
        postErrors: action.data,
      };
    }

    case FETCH_TYPES.MORE_POSTS: {

      return {
        ...state,
        startRange: state.startRange - 4,
      };
    }

    default: {
      return state;
    }
  }
};
