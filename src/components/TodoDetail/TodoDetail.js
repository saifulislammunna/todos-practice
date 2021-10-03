import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TodoDetail = () => {
    const { id} = useParams();
    const [todo,setTodo] = useState( {});
    // console.log(params);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTodo(data));
    },[])
    return (
        <div>
            <h3>Todo Detail of: {todo.id}</h3>
            <h1>{todo.useId} </h1>
            <h2>{todo.title}</h2>
            <h3>{todo.completed?"true":"false"}</h3>
        </div>
    );
};

export default TodoDetail;