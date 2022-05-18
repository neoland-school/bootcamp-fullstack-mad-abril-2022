import {useEffect, useState} from 'react';
import './style.css'


function TodoPage () {

    const [todo, uptdateTodo] = useState({});

    useEffect(() =>{
        fetch('https://dummyjson.com/todos/random')
        .then(res => res.json())
        .then(t => uptdateTodo(t));
  
    }, []);

    return (
     <main className="todo__container">
         <p className="todo__description">{todo.todo}</p> 
            <input type='checkbox' checked= {todo.completed}></input>   
     </main>
    )

}



export default TodoPage;