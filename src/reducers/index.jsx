import { combineReducers } from "redux";
import searchListReducer from './searchReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  searchListReducer,
  profileReducer
});

export default reducers;