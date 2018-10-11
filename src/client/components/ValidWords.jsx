import React from 'react';

const ValidWords = (props) => {
  return <span className="validWords" onChange={props.sendAndUpdateValidWords()}>{props.validWords}</span>;
}

export default ValidWords;