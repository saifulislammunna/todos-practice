import React from 'react';
import { Link } from 'react-router-dom';
 
import './todo.css'
 
const Todo = (props) => {
    const {userId,id,title,completed} = props.todo;
     
    
  
    
    return (
       
        <div className=" d-flex single-todo">
           
             
               <h1 >{userId}</h1>
            <div className="mx-5  d-flex  ">
                <h2 className="mx-5">{id}</h2>
                <h3 className="mx-5">{title}</h3>
                <p className="mx-5">completed:{completed?"true":"false"}</p>
                
               
               <div className="btn ">
                  <Link to={ `/todo/${id}`} ><button> todo</button>  </Link>
                </div>
                 
              
            
            </div>  
            <br />
               
            
        </div>
    );
};

export default Todo;