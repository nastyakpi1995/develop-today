import FETCH_TYPES from './types';

export const requestGetPost = (data) => ({
  type: FETCH_TYPES.GET_REQUEST,
  data,
});

export const successGetPost = (data) => ({
  type: FETCH_TYPES.GET_SUCCESS,
  data,
});

export const errorGetPost = (data) => ({
  type: FETCH_TYPES.GET_FAIL,
  data,
});

export const requestPostCreate = (data) => ({
  type: FETCH_TYPES.POST_REQUEST,
  data,
});

export const successPostCreate = (data) => ({
  type: FETCH_TYPES.POST_SUCCESS,
  data,
});

export const errorPostCreate = (data) => ({
  type: FETCH_TYPES.POST_FAIL,
  data,
});

export const requestPostDelete = (id) => ({
  type: FETCH_TYPES.DELETE_REQUEST,
  id,
});

export const successPostDelete = (id) => ({
  type: FETCH_TYPES.DELETE_SUCCESS,
  id,
});

export const errorPostDelete = (id) => ({
  type: FETCH_TYPES.DELETE_FAIL,
  id,
});

export const requestPostPut = (id, data) => ({
  type: FETCH_TYPES.PUT_REQUEST,
  id,
  data,
});

export const successPostPut = (id) => ({
  type: FETCH_TYPES.PUT_SUCCESS,
  id,
});

export const errorPostPut = (id) => ({
  type: FETCH_TYPES.PUT_FAIL,
  id,
});

export const showMorePost = () => ({
  type: FETCH_TYPES.MORE_POSTS,
});
