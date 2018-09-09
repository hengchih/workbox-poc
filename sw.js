importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log("Yay! Workbox is loaded 🎉");
    workbox.routing.registerRoute(
        /.*\.css/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'css-cache',
        })
    );
    workbox.routing.registerRoute(
        'https://unpkg.com/react@16.3.2/umd/react.production.min.js',
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'cdn',
        })
    );
} else {
    console.log("Boo! Workbox didn't load 😬");
}