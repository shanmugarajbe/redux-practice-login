import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true});
    const { dispatch } = this.props;
    const { user } = this.state;
    if(user.firstname && user.lastname && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }
  handleChange(e) {
    const { user} = this.state;
    const { name,value } = e.target;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return(
      <div className="col-md-6 col-md-offset-3">
        <h2 >Register</h2>
        <form name="form" onSubmit={this.handleSubmit} >
          <div className={"form-group" + (submitted && !user.firstname ? "has-error": "")>
            <label>First name</label>
            <input type="text" name="firstname" value={user.firstname} onChange={this.handleChange} />
            {submitted && !user.firstname && <div className="help-block">Firstname is required</div> }
          </div>
          <div className={"form-group" + (submitted && !user.lastname ? "has-error" : "")>
            <label>Last name</label>
            <input type="text" name="lastname" value={user.lastname} onChange={this.handleChange} />
            {submitted && !user.lastname && <div className="help-block">Lastname is required</div>}
          </div>
          <div className={"form-group" + (submitted && !user.username ? "has-error" : "")>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={this.handleChange} />
            {submitted && !user.username && <div className="help-block">Username is required</div>}
          </div>
          <div className={"form-group" + (submitted && !user.password ? "has-error" : "")>
            <label>Password</label>
            <input type="password" name="password" value={user.password} onChange={this.handleChange}/>
            {submitted && !user.password && <div className="help-block">Password is required</div>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary" >Register</button>
            {registering &&
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        }
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  }
}

const connectedRegisterApp = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterApp as RegisterPage }