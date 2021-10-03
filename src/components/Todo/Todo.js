import React from 'react';
import { Stack  } from 'react-bootstrap';
import './todo.css'
 
const Todo = (props) => {
    const {userId,id,title,completed} = props.todo
    
    return (
       
        <div className=" d-flex single-todo">
           
             
               <h1 >{userId}</h1>
            <div className="mx-5  d-flex  ">
                <h2 className="mx-5">{id}</h2>
                <h3 className="mx-5">{title}</h3>
                <p className="mx-5">{completed}</p>
              <Stack direction="horizontal" gap={3}>
   
                   <div className="vr" />
                <div className="btn ">
                    <button className= "ms-auto" >todo</button>
                </div>
             </Stack>
            
            </div>  
            <br />
               
            
        </div>
    );
};

export default Todo;