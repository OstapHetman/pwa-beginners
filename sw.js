// install sw
self.addEventListener('install', event => {
  console.log('sw has been installed');
})

// activate sw
self.addEventListener('activate', event => {
  console.log('sw has been activated');
})