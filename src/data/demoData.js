export const overviewFallback = {
  metrics: [
    { label: 'Eleves suivis', value: '2', hint: '+1 ce mois', type: 'student' },
    { label: 'Seances confirmees', value: '8', hint: '3 cette semaine', type: 'session' },
    { label: 'Budget mensuel', value: '42 000 FCFA', hint: 'MoMo securise', type: 'wallet' },
    { label: 'Progression moyenne', value: '78%', hint: '+12% en maths', type: 'progress' },
  ],
  students: [
    {
      id: 'EDU-CM-482915',
      name: 'Marie Fotso',
      level: '3eme',
      school: 'Lycee Joss',
      weakSubject: 'Mathematiques',
      progress: 82,
      activeTutor: 'Jean T.',
      nextSession: 'Demain 16h00',
    },
    {
      id: 'EDU-CM-928441',
      name: 'Paul Fotso',
      level: '1ere D',
      school: 'College Libermann',
      weakSubject: 'Physique',
      progress: 71,
      activeTutor: 'Alice M.',
      nextSession: 'Vendredi 18h00',
    },
  ],
  sessions: [
    { subject: 'Mathematiques', student: 'Marie Fotso', tutor: 'Jean T.', day: 'Demain', time: '16h00 - 18h00', place: 'Domicile', status: 'CONFIRMEE', amount: 7000 },
    { subject: 'Physique', student: 'Paul Fotso', tutor: 'Alice M.', day: 'Vendredi', time: '18h00 - 20h00', place: 'En ligne', status: 'PLANIFIEE', amount: 8000 },
    { subject: 'Anglais', student: 'Marie Fotso', tutor: 'Sophie N.', day: 'Samedi', time: '10h00 - 11h30', place: 'Lieu neutre', status: 'EN_ATTENTE', amount: 6000 },
  ],
};

export const tutorsFallback = [
  { initials: 'JT', name: 'Jean T.', university: 'Universite de Douala', level: 'Master Informatique', neighborhood: 'Akwa', city: 'Douala', subjects: ['Mathematiques', 'Physique'], hourlyRate: 3500, rating: 4.8, reviewCount: 24, reliabilityScore: 96, verified: true, availability: 'Disponible demain' },
  { initials: 'AM', name: 'Alice M.', university: 'Ecole Normale Superieure', level: 'Master Physique', neighborhood: 'Bonamoussadi', city: 'Douala', subjects: ['Physique', 'Chimie'], hourlyRate: 4000, rating: 4.7, reviewCount: 18, reliabilityScore: 91, verified: true, availability: 'Disponible ce soir' },
  { initials: 'SN', name: 'Sophie N.', university: 'Universite de Yaounde I', level: 'Licence Anglais', neighborhood: 'Melen', city: 'Yaounde', subjects: ['Anglais', 'Francais'], hourlyRate: 3000, rating: 4.6, reviewCount: 12, reliabilityScore: 88, verified: true, availability: 'Week-end' },
  { initials: 'BN', name: 'Bryan N.', university: 'Keyce Informatique', level: 'L2 Genie logiciel', neighborhood: 'Makepe', city: 'Douala', subjects: ['Informatique', 'Mathematiques'], hourlyRate: 4500, rating: 4.9, reviewCount: 31, reliabilityScore: 98, verified: true, availability: 'Top tuteur' },
];

export const adminFallback = {
  metrics: [
    { label: 'Nouveaux inscrits', value: '+24', hint: "Aujourd'hui", type: 'users' },
    { label: 'Tuteurs en attente', value: '12', hint: 'Validation requise', type: 'shield' },
    { label: 'Litiges ouverts', value: '2', hint: 'A traiter', type: 'alert' },
    { label: 'Seances actives', value: '48', hint: 'Temps reel', type: 'activity' },
  ],
  pendingTutors: [
    { name: 'Sophie N.', university: 'Universite de Yaounde I', subject: 'Anglais', submittedAt: 'Il y a 2h', profileScore: 86 },
    { name: 'Bryan N.', university: 'Keyce Informatique', subject: 'Informatique', submittedAt: 'Il y a 4h', profileScore: 92 },
    { name: 'Armel K.', university: 'Universite de Douala', subject: 'Mathematiques', submittedAt: 'Hier', profileScore: 78 },
  ],
};
