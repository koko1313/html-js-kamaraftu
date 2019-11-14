var powered = false;

function resize(){
	var keyboard = document.getElementById("keyboard");
	var phone = document.getElementById("phone");
	var display = document.getElementById("display");
	var displayContent = document.getElementById("displayContent");
	
	keyboard.style.width = phone.width * 50/100;
	keyboard.style.height = phone.height * 42/100;
	keyboard.style.marginTop = phone.height * 4/100;
	keyboard.style.marginLeft = phone.width * 22/100;
	
	display.style.marginTop = - phone.height * 77/100;
	display.style.marginLeft = phone.width * 23/100;
	display.style.width = phone.width * 49/100;
	display.style.height = phone.height * 18/100;
	display.style.fontSize = display.offsetWidth / 5;
	displayContent.style.width = phone.width * 49/100;
	displayContent.style.height = phone.height * 18/100;
}

function press(pressedButton){
	switch (pressedButton) {
		case "decline" : 
			if(!powered) turnOn();
			else turnOff();
	}
}

function turnOn(){
	var display = document.getElementById("display");
	
	display.style.backgroundImage = 'url("' + "images/boot.gif" + '?x=' + Date.now() + '")';
	display.style.backgroundSize = display.offsetWidth + "px";
	setTimeout(function(){
		powered = true;
		showClock();
	}, 6000);
}

function turnOff(){
	var display = document.getElementById("display");
	display.style.backgroundImage = "url()";
	document.getElementById("displayContent").innerHTML = "";
	powered = false;
}

function showClock() {
	if(!powered) return;
	var displayContent = document.getElementById("displayContent");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    displayContent.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(showClock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}