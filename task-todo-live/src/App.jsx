import { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import "./index.css"
function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [users, setUsers] = useState([])
  const userCollectionRef = collection(db, "users")


  const handleCreate = async () => {
    await addDoc(userCollectionRef, { name: Name, age: Age })
  }

  const editAge = async (id,age) => {
    const userDoc = doc(db, "users", id);
    const newfields = { age: age + 1 };
    await updateDoc(userDoc, newfields)
  }
  const handleDelete = async(id)=>{
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc)
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [users])

  return (
    <div className='app'>
      <input type="text" placeholder='name' value={Name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder='age' value={Age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleCreate}>create</button>
      {
        users.map((item) =>
          <div key={item.id} className='name'>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <button onClick={() => editAge(item.id,item.age)}>Edit Age</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
            {/* <h1>{item.email}</h1> */}
          </div>
        )
      }
    </div>
  )
}

export default App
