var bgPage = chrome.extension.getBackgroundPage(), listElement = document.getElementById("notes-list"), editLink = document.getElementById("edit-link"), saveLink = document
		.getElementById("save-link"), cancelLink = document.getElementById("cancel-link"), exportLink = document.getElementById("export-link"), lastContent;

function refresh() {
	listElement.innerHTML = "";
	bgPage.notes.forEach(function(note) {
		var itemElement = document.createElement("li");
		itemElement.innerText = note;
		listElement.appendChild(itemElement);
	});
}

function setEditMode(mode) {
	listElement.contentEditable = mode;
	editLink.hidden = mode;
	saveLink.hidden = cancelLink.hidden = !mode;
	listElement.focus();
}

editLink.addEventListener("click", function() {
	if (listElement.children.length) {
		lastContent = listElement.innerHTML;
		setEditMode(true);
	}
}, false);

cancelLink.addEventListener("click", function() {
	listElement.innerHTML = lastContent;
	setEditMode(false);
}, false);

saveLink.addEventListener("click", function() {
	bgPage.setNotes(Array.prototype.map.call(listElement.children, function(itemElement) {
		return itemElement.innerText;
	}));
	setEditMode(false);
}, false);

exportLink.addEventListener("click", bgPage.exportNotes, false);

refresh();