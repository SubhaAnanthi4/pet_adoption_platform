import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/homee');
    } catch (error) {
      console.error('Login Error:', error);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User Info:', result.user);
      alert(`Welcome, ${result.user.displayName}`);
      navigate('/homee');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert(error.message);
    }
  };

  const goToRegister = () => navigate('/signup'); // Direct to signup page

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="image-section">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNj9tOv2ZLFThwUHF9IvlpR3rfB8F9kMzBA&s" 
            alt="Login Cat" 
            className="login-image" 
          />
        </div>
        <div className="form-container">
          <h1 className="form-title">
            Log<span style={{ color: 'red' }}>in</span>
          </h1>
          <p className="form-subtitle">Enter your details to Login.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleEmailLogin} className="login-button">Log In</button>
          <p className="forgot-password">Forgot your Password?</p>
          <hr />
          <button onClick={handleGoogleSignIn} className="google-signin-button">
            Continue with Google
          </button>
          <p>
            Do not have an account?{' '}
            <span onClick={goToRegister} className="register-link">Signup</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
