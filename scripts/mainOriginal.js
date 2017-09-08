//Initialize Sidenav
    	$(".button-collapse").sideNav();
    	//Close Sidenav on link click
    	$("ul#slide-out.side-nav > li > a").click(function(){
    		$('.button-collapse').sideNav('hide');
    		
    	});
    	//Smooth Scroll
    	$(document).on('click', 'a#link', function(event){
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		});

		$.getJSON("https://quotes-gen.herokuapp.com/quote",function(data) {
		       $("#quote").text(data.text + " ~ " + data.name);
		  });
