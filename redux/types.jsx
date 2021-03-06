const FETCH_TYPES = {
  GET_SUCCESS: '@@post/GET_SUCCESS',
  GET_REQUEST: '@@post/GET_REQUEST',
  GET_FAIL: '@@post/GET_FAIL',
  POST_SUCCESS: '@@post/POST_SUCCESS',
  POST_REQUEST: '@@post/POST_REQUEST',
  POST_FAIL: '@@post/POST_FAIL',
  DELETE_SUCCESS: '@@post/DELETE_SUCCESS',
  DELETE_REQUEST: '@@post/DELETE_REQUEST',
  DELETE_FAIL: '@@post/DELETE_FAIL',
  PUT_REQUEST: '@@post/PUT_REQUEST',
  PUT_SUCCESS: '@@post/PUT_SUCCESS',
  PUT_FAIL: '@@post/PUT_FAIL',
  MORE_POSTS: '@@post/MORE_POSTS',
};

export const CARD_TYPES = {
  SET_SHOW_MODAL: '@@card/SET_SHOW_MODAL',
  SET_CARD_ACTION: '@@card/SET_CARD_ACTION'
};

export default FETCH_TYPES;
