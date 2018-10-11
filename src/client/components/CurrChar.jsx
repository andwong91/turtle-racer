import React from 'react';

const CurrChar = (props) => {
  return <span className="currChar" onChange={props.sendAndUpdateCurrChar()}>{props.currChar}</span>;
}

export default CurrChar;