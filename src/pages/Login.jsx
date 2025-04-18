import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { logIn,user } = useContext(authContext);


    async function handleLogin(e) {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/');
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Invalid login credentials.");
            navigate('/login');
        }
    }
    function handleSignUp() {
        navigate("/signup")
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />
                <Link to={"/"} >Stay Without LogIn...! </Link>

                <br /><br />
                <button type="submit">Login</button>
                <button type="button" onClick={handleSignUp}>SignUp</button>
            </form>
        </div>
    );
}

export default Login;
