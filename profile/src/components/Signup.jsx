import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!agree) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registered User:', userCredential.user);
      alert('Registration successful!');
      navigate('/home');
    } catch (error) {
      console.error('Registration Error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="image-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7r6Ee3PjpiS7-N-kWOAC42fnEMGpym0GXw&s"
            alt="Register"
            className="register-image"
          />
        </div>
        <div className="form-container">
          <h1 className="form-title">Sign Up</h1>
          <p className="form-subtitle">Enter your details to register.</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label>
              I agree to the <span>Terms and Conditions</span>
            </label>
          </div>
          <button className="button" onClick={handleRegister}>
            Register
          </button>
          <p className="footer-text">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

