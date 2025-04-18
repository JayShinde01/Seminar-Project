import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import { authContext } from '../context/AuthContext'
import Logout from '../components/Logout'

function Home() {
    
    const navigate=useNavigate()
    const {user} = useContext(authContext)
    let posts=usePost()
    function handleLogIn() {
        navigate("/login")
    }
    function handleSignUp() {
        navigate("/signup")
    }
    function handleCreate() {
        navigate("/createpost")
    }
     function GoToHome() {
        navigate("/")
        
    }
   
   
    
  return (
    <div className='nav'>
        {
            user ? 
            <div>
                 <h1>welcome {user.email}</h1>
                 <button type="button"onClick={GoToHome}>Home</button>
                 <button type="button"onClick={handleCreate}>CreatePost</button>
                 <Logout/>
            </div>:
           
            <div>
                 <button type="button"onClick={GoToHome}>Home</button>
                 <button type="button"onClick={handleLogIn}>LogIn</button>
                 <button type="button"onClick={handleCreate}>CreatePost</button>
                 <button type="button" onClick={handleSignUp}>SignUp</button>
            </div>
           

        }
        
        {
            posts.map((post)=>{
            return <div className='post'><Link to={`/singlepost/${post.id}`}><h1>{post.name}</h1> </Link> </div>
            })
        }
    </div>
  )
}

export default Home