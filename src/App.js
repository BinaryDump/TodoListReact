import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todo-item';
import TodoAdd from './components/todo-add';

function App() {
  
  return ( 
    <div className="App">
      {/* <TodoAdd /> */}
      <TodoItem/>
    </div>
  );
}

export default App;
