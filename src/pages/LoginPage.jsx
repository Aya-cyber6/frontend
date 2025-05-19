import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email,
      password,
    });

    if (response && response.data) {
      console.log(response.data); // Success
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to UserDashboard
    } else {
      alert('Unexpected server response.');
    }
  } catch (error) {
    console.error('Login error:', error);

    if (error.response && error.response.data) {
      alert(error.response.data.message);
    } else {
      alert('Could not connect to server.');
    }
  }
};


  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Login Page</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
