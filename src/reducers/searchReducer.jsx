import { FETCH_USER_LIST, FETCH_USER_LIST_FAILURE, FETCH_USER_LIST_LOADING } from '../actions/SearchUser'; 

const initialState = {
  loading: false,
  userList: {},
  error: null
};

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_USER_LIST) {
    return {
      ...state,
      loading: false,
      userList: action.payload.userList,
      error: null
    }
  }
  if (action.type === FETCH_USER_LIST_FAILURE) {
    return {
      ...state,
      loading: false,
      userList: {},
      error: action.payload.error
    }
  }
  if (action.type === FETCH_USER_LIST_LOADING) {
    return {
      ...state,
      loading: action.payload.isLoading,
    }
  }
  return state;
}

export default reducer;