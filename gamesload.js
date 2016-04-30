function loadgame(game) {
    var viewer = document.getElementById('viewerholder');
    switch (game) {
        case 'ff2': 
            viewerholder.innerHTML = '<embed style="position: absolute; left: 35%; top: 5%" src="ff2.swf" quality="high" width="50%" height="90%" scale="exactfit" />';
            break;
        case 'slitherio':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 5%; top: 5%" src="http://slither.io" quality="high" width="90%" height="100%" scale="exactfit" />';
            break;
        case 'agario':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 5%; top: 5%" src="http://agar.io" quality="high" width="90%" height="80%" scale="exactfit" />';
            break;
        case 'bloxorz':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 25%; top: 25%" src="bloxorz.swf" quality="high" width="50%" height="47%" scale="exactfit" />';
            break;
        case 'chibi-knight':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 21%; top: 20%" src="chibi-knight.swf" quality="high" width="60%" height="75%" scale="exactfit" />';            
            break;
        case 'pacman':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 26%; top: 20%" src="pacman.swf" quality="high" width="50%" height="80%" scale="exactfit" />';
            break;
        case 'playgo':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 26%; top: 20%" src="playgo.swf" quality="high" width="50%" height="60%" scale="exactfit" />';
            break;
        case 'run2':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 22%; top: 20%" src="run2.swf" quality="high" width="60%" height="70%" scale="exactfit" />';
            break;
        case 'stickwar':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 16%; top: 20%" src="stickwar.swf" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
        case 'tombrunner':
            viewerholder.innerHTML = '<embed style="position: absolute; left: 16%; top: 20%" src="http://files.cdn.spilcloud.com/webgl/TR-13-01/index.html?gp=1&countryCode=US&siteid=500&channelid=100&siteLocale=en-US&spilStorageId=9829247031" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
        
    }
}