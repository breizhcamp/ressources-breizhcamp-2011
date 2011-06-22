document.addEventListener("keyup", function(event) {
	var note;
	if (event.altKey && event.keyCode == 78) {
		note = prompt("Saisissez votre note");
		if (note)
			chrome.extension.sendRequest({
				message : "sendNote",
				note : note
			}, function(response) {
				console.log("response status", note, response.status);
			});
	}
}, false);