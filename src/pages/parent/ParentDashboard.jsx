import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { BookOpen, Clock } from 'lucide-react';
import '../Pages.css';

export function ParentDashboard() {
  return (
    <div>
      <h1 className="mb-8">Bonjour, Madame Fotso</h1>
      
      <h2 className="mb-4">Mes Enfants</h2>
      <div className="dashboard-grid">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Marie Fotso</CardTitle>
              <Badge variant="primary">3ème</Badge>
            </div>
            <p className="text-sm text-muted">Lycée Joss</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Tuteur Actuel:</span>
                <span className="font-bold">Jean T. (Maths)</span>
              </div>
              <div className="flex justify-between">
                <span>Prochaine séance:</span>
                <span className="font-bold text-secondary">Demain, 16h00</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" fullWidth>Voir le suivi</Button>
          </CardFooter>
        </Card>

        <Card className="border-dashed bg-transparent flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:bg-white transition-colors">
          <div className="stat-icon mb-4"><BookOpen /></div>
          <CardTitle>Ajouter un élève</CardTitle>
          <p className="text-sm text-muted mt-2">Inscrivez un autre enfant pour trouver un tuteur.</p>
        </Card>
      </div>

      <h2 className="mb-4 mt-8">Séances à venir</h2>
      <Card>
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4 border-b border-light">
            <div className="flex items-center gap-4">
              <div className="stat-icon"><Clock size={20}/></div>
              <div>
                <h4 className="font-bold">Mathématiques - Marie Fotso</h4>
                <p className="text-sm text-muted">Avec Jean T. • Domicile</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">Demain</div>
              <div className="text-sm text-muted">16h00 - 18h00</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
