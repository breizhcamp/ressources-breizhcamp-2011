document.addEventListener("keyup", function(event) {
	var note;
	if (event.altKey && event.keyCode == 78) {
		note = prompt("Saisissez votre note");		
	}
}, false);