function shiftup() {
	var header = document.getElementById("header");
	if (header) {
		header.className = "twelve columns header_fix";
	}
}

$(window).ready(function(e) {
	shiftup();
	console.log("WHY ie8?!");
});
