Array.prototype.forEach.call(document.querySelectorAll(".next-notes"), function(input, index) {
	var enableInput = input.parentElement.querySelector(".enable-notes");
	var disableInput = input.parentElement.querySelector(".disable-notes");
	
	if (enableInput)
		enableInput.addEventListener("click", function(event) {
		chrome.extension.sendRequest({
			message : "enableNotes",
			index : index + 1
		}, function(response) {
		});
	}, false);
	if (disableInput)
		input.parentElement.querySelector(".disable-notes").addEventListener("click", function(event) {
			chrome.extension.sendRequest({
				message : "disableNotes",
				index : index + 1
			}, function(response) {
			});
		}, false);	
	input.addEventListener("click", function(event) {
		chrome.extension.sendRequest({
			message : "nextNotes",
			index : index + 1
		}, function(response) {			
		});
	}, false);
});
