import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
      />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
