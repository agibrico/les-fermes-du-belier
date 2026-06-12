self.addEventListener('install', (e) => {
 e.waitUntil(
   caches.open('mon-app-cache').then((cache) => {
     return cache.addAll(['./', './index.html', './script.js', './style.css']);
   })
 );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
