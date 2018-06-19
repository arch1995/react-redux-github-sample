export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const FETCH_USER_PROFILE_LOADING = "FETCH_USER_PROFILE_LOADING";
export const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";

const fetchUserProfileLoading = (isLoading) => {
  return {
    type: FETCH_USER_PROFILE_LOADING,
    payload: { isLoading }
  }
}

const fetchUserProfileSuccess = (userProfile) => {
  return {
    type: FETCH_USER_PROFILE,
    payload: { userProfile }
  }
}

const fetchUserProfileFailure = (error) => {
  return {
    type: FETCH_USER_PROFILE_FAILURE,
    payload: { error }
  }
}

export const fetchUserProfile = (username) => {
  return (dispatch) => {
    dispatch(fetchUserProfileLoading(true));
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.json()
    })
    .then(res => {
      console.log("USER_PROFILE", res);
      dispatch(fetchUserProfileSuccess(res));
    })
    .catch(err => {
      console.log("ERR", err)
      dispatch(fetchUserProfileFailure(err));
    })
  }
}