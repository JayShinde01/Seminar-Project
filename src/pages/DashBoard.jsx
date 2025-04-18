import React, { useContext, useState } from 'react'
import Logout from '../components/Logout'
import { authContext } from '../context/AuthContext'
import { createPost } from '../services/posts'
import { Link, useNavigate } from 'react-router-dom'
function DashBoard() {
  const[post,setPost]  = useState('')
  const {user}=useContext(authContext)
  const navigate = useNavigate()

  async function handleCreate() {
    await createPost(post)
    navigate("/")
  }
  async function handleInput(e) {
    let input = {
      userEmail:user.email,
      name:e.target.value
    }
    setPost(input)
  }
  return (
    <div>
      {
        user ? 
        <div>
          <span> <h1>Welcome {user.email}</h1></span>
          <input type="text" onChange={handleInput}/>
          <button onClick={handleCreate}>Create</button>
        </div>:
        <Link to={"/login"}>Go-to-Login</Link>
      }
        
        

    </div>
  )
}

export default DashBoard