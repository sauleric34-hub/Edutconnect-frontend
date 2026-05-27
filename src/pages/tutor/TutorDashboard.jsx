import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Wallet, Star, CalendarCheck } from 'lucide-react';
import '../Pages.css';

export function TutorDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1>Bonjour, Jean T.</h1>
        <Badge variant="success">Profil Vérifié</Badge>
      </div>

      <div className="dashboard-grid">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon"><Wallet size={24} /></div>
            <div>
              <div className="stat-label">Revenus du mois</div>
              <div className="stat-value text-primary">45 000 FCFA</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon bg-warning/10 text-warning"><Star size={24} /></div>
            <div>
              <div className="stat-label">Score de fiabilité</div>
              <div className="stat-value">92/100</div>
              <div className="text-xs text-success">🥇 Top Tuteur</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon bg-secondary/10 text-secondary"><CalendarCheck size={24} /></div>
            <div>
              <div className="stat-label">Séances à venir</div>
              <div className="stat-value">3</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <h2 className="mb-4">Nouvelles demandes</h2>
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Marie Fotso - Mathématiques</CardTitle>
              <p className="text-sm text-muted">Classe : 3ème • Akwa, Douala</p>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Demain, 16h00 - 18h00</p>
              <p className="text-sm mt-2">"Bonjour, ma fille a des difficultés avec les équations..."</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-danger border-danger">Refuser</Button>
              <Button>Accepter (7000 FCFA)</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <h2 className="mb-4">Mes prochaines séances</h2>
          <Card>
            <CardContent className="p-4 flex justify-between items-center border-b border-light">
              <div>
                <p className="font-bold">Physique - Paul A.</p>
                <p className="text-sm text-muted">Aujourd'hui, 18h00</p>
              </div>
              <Button variant="secondary" size="sm">Démarrer</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
