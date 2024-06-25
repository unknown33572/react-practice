import React, { useState } from "react";
import './index.css';

const TodoList = ({ item, editItem, deleteItem, toggleItemDone }) => {

  const [readOnly, setReadOnly] = useState(true);

  const turnOffReadOnly = () => {
    setReadOnly(false);
  }

  const turnOnReadOnly = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setReadOnly(true);
    }
  }

  return (
    <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 flex items-center justify-between transition-colors duration-200 ease-in-out">
      <div className="flex items-center">
        <input type="checkbox"
               checked={item.done}
               onClick={() => toggleItemDone(item.id)}
               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
        <input type="text"
               id={item.id}
               name={item.id}
               value={item.title}
               onClick={turnOffReadOnly}
               onChange={(e) => editItem(item.id, e.target.value)}
               onKeyDown={turnOnReadOnly}
               readOnly={readOnly}
               className="ml-2 text-sm text-gray-700 font-medium" />
      </div>
      <button className="text-red-500 hover:text-red-600 transition-colors duration-150 ease-in-out" onClick={() => deleteItem(item.id)}>-</button>
    </div>
  );
};

export default TodoList;