import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login-style.css';

export default function Login() {
  return (
    <div className="login-page">
        <div className="logo-container">
            <img
            src={process.env.PUBLIC_URL + '/assets/kia-slogan-negro.png'}
            alt="KIA Logo"
            />
        </div>

        <div id="container">
            <div className="inner-container right">
                <form>
                    <label style={{ marginTop: '4.5rem'}} htmlFor="username"> Username: </label>
                    <input className="field" type="text" id="username" name="username" required/>

                    <label htmlFor="password">Password:</label>
                    <input className="field" type="password" id="password" name="password" required/>
                </form>

                <Link to="/sessionstarted">
                    <button className="field">Complete Log In</button>
                </Link>

                <div className="signin-text">
                    <p>
                        Don't have an account yet?{' '}
                        <Link to="/signup">Sign up here</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
