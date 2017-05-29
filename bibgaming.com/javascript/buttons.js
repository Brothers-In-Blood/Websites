function forumsClick(){
	window.location.replace("http://discourse.bibgamingdev.com");
}

function newsClick(){
	window.location.replace("http://discourse.bibgamingdev.com/c/General/News");
}


function serverClick(){
	window.location.replace("http://discourse.bibgamingdev.com/c/Servers/");
}





// you may need another way of getting reference to the iframe:
var iframe = document.getElementsByTagName('iframe')[0];
var player = $f( iframe );

 player.addEvent('ready', function() {
     player.api('setVolume', 0); 
 });
