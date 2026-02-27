const cacheName = 'asistencia-cucba-v1';
const assets = [
  './',
  './asistencias.html',
  './asistencias.css',
  './asistencias.js',
  './Sound/succes.mp3',
  './Sound/Error.mp3',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap',
  'https://unpkg.com/html5-qrcode'
];

// Instalación y almacenamiento en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Estrategia: Primero buscar en caché, si no hay, ir a la red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});