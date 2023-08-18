import { useState } from 'react';
import Todo from "./components/Todo"
import "./App.css";
import TodoForm from './components/TodoForm';


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Studying", category: "Personal", isCompleted: false },
    { id: 2, text: "Working out", category: "Wellbeing", isCompleted: false },
    { id: 3, text: "Finishing reports", category: "Work", isCompleted: false }
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      },
    ];

    setTodos(newTodos);
  };

const removeTodo = (id) => {
const newTodos = [...todos]
const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
setTodos(filteredTodos)
};

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo
  );
setTodos(newTodos);
}

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      
    </div>
  );
}


export default App
