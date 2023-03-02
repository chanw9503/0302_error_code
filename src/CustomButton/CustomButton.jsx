import React from 'react';
import './Style.css';

function CustomButton({ id, name, color, onDeleteToDoList }) {
  console.log('custonbtn', onDeleteToDoList);

  return (
    <button
      onClick={() => onDeleteToDoList(id)}
      id="CustomBtn"
      style={{ border: `3px solid ${color}` }}
    >
      {name}
    </button>
  );
}

export default CustomButton;
