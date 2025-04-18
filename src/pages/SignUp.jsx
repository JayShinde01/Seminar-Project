import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js";

function SignUp() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    async function AddData(e) {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, user, password);
            console.log("User id:", userCredential);
           
            navigate("/");
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    function handleUser(e) {
        setUser(e.target.value);
        console.log("Email:", e.target.value);
    }

    function handlePass(e) {
        setPassword(e.target.value);
        console.log("Password:", e.target.value);
    }
    function handleLogIn() {
        navigate("/login")
    }

    return (
        <div>
            <form>
                <h1>Sign Up</h1>
                <input 
                    type="email" 
                    placeholder='Enter Email' 
                    onChange={handleUser}
                    value={user}
                />
                <br /><br />
                <input 
                    type="password" 
                    placeholder='Enter Password' 
                    onChange={handlePass}
                    value={password}
                /> <br /><br />
                <Link to={"/"} >Stay Without LogIn...! </Link>

                <br /><br />
                <button onClick={AddData}>Sign Up</button>
                <button onClick={handleLogIn}>Login</button>
            </form>
        </div>
    );
}

export default SignUp;
