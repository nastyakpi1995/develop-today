import apiCaller from '../utils/apiCaller';

export const userList = async () => {
  return apiCaller({
    url: '/posts',
    method: 'get',
  });
};

export const postsPost = async (data) => {
  return apiCaller({
    url: '/posts',
    method: 'post',
    data,
  });
};

export const userDelete = async (id) => {
  return apiCaller({
    url: `/posts/${id}`,
    method: 'delete',
  });
};

export const userPut = async (id, data) => {
  return apiCaller({
    url: `/posts/${id}`,
    method: 'put',
    data,
  });
};
