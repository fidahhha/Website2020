var ButtonH = document.getElementById("ButtonH");
var ButtonS = document.getElementById("ButtonS");
var ButtonA = document.getElementById("ButtonA");
var ButtonC = document.getElementById("ButtonC");

function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
	if(!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if(myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}

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