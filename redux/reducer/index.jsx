import { combineReducers } from 'redux';
import getPost from './postsRedusers';
import cardReducer from './cardReducer';

export default combineReducers({
  getPost,
  cardReducer
});
