import React from 'react';

const Input = (props) => {
  return (
    <div>
      <form>
        <input id="input" type="text" value={props.userInput} onChange={props.sendAndUpdateInputToServer()}/>
      </form>
    </div>
  );
}

export default Input;