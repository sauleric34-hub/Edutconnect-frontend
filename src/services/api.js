import { adminFallback, overviewFallback, tutorsFallback } from '../data/demoData';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

async function getJson(path, fallback) {
  try {
    const response = await fetch(`${API_BASE}${path}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

async function postJson(path, payload, fallback) {
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

export const api = {
  overview: () => getJson('/overview', overviewFallback),
  tutors: () => getJson('/tutors', tutorsFallback),
  admin: () => getJson('/admin', adminFallback),
  bookTutor: (tutor) =>
    postJson('/booking', { tutor }, {
      title: 'Demande envoyee',
      message: `La reservation avec ${tutor} est en attente de confirmation.`,
    }),
  loginDemo: (role) =>
    postJson('/auth/demo', { role }, {
      title: 'Connexion demo',
      message: `Session ${role} initialisee avec succes.`,
    }),
};
