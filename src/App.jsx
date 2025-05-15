import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import EducatorDashboard from './pages/EducatorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import LoginForm from './LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Container className="py-4">
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/:role" element={<LoginForm />} />
            <Route path="/educator" element={<EducatorDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </BrowserRouter>
  );
}

export default App;
