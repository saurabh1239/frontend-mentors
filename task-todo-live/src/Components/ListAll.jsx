import React, { useState } from 'react';
import TodoListitem from "./TodoListitem"
import "../App.css"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const ListAll = ({ todoList, handleCheck, setPresentList, presentList, setTodoList }) => {

    const renderedList = todoList.map(({ checked, id, Task }, index) => {
        return (
            <TodoListitem key={index} checked={checked}
                handleCheck={handleCheck} id={id} Task={Task} />)
    })

    const renderedListActive = todoList.map(({ checked, id, Task }, index) => {
        if (checked) return ''
        return (
            <TodoListitem key={index} checked={checked}
                handleCheck={handleCheck} id={id} Task={Task} />
            // <todoListItem key={id} index={index} id={id} updateItem={updateItem}
            //     deleteItem={deleteItem} checked={checked} text={text} />
        )
    })

    const renderedListCompleted = todoList.map(({ checked, id, Task }, index) => {
        if (!checked) return ''
        return (
            <TodoListitem key={index} checked={checked}
                handleCheck={handleCheck} id={id} Task={Task} />
        )
    })

    const renderedFilteredList = () => {
        if (presentList === 'Active') return renderedListActive
        else if (presentList === 'Completed') return renderedListCompleted
        else return renderedList
    }
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const updatedList = Array.from(todoList)
        const [reorderedItem] = updatedList.splice(result.source.index, 1)
        updatedList.splice(result.destination.index, 0, reorderedItem)
        setTodoList(updatedList)
    }
    // const [data, setdata] = useState(
    //     todoList.filter((item) => item.checked === false)
    // )
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="list">
                {(provided) => (
                    <ul className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
                        {renderedFilteredList()}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
        // <ul className=  "todo-list">
        //     {
        //         renderedFilteredList()
        //     }
        // </ul>
    )
}

export default ListAll