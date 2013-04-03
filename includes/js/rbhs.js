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
		//console.log("Mobile");
		menu.addClass('has-dropdown');
		dropdown.addClass('dropdown');
		header.addClass('show-for-medium-down');
		header.removeClass('show-for-small');
		shifting.removeClass('shiftup');
	} else if ($(window).width() >= 940 && menu.hasClass('has-dropdown')) {
		//console.log("Full Screen");
		menu.removeClass('has-dropdown');
		dropdown.removeClass('dropdown');
		header.removeClass('show-for-medium-down');
		header.addClass('show-for-small');
		shifting.addClass('shiftup');
	}
}

function active_about() {
	document.getElementById("side_about").className = "active";
}

/*
 * Function for setting the corresponding tab on the navigation bar active
 */
function active() {
	var url = document.URL, i = 0, found = false;
	var token = url.replace(".", "/", "g").replace("_", "/", "g");
	token = token.split("/");
	for(; i < token.length; i++) {
		//console.log(token[i]);
		if (token[i] == "about" || 
			token[i] == "chancellor" || 
			token[i] == "locations") {
			document.getElementById("about").className = "has-dropdown active";
			active_about();
			break;
		} else if (token[i] == "academics" || 
				   token[i] == "schools" || 
				   token[i] == "continuing" || 
				   token[i] == "online" ||
				   token[i] == "graduate" ||
				   token[i] == "undergraduate") {
			document.getElementById("academics").className = "has-dropdown active";
			break;
		} else if (token[i] == "admissions" ||
				   token[i] == "financial") {
			document.getElementById("admissions").className = "has-dropdown active";
			break;
		} else if (token[i] == "care" ||
				   token[i] == "reference" ||
				   token[i] == "community" ||
				   token[i] == "practices" ||
				   token[i] == "trials") {
			document.getElementById("care").className = "has-dropdown active";
			break;
		} else if (token[i] == "news") {
			document.getElementById("news").className = "has-dropdown active";
			break;
		} else if (token[i] == "research" ||
				   token[i] == "institutes") {
			document.getElementById("research").className = "has-dropdown active";
			break;
		} else if (token[i] == "information") {
			document.getElementById("information").className = "has-dropdown active";
			break;
		}
	}
}


/**active side nav
jQuery(function() {
  jQuery('#side_nav nav-bar > li').each(function() {
    var href = jQuery(this).find('a').attr('href');
    if (href === window.location.pathname) {
      jQuery(this).addClass('active');
    }
  });
});**/

function setActive() {
  aObj = document.getElementById('side_nav').getElementsByTagName('li');
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
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

