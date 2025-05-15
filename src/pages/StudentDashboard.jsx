import { Card, Row, Col } from 'react-bootstrap';
import AnimatedPage from '../components/AnimatedPage';
import { FaBook, FaTasks, FaChartPie } from 'react-icons/fa';

export default function StudentDashboard() {
  return (
    <AnimatedPage>
      <h2 className="mb-4">Welcome, Student!</h2>
      <Row>
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm" style={{ borderRadius: '10px' }}>
            <Card.Body className="d-flex align-items-center">
              <FaBook size={30} className="me-2 text-info" />
              <div>
                <Card.Title>Courses</Card.Title>
                <Card.Text>View and continue your courses</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm" style={{ borderRadius: '10px' }}>
            <Card.Body className="d-flex align-items-center">
              <FaTasks size={30} className="me-2 text-success" />
              <div>
                <Card.Title>Assignments</Card.Title>
                <Card.Text>Check your pending tasks</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm" style={{ borderRadius: '10px' }}>
            <Card.Body className="d-flex align-items-center">
              <FaChartPie size={30} className="me-2 text-warning" />
              <div>
                <Card.Title>Progress</Card.Title>
                <Card.Text>Track your learning journey</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AnimatedPage>
  );
}
