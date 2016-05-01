var backnum = Math.floor((Math.random() * 14) + 1);
var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = "url('./images/backgrounds/background" + backnum + ".jpg')";

var viewerholder = document.getElementById('viewerholder');

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert('Cosmos of Games works best with a mouse and keyboard. Please use your desktop computer or laptop.');
}
else {
    if (window.chrome === undefined) {
        if (confirm('Cosmos of Games works best on the Google Chrome browser. You do not seem to be running Google Chrome. Do you want to go download it now?')) {
            location = 'https://www.google.com/chrome/browser/desktop/';
        }
        else {
            alert('Since you are not running Google Chrome, some features in Cosmos of Games may or may not work.');
        }
    }
    if(swfobject.hasFlashPlayerVersion("0.0.0")) {
        if(confirm('Most games on Cosmos of Games can only be enjoyed with Adobe Flash Player, which you do not have. Do you want to go download it now?')) {
            location = 'https://get.adobe.com/flashplayer/';
        }
        else {
            alert('We recommend you go download Adobe Flash Player when possible.');
        }
    }
}





/*if(window.chrome === undefined) {
    viewerholder.innerHTML += '<br><div style="border: 5px solid blue; border-radius: 1vw; width: 200px; text-align: center;"><a href="https://www.google.com/chrome/browser/desktop/"><img src="http://img.talkandroid.com/uploads/2015/11/Chrome-Logo.png" style="height: 10vw; "></a><br><span style="color: white; font-size: 1.2em;">Cosmos of Games is designed for Google Chrome, the fast, simple, and secure web browser built for the modern web. If you do not have Chrome, click the Chrome icon to go download it.</span></div>';
}*/