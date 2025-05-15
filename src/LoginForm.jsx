import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import AnimatedPage from './components/AnimatedPage';

export default function LoginForm() {
  const { role } = useParams();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: replace with real auth
    if (!email || !password) {
      setError('All fields are required');
      setTimeout(() => setError(''), 3000);
      return;
    }
    nav(`/${role}`);
  };

  return (
    <AnimatedPage>
      <Card className="mx-auto" style={{ maxWidth: '400px', borderRadius: '10px' }}>
        <Card.Body>
          <h4 className="text-center mb-3">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" size="sm" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </AnimatedPage>
  );
}
