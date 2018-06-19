export const FETCH_USER_LIST = "FETCH_USER_LIST";
export const FETCH_USER_LIST_LOADING = "FETCH_USER_LIST_LOADING";
export const FETCH_USER_LIST_FAILURE = "FETCH_USER_LIST_FAILURE";

const fetchUserListLoading = (isLoading) => {
  return {
    type: FETCH_USER_LIST_LOADING,
    payload: { isLoading }
  }
}

const fetchUserListSuccess = (userList) => {
  return {
    type: FETCH_USER_LIST,
    payload: { userList }
  }
}

const fetchUserListFailure = (error) => {
  return {
    type: FETCH_USER_LIST_FAILURE,
    payload: { error }
  }
}

export const fetchUserList = (searchString = "a") => {
  return (dispatch) => {
    dispatch(fetchUserListLoading(true));
    fetch(`https://api.github.com/search/users?q=${searchString}`)
    .then((response) => {
      return response.json()
    })
    .then(res => {
      console.log("USER_LIST", res);
      dispatch(fetchUserListSuccess(res));
    })
    .catch(err => {
      console.log("ERR", err)
      dispatch(fetchUserListFailure(err));
    })
  }
}