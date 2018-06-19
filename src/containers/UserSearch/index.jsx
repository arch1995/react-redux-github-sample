import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserList } from '../../actions/SearchUser';
import UserSearch from '../../components/UserSearch';

class UserSearchContainer extends Component {

  state = {
    user: ''
  }

  componentWillMount() {
    this.props.searchUser();
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
    this.props.searchUser(value);
  } 
  render() {
    const { loading, userList } = this.props;
    return (
      <UserSearch
        loading={loading}
        userList={userList}
        user={this.state.user}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (searchString) => dispatch(fetchUserList(searchString))
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.searchListReducer.loading,
    userList: state.searchListReducer.userList,
    error: state.searchListReducer.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchContainer)