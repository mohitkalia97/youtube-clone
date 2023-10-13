import React, { useState } from 'react'

import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('loginToken', data.token); // Save token to local storage
        } else {
            console.error('Login failed!');
        }
    };


  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
      <Link to={`/register`}>
        No account? Register here
      </Link>
    </div>
  )
}
