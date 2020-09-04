// declaring button variables
var ButtonH = document.getElementById("ButtonH");
var ButtonS = document.getElementById("ButtonS");
var ButtonA = document.getElementById("ButtonA");
var ButtonC = document.getElementById("ButtonC");

// declaring dropdown button variables
var btnDay = document.getElementById("btnDay");
var btnMonth = document.getElementById("btnMonth");
var btnTime = document.getElementById("btnTime");
var btnTimeOfDay = document.getElementById("btnTimeOfDay");

// dropdown variables
var dayDropdown = document.getElementById("dayDropdown");
var monthDropdown = document.getElementById("monthDropdown");
var timeDropdown = document.getElementById("timeDropdown");
var timeOfDayDropdown = document.getElementById("time-of-dayDropdown");
if (ButtonH) {
		ButtonH.onclick = ButtonH.addEventListener('click', function () {
			location.replace("HomePage.html")
		});
	}
	if (ButtonS) {
		ButtonS.onclick = ButtonS.addEventListener('click', function () {
			location.replace("Sessions.html")
		});
	}
	if (ButtonA) {
		ButtonA.onclick = ButtonA.addEventListener('click', function () {
			location.replace("About.html")
		});
	}
	if (ButtonC) {
		ButtonC.onclick = ButtonC.addEventListener('click', function () {
			location.replace("Contact.html")
		});
	}
var btnArray = new Array(
	btnDay, btnMonth, btnTime, btnTimeOfDay
);
// store dropdown object into and array
var ddArray = new Array(
	dayDropdown, monthDropdown, timeDropdown, timeOfDayDropdown
);
// set a onclick function for each of the dropdown button
btnDay.onclick = function () {
	dayDropdown.classList.toggle("show");
}
btnMonth.onclick = function () {
	monthDropdown.classList.toggle("show");
}
btnTime.onclick = function () {
	timeDropdown.classList.toggle("show");
}
btnTimeOfDay.onclick = function () {
	timeOfDayDropdown.classList.toggle("show");
}

window.onclick = function (e) {
	// check if user clicks outside of the dopdown
	if (!e.target.matches('.dropbtn')) {
		// itterate through the dropdown array
		ddArray.forEach(dd => {
			// if the dropdown is shown
			if (dd.classList.contains('show')) {
				// hide the dropdown
				dd.classList.remove('show');
			}
		});

	}
}

// adds a safety net
try {
	// Check if home button is pressed
	
} catch (ex) {
	console.error(ex);
}