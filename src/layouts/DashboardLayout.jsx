import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, CreditCard, User, LogOut, Bell, Shield } from 'lucide-react';
import './Layout.css';

export function DashboardLayout({ role = 'parent' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavItems = () => {
    if (role === 'parent') {
      return [
        { path: '/parent', icon: Home, label: 'Tableau de bord' },
        { path: '/parent/search', icon: Search, label: 'Trouver un tuteur' },
        { path: '/parent/history', icon: CreditCard, label: 'Paiements' },
      ];
    }
    if (role === 'tutor') {
      return [
        { path: '/tutor', icon: Home, label: 'Tableau de bord' },
        { path: '/tutor/schedule', icon: Calendar, label: 'Disponibilités' },
        { path: '/tutor/requests', icon: Bell, label: 'Demandes' },
      ];
    }
    if (role === 'admin') {
      return [
        { path: '/admin', icon: Home, label: 'Vue d\'ensemble' },
        { path: '/admin/validation', icon: Shield, label: 'Validations' },
      ];
    }
    return [];
  };

  const navItems = getNavItems();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to={`/${role}`} className="auth-logo">
            <span className="logo-text">Edu</span>
            <span className="logo-text-secondary">Connect</span>
          </Link>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <button className="nav-item btn-logout" onClick={() => navigate('/')}>
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="main-header">
          <div className="header-search">
            {/* Optional global search */}
          </div>
          <div className="header-actions">
            <button className="icon-button"><Bell size={20} /></button>
            <div className="user-profile-btn">
              <User size={20} />
              <span>{role === 'parent' ? 'Mme Fotso' : role === 'tutor' ? 'Jean T.' : 'Admin'}</span>
            </div>
          </div>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
