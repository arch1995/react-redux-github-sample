import React, { PureComponent } from 'react';
import { List, Image, Input } from 'semantic-ui-react';
export default class UserSearch extends PureComponent {

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  }
  render() {
    const { userList, user, loading } = this.props;
    return (
      <div>
        <Input 
          loading={loading} 
          icon='user' 
          placeholder='Search...' 
          onChange={this.handleChange}
          name="user"
          value={user}
        />
        <List divided relaxed>
        {
          userList && userList.items && userList.items.length > 0 ?
          userList.items.map((user, index) => (
            <List.Item key={index}>
              <Image avatar src={user.avatar_url} />
              <List.Content>
                <List.Header as='a' href={`/users/${user.login}`}>{user.login}</List.Header>
              </List.Content>
            </List.Item>
          ))
          :
          <p>No Mathcing results found</p>
        }
        </List> 
      </div>
    );
  }
}