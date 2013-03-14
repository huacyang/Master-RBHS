function shiftup() {
	var header = document.getElementById("header");
	if (header) {
		header.className = "twelve columns header_fix";
	}
	
	console.log("WHY IE8");
}

$(window).ready(function(e) {
	shiftup();
});
