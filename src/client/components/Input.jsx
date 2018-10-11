import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.keypressHandler = this.keypressHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ input: event.value });
  }

  keypressHandler(event) {
    // check if space bar is pressed
    if (event.keyCode === 32) {
      // prevent the input from updating the state twice
      event.preventDefault();
      const input = document.querySelector('#input');
      // emit to socket
      // send input to the server
      props.sendInputToServer(input.value);
      // update values upon server validation
    } 
  }

  render() {
    return (
      <div>
        <form>
          <input id="input" type="text" value={props.userInput} onChange={changeHandler()} onKeyPress={keypressHandler()}/>
        </form>
      </div>
    );
  }
} 

export default Input;