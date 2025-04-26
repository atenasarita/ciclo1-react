import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/session-started-styles.css';

export default function SessionStarted() {
  return (
    <div className="sessionstarted-page">
      <video autoPlay muted loop playsInline width="100%" height="100%">
        <source src={process.env.PUBLIC_URL + '/assets/kiak4-unveil-video.mp4'} />
      </video>


        <div className="content">
            <img
              src={process.env.PUBLIC_URL + '/assets/kia-slogan-blanco.png'}
              alt="KIA Logo"
            />

            <div className="subheader">Waste Management</div>
            <div className="greeting">Hello, you are logged in!</div>

            <Link to="/dashboard">
            <button>Dashboards</button>
            </Link>

            <Link to="/logwaste">
              <button>Log Waste</button>
            </Link>
            
            <Link to="/admin">
            <button>Admin</button>
            </Link>
        </div>

        <Link to="/account">
        <img 
        className="account-icon" 
        src='   https://cdn-icons-png.flaticon.com/512/6596/6596121.png '
        alt="Account Icon"/>
        </Link>

    </div>
  );
}