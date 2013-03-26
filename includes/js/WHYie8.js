function shiftup() {
	var header = document.getElementById("header");
	var content = document.getElementById("shifting");
	
	if (header) {
		header.className = "twelve columns header_fix";
	}
	if (content) {
		content.className = "twelve columns bg-white shifting"
	}
	
	document.getElementById("WHYie").innerHTML = "Message of the day: Why are you using IE?!";
}

$(window).ready(function(e) {
	shiftup();
});
