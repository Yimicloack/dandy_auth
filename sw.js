const CACHE_NAME = "dandy-auth-v1";

const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",

    "./assets/background.mp4",
    "./assets/music.mp3",
    "./assets/auth-logo.png",
    "./assets/dh-logo.glb",

    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", event => {

    console.log("Service Worker instalado");

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(urlsToCache);

            })

    );

});

self.addEventListener("activate", event => {

    console.log("Service Worker activado");

    event.waitUntil(

        caches.keys()

            .then(cacheNames => {

                return Promise.all(

                    cacheNames.map(cache => {

                        if (cache !== CACHE_NAME) {

                            return caches.delete(cache);

                        }

                    })

                );

            })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});