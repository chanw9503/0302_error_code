import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CardButton.css';

function CardButton({ item, onDeleteToDoList }) {
  return (
    <div className="buttonBox">
      <CustomButton name="삭제하기" color="red" />
      <CustomButton
        id={item.id}
        onDeleteToDoList={onDeleteToDoList}
        name={item.isDone ? '취소' : '완료'}
        color={'teal'}
      />
    </div>
  );
}

export default CardButton;
