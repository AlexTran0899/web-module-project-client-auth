import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(res => {
    window.localStorage.setItem("token", JSON.stringify(res.data.payload))
    this.props.history.push('/Friends')
    }
    )
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;