// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var webiew = document.getElementById('webview');
setTimeout(() => {
    // throwing error in 2.0.x version, before first navigation set
    webview.setAttribute('partition', 'persist:test');
    // set src => launch first webview navigation
    webview.setAttribute('src', 'https://www.google.fr');
    setTimeout(() => {
        // throwing error both in 1.8.x and 2.0.x versions as it's after first navigation
        webview.setAttribute('partition', 'persist:test2');
    }, 100);
}, 100);
