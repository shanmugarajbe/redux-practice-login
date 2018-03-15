import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {

  handleDeleteuser(userId) {
    return (e) => this.props.dispatch(userActions.delete(userId));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3" >
        <h1> Hi, {user.name}! </h1>
        <p> Welcome to React Tutorial</p>
        <h3> All Registered users: </h3>
        {users.loading && <em> Loading users ... </em>}
        users.items &&
        <ul>
          {users.items.map((user, index) =>
              <li key={user.id}>
                  {user.firstName+ '' + user.lastName }
                  {
                    user.deleting && <em> Deleting ...</em>
                    : user.deleteError ?  <span> ERROR: Error in deleting user:  {user.delete} </span>
                    : <span> - <a onClick={this.handleDeleteuser(user.id)} >Delete</a>  </span>
                  }
              </li>
            ) }
        </ul>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication  } = state;
  const { user } = authentication;
  return {
      user,
      users
  }
}

const connectedHomepage = connect(mapStateToProps)(HomePage);
export { connectedHomepage as HomePage };
