import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export function RegisterTutor() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/tutor');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Devenir Tuteur</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Prénom" placeholder="Jean" required />
            <Input label="Nom" placeholder="T." required />
          </div>
          <Input label="Numéro de téléphone (MoMo/OM)" placeholder="Ex: 6 90 00 00 00" required />
          <Input label="Université / École" placeholder="Université de Douala" required />
          
          <div className="grid grid-cols-2 gap-4">
            <Input label="Filière" placeholder="Informatique" required />
            <Input label="Niveau d'études" placeholder="Master 1" required />
          </div>
          
          <Input type="password" label="Mot de passe" placeholder="••••••••" required />
          
          <div className="mt-4 border-t pt-4 border-light">
            <h4 className="mb-4 text-sm text-muted">Documents requis (à uploader plus tard)</h4>
            <ul className="text-sm text-muted list-disc ml-4">
              <li>Carte Nationale d'Identité</li>
              <li>Carte d'étudiant valide</li>
              <li>Relevé de notes récent</li>
            </ul>
          </div>
          
          <Button type="submit" fullWidth className="mt-4">Créer mon profil</Button>
        </form>
      </CardContent>
    </Card>
  );
}
