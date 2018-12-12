import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]: "" + event.target.value
    })
  }

  //LoginForm receives a prop(onSubmit) from App, which is equal to a
  //function object (login).
  //When the onSubmit event is fired, LoginForm can invoke that function
  //through props (this.props.onSubmit) with it's current state passed in
  //as the argument to the login function.
  //The login function is destructured, meaning that it expects an object
  //{ username, password } with two key/value pairs
  render() {
    return (
      <form onSubmit={ event =>{
           event.preventDefault()
           this.state.username !== "" && this.state.password !== "" ?
           (this.props.onSubmit({username: this.state.username, password: this.state.password})) : null
         }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
