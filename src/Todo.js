import React, { useState } from "react";
import Button from './Button';  // Ensure you import the Button component


function Todo({ item }) {
  const [todos, setTodos] = useState(item);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const checkToggleTodoDone = id => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo = () => {
    const newId = todos.length + 1;
    const newTodo = { id: newId, title: newTodoTitle, done: false };
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };
  
  const deleteTodo = (item) => {
    const newTodos = todos.filter(todo => todo.id !== item.id);
    setTodos([...newTodos]);
  }

  const removeTodo = () => {
    setTodos(todos.slice(0, -1));
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {todos.map((todo) => (
          <div key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none'}}>
            <input type="checkbox" id={todo.id} name={todo.id} checked={todo.done} onChange={() => checkToggleTodoDone(todo.id)}/>
            <label htmlFor={todo.id}>{todo.title}</label>
            <Button className="m-4 border-2 border-blue-500 hover:border-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded" onClick={deleteTodo} label='Del'/>
          </div>
        ))}
        <input type="text" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
        <Button onClick={addTodo} label="Add Todo" />
        <Button onClick={removeTodo} label="Remove Todo" />
      </div>
    );
  }

export default Todo;