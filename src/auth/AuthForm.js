import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export default class Auth extends PureComponent {
  constructor(props) {
    super(props);
    const { user = {} } = this.props;
    this.state = {
      userName: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userName, password } = this.state;
    this.props.onComplete({ userName, password });
    event.target.reset();
  }
  handleChange = ({ target: input }) => {
    this.setState({
      [input.userName]: input.value
    });
  }

  handleReset = () => {
    const { user = {} } = this.props;
    this.setState({
      userName: user._id || null,
      password: user.password
    });
  }

  render() {
    const { userName, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User Name:</label>
        <input name="name" value={userName} placeholder="Enter Your Unique Name" onChange={this.handleChange}/>
        <label>Password:</label>
        <input name="password" value={password} placeholder="Enter Your Password" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>ADD</button>
        <button type="submit" onClick={this.handleReset}>RESET</button>
      </form>
    );
  }
}
