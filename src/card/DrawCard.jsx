import React from 'react';
import ToDoCard from './ToDoCard';
import './DrawCard.css';

function DrawCard({ items, setTodoList }) {
  function onDeleteToDoList(id) {
    const newList = items.filter((item) => item.id !== id);
    setTodoList(newList);
  }

  return (
    <div className="card-container">
      {items.map((item) => {
        return <ToDoCard key={item.id} item={item} onDeleteToDoList={onDeleteToDoList} />;
      })}
    </div>
  );
}

export default DrawCard;
