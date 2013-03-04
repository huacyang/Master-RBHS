$(window).ready(function(e) {
	var wrapper = document.getElementById("section-wrapper");
	var old_nav = document.getElementById("navigation");
	var new_nav = document.createElement("ul");
	var li = document.createElement("li");
	var a = document.createElement("a");
	var img = document.createElement("img");
	
	img.src = "includes/img/bars.jpg";
	a.id = "mobile_header";
	a.href = "#";
	li.id = "mobile_menu";
	li.className = "has-dropdown";
	new_nav.id = "navigation";
	new_nav.class = "left";
	old_nav.id = "mobile_dropdown";
	old_nav.className = "dropdown";
	
	a.appendChild(img);
	li.appendChild(a);
	li.appendChild(old_nav);
	new_nav.appendChild(li);
	wrapper.appendChild(new_nav);
	
	console.log(document.getElementById("navigation"));
});

/*

	<!-- #wrapper-for-mobile-devices -->
	
<ul id="navigation" class="left">
    <li id="mobile_menu" class="has-dropdown">
    <a id="mobile_header" class="active" href="#"><img src="includes/img/bars.jpg" /></a>
    <ul id="mobile_dropdown" class="dropdown">
	*/