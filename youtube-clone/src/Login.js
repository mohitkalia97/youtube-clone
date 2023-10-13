import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to={`/register`}>
        No account? Register here
      </Link>
    </div>
  )
}
