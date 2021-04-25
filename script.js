window.onload = init;
function init() {
    var levelno = 1;
    var level = document.getElementById('levelhead');
    var img = document.getElementById('level');
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onclick = getCursorXY;
    img.src='./level'+levelno+'.png';
}

var cuterus = {
    xstart : 410, 
    xend : 530, 
    ystart : 320, 
    yend : 450
}
var lovelace = {
    xstart : 500, 
    xend : 620, 
    ystart : 100, 
    yend : 270
}
var kamala = {
    xstart : 1150, 
    xend : 1400, 
    ystart : 330, 
    yend : 420
}
var rbg = {
    xstart : 1100, 
    xend : 1170, 
    ystart : 100, 
    yend : 200
}
var marie = {
    xstart : 1170, 
    xend : 1300, 
    ystart : 100, 
    yend : 300
}
function getCursorXY(e) {
	var X = e.pageX;
	var Y = e.pageY;
    if(X>=cuterus.xstart && X<=cuterus.xend && Y>=cuterus.ystart && Y<=cuterus.yend){
        alert('Congrats, Found the Cuterus');
    }
    if(X>=lovelace.xstart && X<=lovelace.xend && Y>=lovelace.ystart && Y<=lovelace.yend){
        alert('Congrats, Found Ada Lovelace');
    }
    if(X>=kamala.xstart && X<=kamala.xend && Y>=kamala.ystart && Y<=kamala.yend){
        alert('Congrats, Found Kamala Harris');
    }
    if(X>=rbg.xstart && X<=rbg.xend && Y>=rbg.ystart && Y<=rbg.yend){
        alert('Congrats, Found Ruth Bader Ginsberg');
    }
    if(X>=marie.xstart && X<=marie.xend && Y>=marie.ystart && Y<=marie.yend){
        alert('Congrats, Found Marie Curie');
    }
}
