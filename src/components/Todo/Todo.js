import React from 'react';
import { Link } from 'react-router-dom';
 
import './todo.css'
 
const Todo = (props) => {
    const {userId,id,title,completed} = props.todo;
     
    
  const url = `/todo/${id}`;
    
    return (
    //     <tr>
    //   <th scope="row">1</th>
    //   <td>Mark</td>
    //   <td>Otto</td>
    //   <td>@mdo</td>
    // </tr>
       
        <div className=" d-flex single-todo">
           
             
               <h1 >{userId}</h1>
            <div className="mx-5  d-flex  ">
                <h2 className="mx-5">{id}</h2>
                <h3 className="mx-5">{title}</h3>
                <p className="mx-5">completed:{completed?"true":"false"}</p>
                
               
               <div className="btn ">
                  <Link to={url} ><button> todo</button>  </Link>
                </div>
                 
              
            
            </div>  
            <br />
               
            
        </div>
    );
};

export default Todo;