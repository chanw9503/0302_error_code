import React from 'react';
import './Style.css';

function Add_Form() {
  return (
    <form className="add-form">
      <div className="text_list">
        <label>
          <strong>제목</strong>
        </label>
        <input required type="text" />
        <label>
          <strong>내용</strong>
        </label>
        <input required type="text" />
      </div>
      <div>
        <input id="add_card_btn" type="submit" value={'추가하기'} />
      </div>
    </form>
  );
}

export default Add_Form;
