import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Mock Pages (we'll create these next)
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { RegisterParent } from './pages/RegisterParent';

// Parent Pages
import { ParentDashboard } from './pages/parent/ParentDashboard';
import { SearchTutor } from './pages/parent/SearchTutor';

// Tutor Pages
import { TutorDashboard } from './pages/tutor/TutorDashboard';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register-parent" element={<RegisterParent />} />
          {/* <Route path="/register-tutor" element={<RegisterTutor />} /> */}
        </Route>

        {/* Parent Routes */}
        <Route path="/parent" element={<DashboardLayout role="parent" />}>
          <Route index element={<ParentDashboard />} />
          <Route path="search" element={<SearchTutor />} />
          {/* <Route path="history" element={<ParentHistory />} /> */}
        </Route>

        {/* Tutor Routes */}
        <Route path="/tutor" element={<DashboardLayout role="tutor" />}>
          <Route index element={<TutorDashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
