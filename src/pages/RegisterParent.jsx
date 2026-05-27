import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export function RegisterParent() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/parent');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Créer un compte Parent</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Prénom" placeholder="Jean" required />
            <Input label="Nom" placeholder="Fotso" required />
          </div>
          <Input label="Numéro de téléphone (MoMo/OM)" placeholder="Ex: 6 90 00 00 00" required />
          <Input label="Ville" placeholder="Douala" required />
          <Input type="password" label="Mot de passe" placeholder="••••••••" required />
          
          <div className="mt-4 border-t pt-4 border-light">
            <h4 className="mb-4">Ajouter un premier enfant</h4>
            <Input label="Prénom de l'élève" placeholder="Marie" required />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Classe" placeholder="3ème" required />
              <Input label="Matière à renforcer" placeholder="Mathématiques" />
            </div>
          </div>
          
          <Button type="submit" fullWidth className="mt-4">Créer mon compte</Button>
        </form>
      </CardContent>
    </Card>
  );
}
