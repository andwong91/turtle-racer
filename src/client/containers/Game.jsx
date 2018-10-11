import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Input from '../components/Input';
import Prompt from '../components/Prompt';

const mapStateToProps = store => ({
  prompt: store.prompt,
  userInput: store.userInput,
  validWords: store.validWords,
  validInput: store.validInput,
  invalidInput: store.invalidInput,
  currChar: store.currChar,
  nextChar: store.nextChar,
  remainingChars: store.remainingChars,
  remainingWords: store.remainingWords,
});

const mapDispatchToProps = dispatch => ({
  addPrompt: (str) => dispatch(actions.addPrompt(str)),
  getUserInput: () => dispatch(actions.getUserInput()),
  sendAndUpdateInputToServer: (str) => dispatch(actions.sendAndUpdateInputToServer(str)),
  sendAndUpdateValidWords: (str) => dispatch(actions.sendAndUpdateValidWords(str)),
  sendAndUpdateValidInput: (str) => dispatch(actions.sendAndUpdateValidInput(str)),
  sendAndUpdateInvalidInput: (str) => dispatch(actions.sendAndUpdateInvalidInput(str)),
  sendAndUpdateCurrChar: (str) => dispatch(actions.sendAndUpdateCurrChar(str)),
  sendAndUpdateNextChar: (str) => dispatch(actions.sendAndUpdateNextChar(str)),
  sendAndUpdateRemainingChars: (str) => dispatch(actions.sendAndUpdateRemainingChars(str)),
  sendAndUpdateRemainingWords: (str) => dispatch(actions.sendAndUpdateRemainingWords(str)),
});

export class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Prompt 
          prompt={this.props.prompt}
          validWords={this.props.validWords}
          validInput={this.props.validInput}
          invalidInput={this.props.invalidInput}
          currChar={this.props.currChar}
          nextChar={this.props.nextChar}
          sendAndUpdateValidWords={this.props.sendAndUpdateValidWords}
          sendAndUpdateValidInput={this.props.sendAndUpdateValidInput}
          sendAndUpdateInvalidInput={this.props.sendAndUpdateInvalidInput}
          sendAndUpdateCurrChar={this.props.sendAndUpdateCurrChar}
          sendAndUpdateNextChar={this.props.sendAndUpdateNextChar}
          sendAndUpdateRemainingChars={this.props.sendAndUpdateRemainingChars}
          sendAndUpdateRemainingWords={this.props.sendAndUpdateRemainingWords}
        />
        <Input 
          userInput={this.props.userInput} 
          sendAndUpdateInputToServer={this.props.sendAndUpdateInputToServer} 
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
