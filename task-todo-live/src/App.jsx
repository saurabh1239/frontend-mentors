import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import TaskList from './data/data.json'
import bg_dark from "../public/images/bg-desktop-dark.jpg"
import "./app.css"
import ListAll from './Components/ListAll';
import Header from './Components/Header';
import Form from './Components/Form';
import DialogFooter from './Components/DialogFooter';
function App() {
  const MY_TASKS = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : [...TaskList]
  const [theme, setTheme] = useState("Dark")
  const [todoList, setTodoList] = useState(MY_TASKS);
  const [checked, setChecked] = useState([])
  const [AllTask, setAllTask] = useState([]);
  const [presentList, setPresentList] = useState("All");
  // const userCollectionRef = collection(db, "users")


  useEffect(() => {
    // document.body.className = theme
    localStorage.setItem('myTasks', JSON.stringify(todoList))
  }, [todoList])

  const addTOdod = (todo) => {
    if (todo) {
      // const id = uuidv4()
      const id = Math.floor(Math.random() * 100);
      setTodoList([...todoList, { id: id, Task: todo, checked: false }])
      setAllTask([...AllTask, { id: id, Task: todo, checked: false }])

    }

  }


  const handleCheck = (Id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === Id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    setChecked(todoList.map((todo) =>
      todo.checked == true ? { id: todo.id, checked: todo.checked, Task: todo.Task } : checked.filter((todo) => todo.checked === false)
    ))
  }

  const clearChecked = () => {
    setTodoList(todoList.filter((item) => item.checked === false)
    )

  }
  const handleRender = () => {
    if (presentList === "All") {
      return (
        <ListAll todoList={todoList} />
      )
    }
    // else if(presentList === "Active")
  }

  return (
    <div className='app'>
      <div className="uppernav">
      </div>
      <div className="dialog-box">
        <Header theme={theme} setTheme={setTheme} />
        <Form addTOdod={addTOdod} />
        <ListAll todoList={todoList} handleCheck={handleCheck} presentList={presentList}
          setPresentList={setPresentList} checked={checked} setTodoList={setTodoList} />
        <DialogFooter todoList={todoList} setPresentList={setPresentList}
          presentList={presentList} clearChecked={clearChecked} />
      </div>
      <section className="attribution">
        <p>Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded with lots of<span className="love">❤️</span> by  <a href="https://www.frontendmentor.io/profile/mileine">Mi Souto</a>. </p>
      </section>
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
