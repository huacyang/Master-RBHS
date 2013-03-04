/*
 * Function for changing the navigation bar.
 */
function mobile() {
	//console.log("Windows width: " + $(window).width());
	var menu = $('#mobile_menu');
	var header = $('#mobile_header');
	var dropdown = $('#mobile_dropdown');
	var shifting = $('#shifting');
	if ($(window).width() <= 940 && !menu.hasClass('has-dropdown')) {
		console.log("Mobile");
		menu.addClass('has-dropdown');
		dropdown.addClass('dropdown');
		header.addClass('show-for-medium-down');
		header.removeClass('show-for-small');
		shifting.removeClass('shiftup');
	} else if ($(window).width() >= 940 && menu.hasClass('has-dropdown')) {
		console.log("Full Screen");
		menu.removeClass('has-dropdown');
		dropdown.removeClass('dropdown');
		header.removeClass('show-for-medium-down');
		header.addClass('show-for-small');
		shifting.addClass('shiftup');
	}
}

/*
 * Function for setting the corresponding tab on the navigation bar active
 */
function active() {
	var url = document.URL, index = 0, found = false;
	var token = url.replace(".", "/", "g");
	token = token.split("/");
	for(var i = 0; i < token.length; i++) {
		console.log(token);
		if (token[i] == "about") {
			document.getElementById("about").className = "has-dropdown active";
			break;
		} else if (token[i] == "academics") {
			document.getElementById("academics").className = "has-dropdown active";
			break;
		} else if (token[i] == "admissions") {
			document.getElementById("admissions").className = "has-dropdown active";
			break;
		} else if (token[i] == "care") {
			document.getElementById("care").className = "has-dropdown active";
			break;
		} else if (token[i] == "news") {
			document.getElementById("news").className = "has-dropdown active";
			break;
		} else if (token[i] == "research") {
			document.getElementById("research").className = "has-dropdown active";
			break;
		} else if (token[i] == "information") {
			document.getElementById("information").className = "has-dropdown active";
			break;
		}
	}
}

// During load
$(window).load(function(){
	$(window).resize(function() {
		mobile();
	});
});

// On first load
$(window).ready(function(e) {
	mobile();
	active();
});
