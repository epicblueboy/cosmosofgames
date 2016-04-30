/*window.onkeydown = function (e) {
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
        return false;
    }
};*/
var isChrome = !!window.chrome && !!window.chrome.webstore;
if (!isChrome) {
    document.getElementById('viewerholder').innerHTML = '<br><br><br><br><div style="border: 5px solid blue; border-radius: 1vw; width: 200px; text-align: center;"><a href="https://www.google.com/chrome/browser/desktop/"><img src="http://img.talkandroid.com/uploads/2015/11/Chrome-Logo.png" style="height: 10vw; "></a><br><span style="color: white; font-size: 1.2em;">Cosmos of Games is designed for Google Chrome, the fast, simple, and secure web browser built for the modern web. If you do not have Chrome, click the Chrome icon to go download it.</span></div><div style="border: 5px solid blue; border-radius: 1vw; width: 200px; text-align: center;"><br><span style="color: white; font-size: 1.2em;">Cosmos of Games works best in a maximized browser window.</span></div>'
}