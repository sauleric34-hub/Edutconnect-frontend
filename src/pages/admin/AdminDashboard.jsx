import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Users, AlertTriangle, Shield, Activity } from 'lucide-react';
import '../Pages.css';

export function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-8">Administration EduConnect</h1>

      <div className="dashboard-grid">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon"><Users size={24} /></div>
            <div>
              <div className="stat-label">Nouveaux inscrits (Auj)</div>
              <div className="stat-value">+24</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon bg-warning/10 text-warning"><Shield size={24} /></div>
            <div>
              <div className="stat-label">Tuteurs en attente</div>
              <div className="stat-value">12</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon bg-danger/10 text-danger"><AlertTriangle size={24} /></div>
            <div>
              <div className="stat-label">Litiges ouverts</div>
              <div className="stat-value text-danger">2</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="stat-icon bg-success/10 text-success"><Activity size={24} /></div>
            <div>
              <div className="stat-label">Séances actives</div>
              <div className="stat-value">48</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="mb-4">Validations Tuteurs Prioritaires</h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-light bg-light">
                  <th className="p-4 font-semibold text-sm">Nom du Tuteur</th>
                  <th className="p-4 font-semibold text-sm">Université</th>
                  <th className="p-4 font-semibold text-sm">Matières</th>
                  <th className="p-4 font-semibold text-sm">Date d'inscription</th>
                  <th className="p-4 font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-light">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center">SN</div>
                      <span className="font-medium">Sophie N.</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted">Université de Yaoundé I</td>
                  <td className="p-4"><Badge variant="default">Anglais</Badge></td>
                  <td className="p-4 text-muted">Il y a 2h</td>
                  <td className="p-4"><Button size="sm">Examiner le dossier</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
