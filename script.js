const translations = {
  en: {
    tagline: 'Financial, Media & Data Analytics Consulting',
    servicesTitle: 'Services',
    services: [
      'Financial modeling and quantitative analysis',
      'Media and entertainment strategy development',
      'Data analytics and AI-driven solutions'
    ],
    contactTitle: 'Contact',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn'
  },
  ru: {
    tagline: 'Консалтинг в сфере финансов, медиа и анализа данных',
    servicesTitle: 'Услуги',
    services: [
      'Финансовое моделирование и количественный анализ',
      'Разработка стратегий в медиа и развлечениях',
      'Аналитика данных и решения на базе ИИ'
    ],
    contactTitle: 'Контакты',
    email: 'Эл. почта',
    phone: 'Телефон',
    linkedin: 'Линкедин'
  },
  es: {
    tagline: 'Consultoría de finanzas, medios y análisis de datos',
    servicesTitle: 'Servicios',
    services: [
      'Modelado financiero y análisis cuantitativo',
      'Desarrollo de estrategias de medios y entretenimiento',
      'Analítica de datos y soluciones impulsadas por IA'
    ],
    contactTitle: 'Contacto',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    linkedin: 'LinkedIn'
  }
};

function setLang(lang) {
  const t = translations[lang] || translations.en;
  document.getElementById('tagline').textContent = t.tagline;
  document.getElementById('services-title').textContent = t.servicesTitle;
  const list = document.getElementById('services-list');
  list.innerHTML = '';
  t.services.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('email-label').textContent = t.email;
  document.getElementById('phone-label').textContent = t.phone;
  document.getElementById('linkedin-label').textContent = t.linkedin;
}

document.getElementById('language-selector').addEventListener('change', function() {
  setLang(this.value);
});

document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
});
