import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaServer, FaCog } from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      <Row className="g-4">
        {/* User Management */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center mb-3">
                <FaUsers size={32} className="me-3 text-info" />
                <Card.Title>Users</Card.Title>
              </div>
              <Card.Text>View and manage all user accounts</Card.Text>
              <Button variant="info" size="sm">Manage Users</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* System Health */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center mb-3">
                <FaServer size={32} className="me-3 text-danger" />
                <Card.Title>System Health</Card.Title>
              </div>
              <Card.Text>Monitor uptime and performance</Card.Text>
              <Button variant="danger" size="sm">View Status</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Settings */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center mb-3">
                <FaCog size={32} className="me-3 text-secondary" />
                <Card.Title>Settings</Card.Title>
              </div>
              <Card.Text>Configure system preferences</Card.Text>
              <Button variant="secondary" size="sm">Go to Settings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
);
}
