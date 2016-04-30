/*window.onkeydown = function (e) {
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
        return false;
    }
};*/
var isChrome = !!window.chrome && !!window.chrome.webstore;
if (isChrome === true) {
    document.getElementById('viewerholder').innerHTML = ''
}