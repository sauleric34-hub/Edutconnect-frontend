import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span className="logo-text">Edu</span>
            <span className="logo-text-secondary">Connect</span>
          </Link>
          <p className="auth-subtitle">Le bon répétiteur, vérifié, proche et suivi.</p>
        </div>
        <div className="auth-content">
          <Outlet />
        </div>
      </div>
      <div className="auth-bg">
        {/* Background decorative elements can go here */}
      </div>
    </div>
  );
}
