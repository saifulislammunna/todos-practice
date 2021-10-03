import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
 
import Todo from '../Todo/Todo';
import './todos.css'
const Todos = () => {
    // const {id} = useParams();
    const [todos,setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res =>res.json())
        .then(data => setTodos(data));
    },[])
    return (
        <div className="p-5 todo-container">
               
           
            {
                todos.map(todo => <Todo
                key={todo.id}
                todo={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;