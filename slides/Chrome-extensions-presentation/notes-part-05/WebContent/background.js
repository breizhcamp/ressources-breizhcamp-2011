var notes = [];

function addNote(note) {
	notes.push(note);
	refreshBrowserAction();
}

function refreshBrowserAction() {
	var title;
	if (notes.length) {
		title = "Vous avez " + notes.length + " note" + (notes.length > 1 ? "s" : "");
		text = String(notes.length);
	} else {
		title = "Vous n'avez aucune note";
		text = "";
	}
	chrome.browserAction.setTitle({
		title : title
	});
	chrome.browserAction.setBadgeText({
		text : text
	});
	chrome.browserAction.setBadgeBackgroundColor({
		color : [ 4, 229, 36, 255 ]
	});
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.message == "sendNote") {
		addNote(request.note);
		sendResponse({
			status : "OK"
		});
	}
});