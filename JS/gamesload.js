function loadgame(game) {
    var viewer = document.getElementById('viewerholder');
    var music = document.getElementById('music');
    music.pause();
    switch (game) {
        //Freeway Fury
        case 'ff1': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ff1.swf" quality="high" width="37%" height="79%" scale="exactfit" />';
            break;
        case 'ff2': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ff2.swf" quality="high" width="36.5%" height="79%" scale="exactfit" />';
            break;
        case 'ff3': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ff3.swf" quality="high" width="39%" height="79%" scale="exactfit" />';
            break;
            
        
        //Trollface Quest
        case 'tq1': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq1.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tq2': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq2.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tq3': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq3.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tq4': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq4.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tq5': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq5.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tqsports': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tqsports.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tqtrolltube': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tqtrolltube.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'tq13': 
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tq13.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
            
        
        //Duck Life
        case 'ducklife1':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ducklife1.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'ducklife2':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ducklife2.swf" quality="high" width="60%" height="80%" scale="exactfit" />';
            break;
        case 'ducklife3':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ducklife3.swf" quality="high" width="60%" height="70%" scale="exactfit" />';
            break;
        case 'ducklife4':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/ducklife4.swf" quality="high" width="60%" height="70%" scale="exactfit" />';
            break;
            
            
        //Agario Clones
        case 'slitherio':
            viewerholder.innerHTML = '<embed class="game" style="" src="http://slither.io" quality="high" width="80%" height="90%" scale="exactfit" />';
            break;
        case 'agario':
            viewerholder.innerHTML = '<embed class="game" style="" src="http://agar.io" quality="high" width="80%" height="90%" scale="exactfit" />';
            break;
        case 'diepio':
            viewerholder.innerHTML = '<embed class="game" style="" src="https://diep.io" quality="high" width="80%" height="90%" scale="exactfit" />';
            break;
        case 'wingsio':
            viewerholder.innerHTML = '<embed class="game" style="" src="http://wings.io" quality="high" width="80%" height="90%" scale="exactfit" />';
            break;
        //Pacman
        case 'pacman':
            viewerholder.innerHTML = '<embed class="game" style=""; src="./games/pacman.swf" quality="high" width="50%" height="90%" scale="exactfit" />';
            break;
        case 'mrspacman':
            viewerholder.innerHTML = '<embed class="game" style=""; src="./games/mrspacman.swf" quality="high" width="50%" height="90%" scale="exactfit" />';
            break;
        //Run
        case 'run1':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/run1.swf" quality="high" width="60%" height="70%" scale="exactfit" />';
            break;
        case 'run2':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/run2.swf" quality="high" width="60%" height="70%" scale="exactfit" />';
            break;
        //Onslaught
        case 'onslaught':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/onslaught.swf" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
        case 'onslaught2':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/onslaught2.swf" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
            
            
        //Ballons Tower Defense
        case 'Ballons Tower Defense 5'
            viewerholder.innerHTML ='<embed class="game" style"" src="./games/bloonstd5.swf" quality="high" width="70%" height="50%" scale="exactfit" />';
            break;
        case 'Ballons Tower Defense 4'
            viewerholder.innerHTML ='<embed class="game" style"" src="./games/bloonstd4.swf" quality="high" width="70%" height="50%" scale="exactfit" />';
            break;    
        case 'Ballons Tower Defense 3'
            viewerholder.innerHTML ='<embed class="game" style"" src="./games/bloonstd3.swf" quality="high" width="70%" height="50%" scale="exactfit" />';
            break;     
        case 'Ballons Tower Defense 2'
            viewerholder.innerHTML ='embed class="game" style"" src="./games/bloonstd2.swf" quality="high" width="70%" height="50%" scale="exactfit" />';
            break;     
        case 'Ballons Tower Defense 1'
            viewerholder.innerHTML ='embed class="game" style"" src="./games/bloonstd1.swf" quality="high" width="70%" height="50%" scale="exactfit" />';
            break;     
        //Other Games
        case 'tosstheturtle':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/tosstheturtle.swf" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
        case 'bloxorz':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/bloxorz.swf" quality="high" width="50%" height="47%" scale="exactfit" />';
            break;
        case 'chibi-knight':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/chibi-knight.swf" quality="high" width="60%" height="75%" scale="exactfit" />';            
            break;
        case 'playgo':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/playgo.swf" quality="high" width="50%" height="60%" scale="exactfit" />';
            break;
        case 'stickwar':
            viewerholder.innerHTML = '<embed class="game" style="" src="./games/stickwar.swf" quality="high" width="70%" height="80%" scale="exactfit" />';
            break;
        case 'tombrunner':
            viewerholder.innerHTML = '<embed class="game" style=" width: 80%; height: 80%; " src="http://files.cdn.spilcloud.com/webgl/TR-13-01/index.html?gp=1&countryCode=US&siteid=500&channelid=100&siteLocale=en-US&spilStorageId=9829247031" quality="high" scale="exactfit" />';
            break;
        
    }
}
