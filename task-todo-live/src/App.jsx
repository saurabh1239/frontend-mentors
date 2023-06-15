import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import bg_dark from "../public/images/bg-desktop-dark.jpg"
import "./app.css"
function App() {
  const [Task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked, setChecked] = useState([])
  // const userCollectionRef = collection(db, "users")


  const addTOdod = (todo) => {
    if (Task) {
      setTodoList([...todoList, { id: uuidv4(), Task: todo, checked: false }])
      setTask("")
    }

  }
  const handleTodo = (e) => {
    e.preventDefault();
    addTOdod(Task)
  }

  const handleCheck = (Id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === Id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    setChecked(todoList.map((todo) =>
      todo.checked == true ? { id: todo.id, checked: todo.checked } : checked.filter((todo) => todo.checked === false)
    ))
  }

  const clearChecked = () => {
    setTodoList(todoList.filter((item) => item.checked === false)
    )
    console.log(checked);
  }
  return (
    <div className='app'>
      <div className="uppernav">
      </div>
      <div className="dialog-box">
        <div className="navbar">
          <h1>TODO</h1>
          <button>dark</button>
        </div>

        <form onSubmit={handleTodo} className='todo-input-wrapper'>
          <input type="text" placeholder='name' value={Task} onChange={(e) => setTask(e.target.value)} className='todo_input' />
          <button >s</button>
        </form>

        <ul className="todo-list">
          {
            todoList.map((item) =>
              <li key={item.id} className='task'>
                <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                <p>{item.Task}</p>
              </li>
            )
          }
        </ul>
        <div className="dialog-footer">
          <div>{todoList.length ? todoList.length : 0} items left</div>
          <ul className='footer-item-ul'>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
          <button onClick={() => clearChecked()}>clear completed</button>
        </div>
      </div>
    </div>
  )
}

export default App;



// const handleCreate = async () => {
//   await addDoc(userCollectionRef, { name: Name, age: Age })
// }

// const editAge = async (id,age) => {
//   const userDoc = doc(db, "users", id);
//   const newfields = { age: age + 1 };
//   await updateDoc(userDoc, newfields)
// }
// const handleDelete = async(id)=>{
//   const userDoc = doc(db,"users",id)
//   await deleteDoc(userDoc)
// }
// useEffect(() => {
//   const getUsers = async () => {
//     const data = await getDocs(userCollectionRef);
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//   }
//   getUsers();
// }, [users])
