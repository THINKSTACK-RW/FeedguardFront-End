import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WebDashboard } from "./components/WebDashboard";
import { LanguageProvider } from "./LanguageContext";
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export default function App() {
  return (
    <LanguageProvider>
      <div className="size-full bg-gray-100">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <WebDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </LanguageProvider>
  );
}