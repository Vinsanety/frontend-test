import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h2 className="login-title">Login to Seaspan</h2>
        <div className="login-input">
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" type="text" />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" />
        </div>
        <button className="primary-btn">Send it!</button>
        <span className="forgot-password">Forgot password? <a href="#">We can help</a></span>
      </form>
    );
  }
}

export default Login;
