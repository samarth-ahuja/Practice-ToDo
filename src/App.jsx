import { useState } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {

  return (
    <div className="container w-screen m-10 rounded-lg bg-stone-800">
      <TodoApp/>
    </div>
  )
}

export default App;
