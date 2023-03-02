import React from 'react';
import './CardText.css';

function CardText({item}) {
  return (
    <>
      <div className="subjectBox">
        <strong>{item.subject}</strong>
      </div>
      <div className="contentBox">{item.content}</div>
    </>
  );
}

export default CardText;
