import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login-style.css';

export default function Login() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 13.1;
      const handleTimeUpdate = () => {
        if (video.currentTime >= 23.4) {
          video.currentTime = 13.1;
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      alert('Login successful!');
      navigate('/session-started');
    }
  };

  return (
    <div className="main-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={process.env.PUBLIC_URL + '/assets/kiak4-unveil-video.mp4'} />
      </video>

      <div className="login-wrapper">
        <div className="left-section">
          <h1>Welcome Back!</h1>
          <p>Don’t have an account yet? <Link to="/signup">Sign Up</Link></p>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="field" name="username" value={formData.username} onChange={handleChange} />

            <label>Password</label>
            <input type="password" className="field" name="password" value={formData.password} onChange={handleChange} />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
