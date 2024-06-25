import './App.css';
import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';
import { call } from './service/ApiService';


function App() {
  const [items, setItems] = useState([]);

  window.myAppItems = items;

  useEffect(() => {
    call('/', 'GET', null).then((res) => setItems(res.data));
    // const requestOptions = {
    //   method: 'GET',
    //   headers: { "Content-Type": "application/json" },
    // };

    // fetch('http://localhost:8080/todo', requestOptions).then((res) => res.json())
    //                                                    .then((res) => { setItems(res.data); },
    //                                                          (error) => { });
  }, []);

  // const toggleItemDone = id => {
  //   const updatedItems = items.map(item => {
  //     if (item.id === id) {
  //       return {...item, done: !item.done}; 
  //     }
  //     return item;
  //   });
  //   setItems(updatedItems);
  // };

  // const editItem = (id, newValue) => {
  //   const updatedItems = items.map(item => {
  //     if (item.id === id) {
  //       return { ...item, title: newValue }; 
  //     }
  //     return item;
  //   });
  //   setItems(updatedItems);
  // }

  const addItem = newItem => {
    // const newId = items.length + 1;
    // const newItemWithId = { ...newItem, id: String(newId), done: false };
    // setItems([...items, newItemWithId]);
    call('/', 'POST', newItem).then((res) => setItems([...items, res.data]));
  }

  const deleteItem = item => {
    // const newItems = items.filter(eventItem => eventItem.id !== item);
    // setItems(newItems);
    call('/todo', 'DELETE', item).then((res) => setItems(res.data));
  }

  let todoItems = items.length > 0 && items.map((e) => <TodoList item={e} key={e.id} /*editItem={editItem}*/ deleteItem={deleteItem} /*toggleItemDone={toggleItemDone}*/ />);

  return <div className='App'>
    <h1>Todo List</h1>
    <div className='todo-list'>
      {todoItems}
    </div>
    <AddTodoList addItem={addItem} />
  </div>
}

export default App;
