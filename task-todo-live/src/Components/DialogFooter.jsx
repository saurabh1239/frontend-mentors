import React from 'react'

const DialogFooter = ({ todoList, setPresentList, presentList, clearChecked }) => {
    return (
        <div className="dialog-footer">
            <div>{todoList.length ? todoList.length : 0} items left</div>
            <ul className='footer-item-ul'>
                <li onClick={() => setPresentList("All")}
                    className={presentList === "All" ? "footer-item-li Active" : "footer-item-li"}>All</li>
                <li onClick={() => setPresentList("Active")}
                    className={presentList === "Active" ? "footer-item-li Active" : "footer-item-li"}>Active</li>
                <li onClick={() => setPresentList("Completed")}
                    className={presentList === "Completed" ? "footer-item-li Active" : "footer-item-li"}>Completed</li>
            </ul>
            <button onClick={() => clearChecked()}>clear completed</button>
        </div>
    )
}

export default DialogFooter