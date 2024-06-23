import './App.css';
import TodoApp from './components/TodoApp';
import TasksContextProvider from './components/TasksContext.jsx';

function App() {

  return (
    <div className="container w-screen m-10 rounded-lg ">
      <TasksContextProvider>
        <TodoApp/>
      </TasksContextProvider>
    </div>
  )
}

export default App;
