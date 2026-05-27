import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Search, MapPin, Star, ShieldCheck } from 'lucide-react';
import '../Pages.css';

export function SearchTutor() {
  return (
    <div>
      <h1 className="mb-8">Trouver un Tuteur</h1>
      
      <div className="search-filters">
        <Input label="Matière" placeholder="Ex: Mathématiques" className="flex-1 mb-0" />
        <Input label="Niveau" placeholder="Ex: 3ème" className="flex-1 mb-0" />
        <Input label="Ville" placeholder="Douala" className="flex-1 mb-0" />
        <Button size="lg"><Search size={20} className="mr-2" /> Rechercher</Button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Mock Tutor Card */}
        <Card>
          <CardContent className="p-6">
            <div className="tutor-card">
              <div className="tutor-avatar">JT</div>
              <div className="tutor-info">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="flex items-center gap-2">
                      Jean T. 
                      <ShieldCheck size={18} className="text-success" />
                    </h3>
                    <p className="text-sm text-muted">Université de Douala • Master Informatique</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl">3500 FCFA<span className="text-sm text-muted font-normal">/h</span></div>
                  </div>
                </div>
                
                <div className="flex gap-2 my-3">
                  <Badge variant="primary">Mathématiques</Badge>
                  <Badge variant="secondary">Physique</Badge>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-warning"><Star size={16} fill="currentColor"/> 4.8 (24 avis)</span>
                    <span className="flex items-center gap-1 text-muted"><MapPin size={16}/> à 2km (Akwa)</span>
                  </div>
                  <Button>Réserver</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
