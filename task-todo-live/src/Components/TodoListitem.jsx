import React from 'react'
import "../App.css"

const TodoListitem = ({ handleCheck, todo }) => {
    console.log("task", todo);
    return (
        <li className='task'>
            <div className="round">
                <input type="checkbox" checked={todo.checked} onChange={() => handleCheck(todo.id)} />
                <label></label>
            </div>
            <p>{todo.Task}</p>
        </li>
    )
}

export default TodoListitem