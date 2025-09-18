import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import PromoterDashboard from './pages/PromoterDashboard';
import SupportDashboard from './pages/SupportDashboard';
import LoginPage from './pages/LoginPage';
import EventCreation from './pages/EventCreation';
import EventManagement from './pages/EventManagement';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import SupportTickets from './pages/SupportTickets';
import SystemHealth from './pages/SystemHealth';

function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
}

function AppRoutes() {
  const { user } = useAuth();
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            {user?.role === 'support' || user?.role === 'admin' ? 
              <SupportDashboard /> : 
              <PromoterDashboard />
            }
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/events/create" 
        element={
          <ProtectedRoute requiredRole="promoter">
            <EventCreation />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/events/manage" 
        element={
          <ProtectedRoute requiredRole="promoter">
            <EventManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/analytics" 
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/support" 
        element={
          <ProtectedRoute requiredRole="support">
            <SupportTickets />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/system" 
        element={
          <ProtectedRoute requiredRole="support">
            <SystemHealth />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <AppRoutes />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;