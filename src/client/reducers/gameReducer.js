import * as types from '../constants/actionTypes';
import { bindActionCreators } from 'redux';

const initialState = {
  // store prompt in state to pass down as a prop
  prompt: '',
  // text contained in the Input component
  userInput: '',
  // string of valid words typed by the user
  validWords: '',
  // string of valid input of the current word typed by the user
  validInput: '',
  // string of invalid input of the current word typed by the user
  invalidInput: '',
  // current character to be typed by the user
  currChar: '',
  // next character to be typed by the user
  nextChar: '',
  // remaining characters in the current word being typed by the user
  remainingChars: '',
  // remaining words in the passage
  remainingWords: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // add the prompt retrieved from the database to the state
    case types.ADD_PROMPT:
      return { 
        prompt: action.payload,
        // initialize currChar with the first letter of the prompt string
        currChar: action.payload[0],
        // initialize nextChar with the next letter of the prompt string
        nextChar: action.payload[1],
        // initalize remainingWords with the prompt
        remainingWords: action.payload
      };
    case types.UPDATE_AND_VALIDATE_INPUT:
      // emit to socket and update store with value from server
      return {
        userInput: action.payload
      }
    // send input to the server and reset the input field
    case types.SEND_INPUT_TO_SERVER:
      // emit to socket when space bar is pressed and update validWords in the state
      return {
        // clear the input field once the user's word has been validated
        userInput: '',
        validWords: newStr
      }
    case types.GET_USER_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_VALID_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_INVALID_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_CURR_CHAR:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_NEXT_CHAR:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_REMAINING_CHARS:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_REMAINING_WORDS:
      // emit to socket and update state
    default:
      return state;
  }
};

export default gameReducer;
