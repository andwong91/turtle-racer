import React from 'react';

const RemainingChars = (props) => {
  return <span className="remainingChars" onChange={props.sendAndUpdateRemainingChars()}>{props.remainingChars}</span>;
}

export default RemainingChars;