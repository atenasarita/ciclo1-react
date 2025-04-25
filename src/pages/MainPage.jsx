import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main-style.css';

export default function MainPage() {
  return (
    <div className="main-screen">
      <video autoPlay muted loop playsInline width="100%" height="100%">
        <source src={process.env.PUBLIC_URL + '/assets/kiak4-unveil-video.mp4'} />
      </video>

      <div className="main-screen-container">
        <img
          src={process.env.PUBLIC_URL + '/assets/kia-slogan-blanco.png'}
          alt="KIA logo"
        />
        <h1 className="home-title">Waste Management</h1>

        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>

      </div>
    </div>
  );
}