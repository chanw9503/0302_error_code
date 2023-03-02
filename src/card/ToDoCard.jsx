import React, { useState } from 'react';
import CardText from './CardText';
import CardButton from './CardButton';
import './ToDoCard.css';

function ToDoCard({ item, onDeleteToDoList }) {
  console.log('TodoCard', onDeleteToDoList);
  return (
    <div className="toDoCard">
      <CardText item={item} />
      <CardButton item={item} onDeleteToDoList={onDeleteToDoList} />
    </div>
  );
}

export default ToDoCard;
