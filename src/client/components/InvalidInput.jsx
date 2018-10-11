import React from 'react';

const InvalidInput = (props) => {
  return <span className="invalidInput" onChange={props.sendAndUpdateInvalidInput()}>{props.invalidInput}</span>;
}

export default InvalidInput;