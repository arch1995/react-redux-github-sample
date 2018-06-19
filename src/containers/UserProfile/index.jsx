import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserProfile } from '../../actions/UserProfile';
import UserProfile from '../../components/UserProfile';
class UserProfileContainer extends Component {

  componentWillMount() {
    if (this.props.location.pathname.split('/')[2] !== '') {
      const username = this.props.location.pathname.split('/')[2];
      console.log(username);
      this.props.fetchUserProfile(username);
    }
  }
  render() {
    const { userProfile, loading } = this.props;
    return (
      <UserProfile
        loading={loading}
        userProfile={userProfile}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProfile: (username) => dispatch(fetchUserProfile(username))
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.profileReducer.loading,
    userProfile: state.profileReducer.userProfile,
    error: state.profileReducer.error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer)