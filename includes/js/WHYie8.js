function remove() {
	var nav = document.getElementById('section-wrapper');
	var mobile = document.getElementById('navigation');
	var content = document.getElementById('mobile_dropdown');
	
	nav.appendChild(content);
	nav.removeChild(mobile);
	
	content.className = "left nav-cover";
	content.id = "navigation";
	//console.log(nav);
}

function shiftup() {
	var header = document.getElementById("header");
	var content = document.getElementById("shifting");
	
	if (header) {
		//header.className = "twelve columns header_fix";
	}
	if (content) {
		content.className = "twelve columns bg-white shifting"
	}
}

$(window).ready(function(e) {
	shiftup();
	remove();
});
