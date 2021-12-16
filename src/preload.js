const remote = require('electron').remote;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('test-close').addEventListener('click', function(){
        let window = remote.getCurrentWindow();
        window.close();
    });
    window.honk = remote;;
});