import React from 'react'
import "../App.css"
import { Draggable } from 'react-beautiful-dnd';

const TodoListitem = ({ handleCheck, checked, index, id, Task }) => {
    // console.log("task", todo);
    return (
        <Draggable key={id} draggableId={id.toString()} index={index}>
            {(provided) => (
                // <li
                //     ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                //     className={`todo-item ${checked ? 'completed' : ''}`}
                //     id={id}
                //     key={id}
                //     checked={checked}
                //     onKeyPress={(event) => onKeyPress(event, id)}
                // >
                <li className='task'
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                >
                    <div className="round">
                        <input type="checkbox" checked={checked}
                            onChange={() => handleCheck(id)} />
                        <label></label>
                    </div>
                    <p>{Task}</p>
                </li>
            )}
        </Draggable >
    )
}

export default TodoListitem