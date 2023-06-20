import React, { useState } from 'react'

const Form = ({ addTOdod }) => {
    const [Task, setTask] = useState("");

    const handleTodo = (e) => {
        e.preventDefault();
        addTOdod(Task)
        setTask("")
    }
    return (
        <form onSubmit={handleTodo} className='todo-input-wrapper'>
            <input type="text" placeholder='name' value={Task} onChange={(e) => setTask(e.target.value)} className='todo_input' />
        </form>
    )
}

export default Form