const CACHE_NAME = 'doces-pepeto-v3';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Deixa as requisições transitarem diretamente pela rede
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});