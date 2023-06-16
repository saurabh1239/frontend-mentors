import React, { useState } from 'react'
import "../App.css"

const ListAll = ({ todoList, handleCheck }) => {
    // const [data, setdata] = useState(
    //     todoList.filter((item) => item.checked === false)
    // )
    return (
        <ul className="todo-list">
            {
                todoList.map((item) =>
                    <li key={item.id} className='task'>
                        <div className="round">
                            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                            <label></label>
                        </div>
                        <p>{item.Task}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default ListAll