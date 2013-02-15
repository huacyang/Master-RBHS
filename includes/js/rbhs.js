var total_content = 0;

$(window).load(function(){
	// Specific the image slider speed (in seconds)
	$('#carousel_img').each(function(){
		$(this).carousel({
			interval: 5000
		});
	});
	
	$(".carousel-nav a").click(function(e){
		e.preventDefault();
		var index = parseInt($(this).attr('data-to'));
		$('.carousel').carousel(index);
		var nav = $('.carousel-nav');
		var item = nav.find('a').get(index);
		nav.find('a.active').removeClass('active');
		$(item).addClass('active');
	});
	
	$("#carousel_img").bind('slide', function(e) {
		var elements = total_content;
		var nav = $('.carousel-nav');
		var index = $('#carousel_img').find('.item.active').index();
		index = (index == elements - 1) ? 0 : index + 1;
		var item = nav.find('a').get(index);
		nav.find('a.active').removeClass('active');
		$(item).addClass('active');
		
		$('#content_inner').carousel(index);
	});
	
	/**
	$(window).resize(function() {
		console.log("Windows width: " + $(window).width());
		if ($(window).width() <= 1000) {
			var menu = $('#mobile_menu');
			var dropdown = $('#mobile_dropdown');
			menu.addClass('has-dropdown');
			dropdown.addClass('dropdown');
			console.log(menu.hasClass('has-dropdown'));
		} else if ($(window).width() >= 1000) {
			var menu = $('#mobile_menu');
			var dropdown = $('#mobile_dropdown');
			menu.removeClass('has-dropdown');
			dropdown.removeClass('dropdown');
			console.log(menu.hasClass('has-dropdown'));
		}
	});
	**/
});

$(window).ready(function(e) {
	function create_img(img_link) {
		var img = document.createElement("img");
		img.src = img_link;
		return img;
	}
	function create_tag(type, content) {
		var anonymous = document.createElement(type);
		anonymous.innerHTML = content;
		return anonymous;
	}
	function append_content(first, id, content1, content2) {
		var div = document.createElement("div");
		if (content1) { div.appendChild(content1); }
		if (content2) { div.appendChild(content2); }
		if (first) { div.className = "item active"; } 
		else { div.className = "item"; }
		document.getElementById(id).appendChild(div);
	}
	function append_atag(first, count, img_thumb) {
		var atag = document.createElement("a");
		atag.setAttribute("data-to", count);
		atag.href = "#";
		atag.appendChild(create_img(img_thumb));
		if (first) { atag.className = "active"; }
		document.getElementById("carouselnav").appendChild(atag);
	}
	// Pathway to the text file
	var filePath = "slideshow_content.txt"
	// XML request to the above pathway
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",filePath,false);
	xmlhttp.send(null);
	// Parse the context of the text into an array,
	//  separated by new lines
	var fileContent = xmlhttp.responseText;
	var fileArray = fileContent.split('\n')
	
	var i = 0, count = 0, first = true, img_link, img_title, img_content;
	var img_div, content_div;
	do {
		img_title = fileArray[i];
		img_link = fileArray[i+1];
		img_thumb = fileArray[i+2];
		img_content = fileArray[i+3];
		
		if (!img_title || !img_link || !img_content) {
			i++;
			continue;
		} else {
			i = i+4;
			append_content(first, "image", create_img(img_link), null);
			append_content(first, "content", create_tag("h4", img_title), create_tag("p", img_content));
			append_atag(first, count, img_thumb);
			count++;
			total_content++;
			if (first) { first = false; }
		}
	} while (i < fileArray.length);
	
	console.log("Windows width: " + $(window).width());
	if ($(window).width() <= 1000) {
		var menu = $('#mobile_menu');
		var dropdown = $('#mobile_dropdown');
		menu.addClass('has-dropdown');
		dropdown.addClass('dropdown');
		console.log(menu.hasClass('has-dropdown'));
	}
});
