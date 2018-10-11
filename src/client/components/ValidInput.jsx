import React from 'react';

const ValidInput = (props) => {
  return <span className="validInput" onChange={props.sendAndUpdateValidInput()}>{props.validInput}</span>;
}

export default ValidInput;