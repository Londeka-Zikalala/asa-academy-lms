import { Row, Col } from 'react-bootstrap';
import RoleCard from '../components/RoleCard';
import AnimatedPage from '../components/AnimatedPage';

const roles = [
  { role: 'educator', label: 'Educator', color: 'primary', icon: 'FaChalkboardTeacher' },
  { role: 'admin',    label: 'Admin',    color: 'dark',    icon: 'FaUserShield' },
  { role: 'student',  label: 'Student',  color: 'success', icon: 'FaUserGraduate' },
  { role: 'parent',   label: 'Parent',   color: 'warning', icon: 'FaUsers' },
  { role: 'hub',      label: 'Learning Hub', color: 'info', icon: 'FaBookOpen' },
];

  export default function Home() {
    return (
      <AnimatedPage>
        <div className='home'>
        <div className="home-header">
          <h1>ASA Academy LMS</h1>
          <p className="text-muted">Empowering everyone to learn and grow.</p>
        </div>
  
        <div className="home-panel">
          <div className="role-cards-wrapper d-flex justify-content-center">
            <Row className="g-3 justify-content-center">
              {roles.map(r => (
                <Col key={r.role} xs={12} sm={10} md={8} lg={12}>
                  <RoleCard {...r} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        </div>
      </AnimatedPage>
    );
}
