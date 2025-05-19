import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   const data = { email, password };

    try {
    const response = await fetch('http://localhost:5000/api/saveUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (response.ok) {
      alert('Data saved!');
      setMessage('Success');
      setEmail('');
      setPassword('');
    } else {
      alert(result.message || 'Error saving data.');
      setMessage(result.message);
    }

     } catch (error) {
      alert('Network error');
      setMessage('Network error');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Sign In
        </Button>
        <p>{message}</p>

      </Form>
    </div>
  );
}

export default SignIn;
