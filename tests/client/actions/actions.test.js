import * as actions from '../../../src/client/actions/actions';
import * as types from '../../../src/client/constants/actionTypes';

describe('actions', () => {
  it('should create an action to set user login flag', () => {
    const bool = true;
    const expectedAction = {
      type: types.SET_IS_LOGGED_IN,
      payload: bool
    };
    expect(actions.setIsLoggedIn(bool)).toEqual(expectedAction);
  });

  it('should toggle login/signup flag', () => {
    const bool = true;
    const expectedAction = {
      type: types.SET_LOGIN_SIGNUP_TOGGLE,
      payload: bool
    };
    expect(actions.setLoginSignupToggle(bool)).toEqual(expectedAction);
  });

  it('should create an action to add a prompt', () => {
    const str = '';
    const expectedAction = {
      type: types.ADD_PROMPT,
      payload: str
    };
    expect(actions.addPrompt(str)).toEqual(expectedAction);
  });

  it('should create an action to get user input', () => {
    const str = '';
    const expectedAction = {
      type: types.GET_USER_INPUT,
      payload: str
    };
    expect(actions.getUserInput(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update valid words', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_VALID_WORDS,
      payload: str
    };
    expect(actions.sendAndUpdateValidWords(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update valid input', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_VALID_INPUT,
      payload: str
    };
    expect(actions.sendAndUpdateValidInput(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update invalid input', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_INVALID_INPUT,
      payload: str
    };
    expect(actions.sendAndUpdateInvalidInput(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update current character to type', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_CURR_CHAR,
      payload: str
    };
    expect(actions.sendAndUpdateCurrChar(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update next character to be typed', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_NEXT_CHAR,
      payload: str
    };
    expect(actions.sendAndUpdateNextChar(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update remaining characters of current word to be typed', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_REMAINING_CHARS,
      payload: str
    };
    expect(actions.sendAndUpdateRemainingChars(str)).toEqual(expectedAction);
  });

  it('should create an action to send and update remaining words in the prompt to be typed', () => {
    const str = '';
    const expectedAction = {
      type: types.SEND_AND_UPDATE_REMAINING_WORDS,
      payload: str
    };
    expect(actions.sendAndUpdateRemainingWords(str)).toEqual(expectedAction);
  });
});
