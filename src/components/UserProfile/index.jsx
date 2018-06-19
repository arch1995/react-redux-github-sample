import React, { PureComponent } from 'react';
export default class UserSearch extends PureComponent {

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  }
  render() {
    // const { userProfile, loading } = this.props;
    return (
      <div>
        
      </div>
    );
  }
}