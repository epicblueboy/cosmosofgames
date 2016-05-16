
$(window).load(setTimeout(function() {
    var loader = document.getElementById('loader');
    var loadicon = document.getElementById('loadicon');
    var loadertext = document.getElementById('loadertext');
    loader.style.zIndex = "-1";
    loader.style.animation = "loaderfadeout 2s";
    loadicon.style.height = "0px";
    loadicon.style.width = "0px";
    loadicon.style.zIndex = "-1";
    loadicon.style.top = "-2000px";    
     
    loadertext.style.fontSize = "0em";
    loadertext.style.color = "transparent";
    loadertext.style.zIndex = "-1";
    document.getElementById('music').play();
     document.getElementById('hometext').style.animation="hometextanim 3s";
    document.getElementById('buttonholder').style.animation="slidein 3s linear";    
    var backnum = Math.floor((Math.random() * 14) + 1);
    var body = document.getElementsByTagName('html')[0];
    body.style.backgroundImage = "url('./images/backgrounds/background" + backnum + ".jpg')";
}, 4000));
var viewerholder = document.getElementById('viewerholder');

if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
    /*if(swfobject.hasFlashPlayerVersion("0.0.0")) {
        if(confirm('Most games on Cosmos of Games can only be enjoyed with Adobe Flash Player, which you do not have. Do you want to go download it now?')) {
            location = 'https://get.adobe.com/flashplayer/';
        }
        else {
            alert('We recommend you go download Adobe Flash Player when possible.');
        }
    }*/
}