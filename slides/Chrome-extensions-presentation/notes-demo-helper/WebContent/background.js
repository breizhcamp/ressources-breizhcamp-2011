var currentIndex = 0, extensionName = "Bloc notes - partie ";

chrome.management.getAll(function(extensionInfos) {
	var i, extensionInfo, extensionIndex;
	for (i = 0; i < extensionInfos.length; i++) {
		extensionInfo = extensionInfos[i];
		if (extensionInfo.name.indexOf(extensionName) == 0)
			chrome.management.setEnabled(extensionInfo.id, false);
	}
});

chrome.tabs.getAllInWindow(null, function(tabs) {
	tabs.forEach(function(tab) {
		chrome.tabs.executeScript(tab.id, {
			file : "content_script.js"
		});
	});
});

function setEnabled(index, enabled) {
	chrome.management.getAll(function(extensionInfos) {
		var i, extensionInfo, extensionIndex;
		for (i = 0; i < extensionInfos.length; i++) {
			extensionInfo = extensionInfos[i];
			if (extensionInfo.name.indexOf(extensionName) == 0) {
				extensionIndex = Number(extensionInfo.name.split(extensionName)[1]);
				if (extensionIndex == index)
					chrome.management.setEnabled(extensionInfo.id, enabled);
			}
		}
	});
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.message == "nextNotes") {
		if (currentIndex)
			setEnabled(currentIndex, false);
		setEnabled(request.index, true);
		currentIndex = request.index;
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.update(tab.id, {
				selected : true,
				url : tab.url
			});
		});
	}
	if (request.message == "enableNotes") {
		setEnabled(request.index, true);
		currentIndex = request.index;
	}
	if (request.message == "disableNotes") {
		setEnabled(request.index, false);
		currentIndex = 0;
	}
});