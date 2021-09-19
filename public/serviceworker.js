
const CACHE_NAME = 'version-3.2';
const urlsToCache = ['index.html', 'offline.html'];


const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(chache => {
                console.log('chache opened');
                return chache.addAll(urlsToCache);
            })
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                console.log('fetched');
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'));
                    
            })
    )
});

self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )

});