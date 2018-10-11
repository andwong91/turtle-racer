import React from 'react';

const RemainingWords = (props) => {
  return <span className="remainingWords" onChange={props.sendAndUpdateRemainingWords()}>{props.remainingWords}</span>;
}

export default RemainingWords;