import React, { useState, useEffect } from 'react';
import Navigation from './nav/Navigation';
import Add_Form from './form/Add_Form';
import './App.css';
import ListSubject from './List-Subject/ListSubject';
import DrawCard from './card/DrawCard';

function App() {
  const INIT_DATA = [
    { id: 0, subject: '초기제목', content: '할일', isDone: false },
    { id: 1, subject: '초기제목', content: '할일', isDone: false },
    { id: 2, subject: '초기제목', content: '할일', isDone: false },
  ];
  const [todoList, setTodoList] = useState(INIT_DATA);

  return (
    <div className="root">
      <div className="layout">
        <Navigation />
        <Add_Form />
        <ListSubject text="Working.. 🔥" />
        <DrawCard items={todoList} setTodoList={setTodoList} />
        <ListSubject text="Done..! 🎉" />
      </div>
    </div>
  );
}

export default App;
