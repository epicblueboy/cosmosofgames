
var viewerholder = document.getElementById('viewerholder');
/*if(window.chrome === undefined) {
    viewerholder.innerHTML += '<br><div style="border: 5px solid blue; border-radius: 1vw; width: 200px; text-align: center;"><a href="https://www.google.com/chrome/browser/desktop/"><img src="http://img.talkandroid.com/uploads/2015/11/Chrome-Logo.png" style="height: 10vw; "></a><br><span style="color: white; font-size: 1.2em;">Cosmos of Games is designed for Google Chrome, the fast, simple, and secure web browser built for the modern web. If you do not have Chrome, click the Chrome icon to go download it.</span></div>';
}*/
if (window.chrome === undefined) {
    if (confirm('Cosmos of Games works best on the Google Chrome browser. You do not seem to be running Google Chrome. Do you want to go download it now?')) {
        location = 'https://www.google.com/chrome/browser/desktop/';
    }
    else {
        alert('Since you are not running Google Chrome, some features in Cosmos of Games may or may not work.');
    }
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert('Cosmos of Games requires a mouse and keyboard. Please use your desktop computer or laptop.');
}