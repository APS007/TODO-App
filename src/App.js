import React,{useState} from 'react'
import { v4 } from 'uuid'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo =(id)=>{
    console.log(id)
    setTodos(
      todos.map((todo) => {
      if(todo.id === id) todo.isCompleted = !todo.isCompleted;
      console.log(todo.isCompleted);
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id   ))
  }

  const addTodo = (text) => {
    const newTodo = {
      id:v4(),
      title:text,
      isCompleted:false,
    };
      setTodos([...todos,newTodo]);
  };
  
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
