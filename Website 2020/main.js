var ButtonH = document.getElementById("ButtonH");
var ButtonS = document.getElementById("ButtonS");
var ButtonA = document.getElementById("ButtonA");
var ButtonC = document.getElementById("ButtonC");

// adds a safety net
try {
	// Check if home button is pressed
	if(ButtonH) {
		ButtonH.onclick = ButtonH.addEventListener('click', function() {location.replace("HomePage.html")});
	}
	if(ButtonS) {
		ButtonS.onclick = ButtonS.addEventListener('click', function() {location.replace("Sessions.html")});
	}
	if(ButtonA) {
		ButtonA.onclick = ButtonA.addEventListener('click', function() {location.replace("About.html")});
	}
	if(ButtonC) {
		ButtonC.onclick = ButtonC.addEventListener('click', function() {location.replace("Contact.html")});
	}
} catch(ex) {
	console.error(ex);
}