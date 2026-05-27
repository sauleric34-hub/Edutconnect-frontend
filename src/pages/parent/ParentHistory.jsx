import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Download } from 'lucide-react';
import '../Pages.css';

export function ParentHistory() {
  return (
    <div>
      <h1 className="mb-8">Historique des Paiements</h1>
      
      <div className="dashboard-grid">
        <Card>
          <CardContent className="p-6">
            <div className="stat-label">Total Dépensé (Ce mois)</div>
            <div className="stat-value text-primary">28 000 FCFA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="stat-label">Total Dépensé (Global)</div>
            <div className="stat-value">145 000 FCFA</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-light bg-light">
                <th className="p-4 font-semibold text-sm">Date</th>
                <th className="p-4 font-semibold text-sm">Élève</th>
                <th className="p-4 font-semibold text-sm">Tuteur & Matière</th>
                <th className="p-4 font-semibold text-sm">Montant</th>
                <th className="p-4 font-semibold text-sm">Statut</th>
                <th className="p-4 font-semibold text-sm">Reçu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-light">
                <td className="p-4 text-sm">26 Mai 2026</td>
                <td className="p-4 font-medium">Marie Fotso</td>
                <td className="p-4 text-sm">Jean T. (Maths)</td>
                <td className="p-4 font-bold">7 000 FCFA</td>
                <td className="p-4"><Badge variant="success">Payé</Badge></td>
                <td className="p-4"><Button variant="ghost" size="sm"><Download size={16} /></Button></td>
              </tr>
              <tr className="border-b border-light">
                <td className="p-4 text-sm">22 Mai 2026</td>
                <td className="p-4 font-medium">Paul Fotso</td>
                <td className="p-4 text-sm">Alice M. (Physique)</td>
                <td className="p-4 font-bold">7 000 FCFA</td>
                <td className="p-4"><Badge variant="success">Payé</Badge></td>
                <td className="p-4"><Button variant="ghost" size="sm"><Download size={16} /></Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
