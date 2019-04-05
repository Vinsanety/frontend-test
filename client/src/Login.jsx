import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = this.state;
    axios.post('http://localhost:3001/auth', { name, password })
      .then((result) => {
        
      });
      console.log(this.state);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h2 className="login-title">Login to Seaspan</h2>
        <div className="login-input">
          <label htmlFor="username">Username: </label>
          <input id="username" name="name" type="text" value={this.name} onChange={this.onChange} />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" value={this.password} onChange={this.onChange} />
        </div>
        <button className="primary-btn" type="submit">Send it!</button>
        <span className="forgot-password">Forgot password? <a href="https://reactjs.org/">We can help</a></span>
      </form>
    );
  }
}

export default Login;
