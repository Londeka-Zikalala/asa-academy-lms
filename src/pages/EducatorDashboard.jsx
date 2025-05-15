import React from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { FaChalkboardTeacher, FaClipboardList, FaChartLine } from 'react-icons/fa';

export default function EducatorDashboard() {
  return (
    <div>
      <h2 className="mb-4">Educator Dashboard</h2>
      <Row className="g-4">
        {/* Classes Panel */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaChalkboardTeacher size={32} className="me-3 text-primary" />
              <div>
                <Card.Title>My Classes</Card.Title>
                <Card.Text>Manage and review your classes</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Assignments Panel */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaClipboardList size={32} className="me-3 text-success" />
              <div>
                <Card.Title>Assignments</Card.Title>
                <Card.Text>View and grade pending work</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Progress Overview */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                <FaChartLine size={32} className="me-3 text-warning" />
                <Card.Title>Class Progress</Card.Title>
              </div>
              <ProgressBar now={75} label="75% on track" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
);
}
