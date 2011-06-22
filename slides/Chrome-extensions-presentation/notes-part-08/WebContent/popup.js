var bgPage = chrome.extension.getBackgroundPage(), listElement = document.getElementById("notes-list");

function refresh() {
	listElement.innerHTML = "";
	bgPage.notes.forEach(function(note) {
		var itemElement = document.createElement("li");
		itemElement.innerText = note;
		listElement.appendChild(itemElement);
	});
}

refresh();