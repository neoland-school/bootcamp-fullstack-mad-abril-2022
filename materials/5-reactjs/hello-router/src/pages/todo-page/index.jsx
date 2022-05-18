import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'



function TodoPage(){

    const [todo, updateTodo] = useState({});
    const navigate = useNavigate(); // hook del router para poder navegar usando JS

    useEffect(() => {
        fetch('https://dummyjson.com/todos/random')
        .then(res => res.json())
        .then(t => updateTodo(t));
    }, []);

    return (
        <main className="todo__container">
            <p className="todo__description">{todo.todo}</p>
            <input onChange={() => navigate('/quotes')} type='checkbox' defaultChecked={todo.completed}></input>
            <button onClick={() => navigate('/quotes')}>Ir a quotes</button>
        </main>
    )
}



export default TodoPage;