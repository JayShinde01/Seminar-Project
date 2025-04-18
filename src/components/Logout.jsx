import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext.jsx';

function Logout() {
    const navigate = useNavigate();
    const {logOut} = useContext(authContext)
    async function handleLogout(e) {
        e.preventDefault();
        try {
            await logOut();
            console.log("Logout successful");
            navigate("/"); // redirect to login or home page
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
