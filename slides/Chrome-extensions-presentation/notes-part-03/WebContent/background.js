var notes = [];

function addNote(note) {
	notes.push(note);
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.message == "sendNote") {
		addNote(request.note);
		sendResponse({
			status : "OK"
		});
	}
});