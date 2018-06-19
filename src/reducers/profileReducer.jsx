import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_LOADING } from '../actions/UserProfile'; 

const initialState = {
  loading: false,
  userProfile: {},
  error: null
};

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_USER_PROFILE) {
    return {
      ...state,
      loading: false,
      userProfile: action.payload.userProfile,
      error: null
    }
  }
  if (action.type === FETCH_USER_PROFILE_FAILURE) {
    return {
      ...state,
      loading: false,
      userProfile: {},
      error: action.payload.error
    }
  }
  if (action.type === FETCH_USER_PROFILE_LOADING) {
    return {
      ...state,
      loading: action.payload.isLoading,
    }
  }
  return state;
}

export default reducer;