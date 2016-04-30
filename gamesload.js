function loadgame(game) {
    var viewer = document.getElementById('viewerholder');
    switch (game) {
        case 'ff2': 
            viewerholder.innerHTML='<embed style="position: absolute; left: 20%; top: 5%" src="ff2.swf" quality="high" width="90%" height="90%" scale="exactfit" />'
            break;
        case 'slitherio':
            viewerholder.innerHTML='<embed style="position: absolute; left: 5%; top: 5%" src="http://slither.io" quality="high" width="90%" height="80%" scale="exactfit" />'
            break;
        case 'agario':
            viewer.src = "http://agar.io";
            viewer.height = "750px";
            viewer.width = "1000px";
            break;
        case 'bloxorz':
            viewer.src = "bloxorz.swf";
            viewer.height = "350px";
            viewer.width = "650px";
            break;
        case 'chibi-knight':
            viewer.src = "chibi-knight.swf";
            viewer.height = "530px";
            viewer.width = "700px";
            break;
        case 'pacman':
            viewer.src = "pacman.swf";
            viewer.height = "700px";
            viewer.width = "700px";
            break;
        case 'playgo':
            viewer.src = "playgo.swf";
            viewer.height = "500px";
            viewer.width = "650px";
            break;
        case 'run2':
            viewer.src = "run2.swf";
            viewer.height = "510px";
            viewer.width = "700px";
            break;
        case 'stickwar':
            viewer.src = "stickwar.swf";
            viewer.height = "510px";
            viewer.width = "700px";
            break;
        case 'tombrunner':
            viewer.src = "http://files.cdn.spilcloud.com/webgl/TR-13-01/index.html?gp=1&countryCode=US&siteid=500&channelid=100&siteLocale=en-US&spilStorageId=9829247031";
            viewer.height = "750px";
            viewer.width = "1000px";
            break;
        
    }
}