// Check if Broswer Support SW
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service worker regsitered', reg))
    .catch((err) => console.log('Service worker not regsitered', err))
}