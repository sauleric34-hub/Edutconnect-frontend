import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './Pages.css';

export function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="container flex justify-between items-center py-4">
          <div className="auth-logo">
            <span className="logo-text">Edu</span>
            <span className="logo-text-secondary">Connect</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login"><Button variant="ghost">Se connecter</Button></Link>
          </div>
        </div>
      </header>
      
      <main className="landing-hero container flex flex-col items-center justify-center text-center py-8 mt-4">
        <h1 className="hero-title mb-4">Le bon répétiteur, vérifié, proche et suivi.</h1>
        <p className="hero-subtitle text-muted mb-8">
          EduConnect vous permet de trouver les meilleurs tuteurs au Cameroun pour accompagner la réussite de vos enfants.
        </p>
        
        <div className="flex gap-4 landing-actions">
          <Link to="/register-parent">
            <Button size="lg" className="px-8">Je suis un Parent</Button>
          </Link>
          <Link to="/register-tutor">
            <Button variant="outline" size="lg" className="px-8">Je suis un Tuteur</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
