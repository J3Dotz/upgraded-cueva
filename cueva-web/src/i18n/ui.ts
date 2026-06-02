export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    // Nav
    'nav.stay': 'Stay',
    'nav.experiences': 'Experiences',
    'nav.location': 'Location',
    'nav.journal': 'Journal',
    'nav.book': 'Book Now',
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'A refuge for the quietly curious.',
    // Stay page
    'stay.from': 'From',
    'stay.night': '/ night',
    'stay.view': 'View room',
    'stay.hero.title': 'Seven rooms. One singular landscape.',
    // Room detail
    'room.amenities': "What's included",
    'room.book': 'Enquire to book',
    'room.other': 'Other rooms',
    // Experiences
    'exp.hero.title': 'Beyond the room, into the land.',
    'exp.enquire': 'Enquire',
    // Location
    'loc.hero.title': "You'll know when you arrive.",
    'loc.directions': 'Getting here',
    // Journal
    'journal.hero.title': 'Notes from the land.',
    'journal.read': 'Read article',
    'journal.min': 'min read',
    'journal.all': 'All',
    // Book / Enquiry form
    'book.hero.title': 'Reserve your stay.',
    'book.name': 'Full name',
    'book.email': 'Email address',
    'book.checkin': 'Check-in',
    'book.checkout': 'Check-out',
    'book.guests': 'Number of guests',
    'book.room': 'Room preference',
    'book.room.any': 'Any available room',
    'book.message': 'Message (optional)',
    'book.submit': 'Send enquiry',
    'book.success': "Your enquiry has been sent. We'll be in touch within 24 hours.",
    'book.error': 'Something went wrong. Please email us directly at hola@lacuevademiravet.com',
  },
  es: {
    // Nav
    'nav.stay': 'Alojamiento',
    'nav.experiences': 'Experiencias',
    'nav.location': 'Ubicación',
    'nav.journal': 'Diario',
    'nav.book': 'Reservar',
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.tagline': 'Un refugio para los curiosos tranquilos.',
    // Stay page
    'stay.from': 'Desde',
    'stay.night': '/ noche',
    'stay.view': 'Ver habitación',
    'stay.hero.title': 'Siete habitaciones. Un paisaje singular.',
    // Room detail
    'room.amenities': 'Qué incluye',
    'room.book': 'Consultar disponibilidad',
    'room.other': 'Otras habitaciones',
    // Experiences
    'exp.hero.title': 'Más allá de la habitación, hacia la tierra.',
    'exp.enquire': 'Consultar',
    // Location
    'loc.hero.title': 'Lo sabrás cuando llegues.',
    'loc.directions': 'Cómo llegar',
    // Journal
    'journal.hero.title': 'Notas desde la tierra.',
    'journal.read': 'Leer artículo',
    'journal.min': 'min de lectura',
    'journal.all': 'Todos',
    // Book / Enquiry form
    'book.hero.title': 'Reserva tu estancia.',
    'book.name': 'Nombre completo',
    'book.email': 'Correo electrónico',
    'book.checkin': 'Llegada',
    'book.checkout': 'Salida',
    'book.guests': 'Número de huéspedes',
    'book.room': 'Habitación preferida',
    'book.room.any': 'Cualquier habitación disponible',
    'book.message': 'Mensaje (opcional)',
    'book.submit': 'Enviar consulta',
    'book.success': 'Tu consulta ha sido enviada. Nos pondremos en contacto en menos de 24 horas.',
    'book.error': 'Algo ha salido mal. Por favor escríbenos directamente a hola@lacuevademiravet.com',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLang];
