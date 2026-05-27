import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login based on phone number for demo
    const phone = e.target.phone.value;
    if (phone.includes('admin')) navigate('/admin');
    else if (phone.includes('tutor')) navigate('/tutor');
    else navigate('/parent');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bon retour parmi nous</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input 
            name="phone"
            label="Numéro de téléphone" 
            placeholder="Ex: 6 90 00 00 00" 
            required 
          />
          <Input 
            name="password"
            type="password" 
            label="Mot de passe" 
            placeholder="••••••••" 
            required 
          />
          <Button type="submit" fullWidth className="mt-4">Se connecter</Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <span className="text-muted text-sm">Pas encore de compte ?</span>
        <Link to="/register-parent" className="text-sm font-bold">S'inscrire</Link>
      </CardFooter>
    </Card>
  );
}
