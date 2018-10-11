import * as types from '../constants/actionTypes';

// login/signup actions
export const setIsLoggedIn = bool => ({
  type: types.SET_IS_LOGGED_IN,
  payload: bool
});

export const setLoginSignupToggle = bool => ({
  type: types.SET_LOGIN_SIGNUP_TOGGLE,
  payload: bool
});

// game actions
export const addPrompt = (str) => ({
  type: types.ADD_PROMPT,
  payload: str
});

export const getUserInput = (str) => ({
  type: types.GET_USER_INPUT,
  payload: str
});

export const sendAndUpdateInputToServer = (str) => ({
  type: types.SEND_AND_UPDATE_INPUT_TO_SERVER,
  payload: str
});

export const sendAndUpdateValidWords = (str) => ({
  type: types.SEND_AND_UPDATE_VALID_WORDS,
  payload: str
});

export const sendAndUpdateValidInput = (str) => ({
  type: types.SEND_AND_UPDATE_VALID_INPUT,
  payload: str
});

export const sendAndUpdateInvalidInput = (str) => ({
  type: types.SEND_AND_UPDATE_INVALID_INPUT,
  payload: str
});

export const sendAndUpdateCurrChar = (str) => ({
  type: types.SEND_AND_UPDATE_CURR_CHAR,
  payload: str
});

export const sendAndUpdateNextChar = (str) => ({
  type: types.SEND_AND_UPDATE_NEXT_CHAR,
  payload: str
});

export const sendAndUpdateRemainingChars = (str) => ({
  type: types.SEND_AND_UPDATE_REMAINING_CHARS,
  payload: str
});

export const sendAndUpdateRemainingWords = (str) => ({
  type: types.SEND_AND_UPDATE_REMAINING_WORDS,
  payload: str
});