import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = (event) =>{
    this.setState({
      message: "" + `${event.target.value}`
    })
    this.remainingCharacters(event)
  }

  remainingCharacters = (event) =>{
    return (this.props.maxChars - this.state.message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message}
        onChange={event => this.handleMessageChange(event)}/>
      <p>You have {this.remainingCharacters()} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
