import React, { useState } from 'react';
import TodoListitem from "./TodoListitem"
import "../App.css"

const ListAll = ({ todoList, handleCheck, setPresentList, presentList, }) => {

    const renderedList = todoList.map((todo) => {
        return (
            <TodoListitem key={todo.id} todo={todo} handleCheck={handleCheck} />
        )
    })

    const renderedListActive = todoList.map((todo) => {
        if (todo.checked) return ''
        return (
            <TodoListitem key={todo.id} todo={todo} handleCheck={handleCheck} />
            // <todoListItem key={id} index={index} id={id} updateItem={updateItem}
            //     deleteItem={deleteItem} checked={checked} text={text} />
        )
    })

    const renderedListCompleted = todoList.map((todo) => {
        if (!todo.checked) return ''
        return (
            <TodoListitem key={todo.id} todo={todo} handleCheck={handleCheck} />
        )
    })

    const renderedFilteredList = () => {
        if (presentList === 'Active') return renderedListActive
        else if (presentList === 'Completed') return renderedListCompleted
        else return renderedList
    }
    // const [data, setdata] = useState(
    //     todoList.filter((item) => item.checked === false)
    // )
    return (
        <ul className="todo-list">
            {
                renderedFilteredList()
            }
        </ul>
    )
}

export default ListAll