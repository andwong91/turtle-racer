import React from 'react';

const NextChar = (props) => {
  return <span className="nextChar" onChange={props.sendAndUpdateNextChar()}>{props.nextChar}</span>;
}

export default NextChar;