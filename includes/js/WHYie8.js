function shiftup() {
	var header = document.getElementById("header");
	var content = document.getElementById("shifting");
	
	if (header) {
		header.className = "twelve columns header_fix";
	}
	if (content) {
		content.className = "twelve columns bg-white shifting"
	}
	
	document.getElementById("WHYie").innerHTML = "Test: This is IE";
}

$(window).ready(function(e) {
	shiftup();
});
