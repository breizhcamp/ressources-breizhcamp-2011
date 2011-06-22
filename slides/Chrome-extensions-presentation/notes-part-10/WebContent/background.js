var notes = [];

function addNote(note) {
	notes.push(note);
	saveNotes();
	refreshBrowserAction();
}

function setNotes(newNotes) {
	notes = newNotes;
	saveNotes();
	refreshBrowserAction();
}

function saveNotes() {
	localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
	var storedNotes = localStorage.getItem("notes");
	notes = storedNotes ? JSON.parse(storedNotes) : [];
	refreshBrowserAction();
}

function exportNotes() {
	var blobBuilder = new WebKitBlobBuilder();
	blobBuilder.append(notes.join("\r\n"));
	open(webkitURL.createObjectURL(blobBuilder.getBlob()));
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

chrome.contextMenus.create({
	title : "Ajouter dans les notes",
	contexts : [ "selection" ],
	onclick : function(info, tab) {
		addNote(info.selectionText);
	}
});

chrome.omnibox.setDefaultSuggestion({
	description : "cherchez une note"
});

chrome.omnibox.onInputChanged.addListener(function(text, suggestCallback) {
	var suggestions = [];
	notes.forEach(function(note) {
		if (note.toLowerCase().indexOf(text.toLowerCase()) != -1)
			suggestions.push({
				content : note,
				description : note.replace(/[<>]/g, "")
			});
	});
	suggestCallback(suggestions);
});

loadNotes();