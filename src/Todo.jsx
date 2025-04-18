import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import "./todo.css"

function Todo() {
    const [task, setTask] = useState(null)
    const [text, setText] = useState()
    const[refresh,setRefresh]=useState(false)
    // const [input,setInput] = useState()

    async function handleClick() {
       let snapshot= await getDocs(collection(db,"form"))
       let data =snapshot.docs.map((doc)=>{
        return {
            ...doc.data(),
            id:doc.id
       }
    }
    )
        setTask(data)
        
        console.log(data);
        
    }
    async function handleAdd() {
        if (text != "") {
            await addDoc(collection(db,"form"),{
                tasklist :text
            })
             console.log("data added");
             setText("")
             setRefresh((prev)=>!prev)
             
        }else{
            alert("Please Enter Valid Input !!")
        }
       
     }
     useEffect(()=>{
        console.log("useeffect");
        
        handleClick()
     },[refresh])
     function handleChange(e) {
        setText(e.target.value)
        
     }
     async function handleDelete(id) {
        await deleteDoc(doc(db,"form",id))
        setRefresh((prev)=>!prev)
        setText("")
     }
     async function handleUpdate(id) {
        await updateDoc(doc(db,"form",id),{
            tasklist:text
        })
        setRefresh((prev)=>!prev)
     }
  return (
    <div className="todo-container">
        <div className="todo-input-section" >
        <input type="text" onChange={handleChange} value={text}/> 
        <button onClick={handleAdd} className="todo-button">add Task</button>
        </div>     
        {
            task == null ? <h1>loading...</h1> : 
            <div className="task-list"> 
                {task.map((value)=>(
                    <div className="task-item">
                         <div> <li>{value.tasklist}</li></div>
                         <button onClick={()=>handleDelete(value.id)}>deleteTask</button>
                         <button onClick={()=>handleUpdate(value.id)}>UpdateTask</button>
                    </div>
                   
                    
                ))}
            </div>
        }
    </div>
  )
}

export default Todo