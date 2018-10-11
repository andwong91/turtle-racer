import React from 'react';

import ValidInput from './ValidInput';
import ValidWords from './ValidWords';
import InvalidInput from './InvalidInput';
import CurrChar from './CurrChar';
import NextChar from './NextChar';
import RemainingChars from './RemainingChars';
import RemainingWords from './RemainingWords';

const Prompt = (props) => {
  return (
    <div>
      <ValidWords
        validWords={props.validWords}
        sendAndUpdateValidWords={props.sendAndUpdateValidWords}
      />
      <ValidInput
        validInput={props.validInput}
        sendAndUpdateValidInput={props.sendAndUpdateValidInput}
      />
      <CurrChar
        currChar={props.currChar}
        sendAndUpdateCurrChar={props.sendAndUpdateCurrChar}
      />
      <NextChar
        nextChar={props.nextChar}
        sendAndUpdateNextChar={props.sendAndUpdateNextChar}
      />
      <InvalidInput
        invalidInput={props.invalidInput}
        sendAndUpdateInvalidInput={props.sendAndUpdateInvalidInput}
      />
      <RemainingChars
        remainingChars={props.remainingChars}
        sendAndUpdateRemainingChars={props.sendAndUpdateRemainingChars}
      />
      <RemainingWords 
        remainingWords={props.remainingWords}
        sendAndUpdateRemainingWords={props.sendAndUpdateRemainingWords}
      />
    </div>
  );
}

export default Prompt;