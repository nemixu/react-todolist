import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    if (!input) return;

    setList([...list, newTodo]);
    setInput('');
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }


  return (
    <>
      <div className="container-fluid px-0">
        <p className='text-center'>React Todo</p>
        <div className="container d-flex justify-content-center">
        <input className='form-control w-25 d-inline mb-2'
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
      <button className='btn btn-success ml-2 mb-1' onClick={() => addTodo(input)}>Add</button>
        </div>
      </div>
      <div className="container mt-5">
      <ul className='list-group ml-5 text-decoration-none'>{list.map((todo) => (
        <li className='list-group-item' key={todo.id}>
          <p>{todo.todo}</p>
          <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
      </ul>
      </div>
    </>
  );
}

export default App;
