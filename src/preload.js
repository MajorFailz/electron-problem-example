const app = require('@electron/remote').app

document.addEventListener('DOMContentLoaded', () => {
    let remote = BrowserWindow
    console.log(remote);
    document.getElementById('test-close').innerHTML = remote
    window.honk = remote;
});