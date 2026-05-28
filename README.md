# EduConnect Cameroun - Frontend

Bienvenue sur le dépôt Frontend du projet **EduConnect Cameroun**. 
"Le bon répétiteur, vérifié, proche et suivi."

## 🚀 Présentation
EduConnect est une plateforme web conçue pour mettre en relation les parents d'élèves et les meilleurs tuteurs au Cameroun. 
Ce dépôt contient l'interface utilisateur (UI) construite en **React** avec **Vite**, sans utilisation de frameworks CSS externes (Tailwind/Bootstrap) afin d'assurer un design sur mesure, moderne et ultra-rapide.

## 🛠 Technologies
- **React.js 18**
- **Vite** (Build tool)
- **React Router DOM** (Navigation)
- **Lucide React** (Icônes)
- **CSS Vanilla (Custom Variables & Modules)**

## 📂 Structure du projet
```
src/
├── components/ui/   # Composants réutilisables (Button, Input, Card, Badge...)
├── layouts/         # Layouts principaux (AuthLayout, DashboardLayout)
├── pages/           # Vues de l'application (Landing, Login, Dashboards...)
├── App.jsx          # Routeur principal
└── index.css        # Système de design (Tokens CSS globaux)
```

## ⚙️ Installation et Lancement

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/sauleric34-hub/Edutconnect-frontend.git
   ```
2. Installer les dépendances :
   ```bash
   cd Edutconnect-frontend
   npm install
   ```
3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
4. Ouvrez votre navigateur sur `http://localhost:5173`

## 🎨 Pages Implémentées (Mockups MVP)
- `Landing Page` (Accueil public)
- `Login` & `Register` (Authentification et inscription Parent/Tuteur)
- `Parent Dashboard` (Vue d'ensemble, gestion des enfants, historique des paiements)
- `Tutor Search` (Moteur de recherche de tuteurs avec filtres)
- `Tutor Dashboard` (Suivi des revenus, acceptation des demandes)
- `Admin Dashboard` (Validation des profils tuteurs, statistiques)

---
*Projet réalisé pour EduConnect Cameroun (2026).*

<!-- Styling by Ines -->
