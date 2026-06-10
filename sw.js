const CACHE_NAME = 'belier-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installation et mise en cache locale
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

// Interception des requêtes pour le fonctionnement hors-ligne
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

