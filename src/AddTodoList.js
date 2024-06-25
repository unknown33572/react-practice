import React, { useState } from "react";

const AddTodoList = ({ addItem }) => {
  const [item, setItem] = useState({ title: "" });

  const onInputChange = e => {
    setItem({ title: e.target.value });
  };

  const onButtonClick = () => {
    addItem(item);
    setItem({ title: "" });
  };

  const enterPressed = e => {
    if(e.key === 'Enter') {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <>
      <input type="text" placeholder="입력해주세요." onChange={onInputChange} onKeyDown={enterPressed} value={item.title} style={{ borderBottom: '1px solid gray' }} />
      <button className="" onClick={onButtonClick}>+</button>
    </>
  );
}
export default AddTodoList;