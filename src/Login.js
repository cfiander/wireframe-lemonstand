import React from 'react'

export default function Login(props) {
    return (
        <section className="top">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>
        <br></br>
        <label htmlFor="psw"><b>Password</b></label>
        
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <br></br>
        <button className="submit" type="submit">Login</button>
        <br></br>
        <label>
          <input type="checkbox" checked="checked" name="remember"/> Remember Me
        </label>
        </section>
    )
}