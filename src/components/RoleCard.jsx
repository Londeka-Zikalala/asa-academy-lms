import { Card, Button } from 'react-bootstrap';
import * as Icons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function RoleCard({ role, label, color, icon }) {
  const NavIcon = Icons[icon];
  const nav = useNavigate();
  return (
    <Card
      className={`h-100 border-${color} shadow-sm`}
      style={{ borderRadius: '15px' }}
    >
      <Card.Body className="d-flex flex-column align-items-center">
        <NavIcon size={40} className={`text-${color} mb-2`} />
        <Card.Title className={`text-${color}`}>{label} Portal</Card.Title>
        <Card.Text className="text-center">
        </Card.Text>
        <Button
          size="sm"
          variant={color}
          onClick={() => nav(`/login/${role}`)}
        >
          Sign In
        </Button>
      </Card.Body>
    </Card>
  );
}
