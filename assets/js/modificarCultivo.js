$(document).on("click", ".edit", function(e) {

	//console.log($(this).parent().parent().attr("id"))
	
	var coordinates = $(this)[0].getBoundingClientRect()

	//var $elem = $($(this).attr('id'));
	var $elem = $(this);
	document.getElementById('light3').style.display='block';
	console.log($("#light3")[0].getBoundingClientRect().width)
	console.log(coordinates.left)



	
	
	//$('#set').css("z-index","1002");
	$(this).css("z-index","1002");
	
	//if(document.getElementById('set').style.transform!='rotate(45deg)'){
	if($(this)[0].style.transform!='rotate(45deg)'){
    
	    $({deg: 0}).animate({deg: 45}, {
	        duration: 200,
	        step: function(now) {
	            
	            $elem.css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });

	    document.getElementById('fade').style.display='block';
    	

    	$("#light3").css({top: coordinates.top, left: (coordinates.left - $("#light3")[0].getBoundingClientRect().width-document.getElementById("blackL").getBoundingClientRect().width)+coordinates.width, position:'absolute'});
    	console.log($("#light3")[0].getBoundingClientRect())
	}

	else{

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    	});

    	document.getElementById('fade').style.display='none';
    	document.getElementById('light3').style.display='none';
    
    	$(this).css("z-index","4");




	}


});


$(document).on("click", ".boton", function(e) {

	//console.log($(this).parent().parent().attr("id"))
	
	var elem = $("#as");

	var scroll = $('#as').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth

	//console.log($(this))
	
	
	$('#as').scrollLeft($('#'+$(this).parent().parent().attr('id'))[0].offsetLeft-(anchoPantalla/100));
	
	var coordinates = $(this)[0].getBoundingClientRect()

	var $elem = $(this);


	$("#light").css({top: coordinates.top, left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	
	$elem.css("z-index","1002");
	
	if($(this)[0].style.transform!='rotate(45deg)'){
    
	    $({deg: 0}).animate({deg: 45}, {
	        duration: 200,
	        step: function(now) {
	            
	            $elem.css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });

	    document.getElementById('fade').style.display='block';
    	document.getElementById('light').style.display='block';


	}

	else{

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    	});

    	document.getElementById('fade').style.display='none';
    	document.getElementById('light').style.display='none';
    	$('#set').css("z-index","4");




	}


});



$(document).on("click", "#fade", function(e) {


 	//console.log($('.boton'))
	
 	$('.boton').css("z-index","4")

 	var current_pull = parseInt($('.boton').css('transform').split(',')[5]);

 	var rotacion_edit = parseInt($('.edit').css('transform').split(',')[5]);

	//console.log(current_pull)

	if(current_pull!='rotate(45deg)'){
    
	    $({deg: 0}).animate({deg: 0}, {
	        duration: 200,
	        step: function(now) {
	            
	            $('.boton').css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });


	}

	if(rotacion_edit!='rotate(45deg)'){
    
	    $({deg: 0}).animate({deg: 0}, {
	        duration: 200,
	        step: function(now) {
	            
	            $('.edit').css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });


	}
	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
	document.getElementById('light2').style.display='none';
	document.getElementById('light3').style.display='none';


});



var lastScrollLeft = 0;

$('#as').scroll(function() {

	var elem = $("#as");

	var scroll = $('#as').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth

	if(scroll < anchoPantalla/4){
		$('#1').css("background","white");
		$('#2').css("background","transparent");
		$('#3').css("background","transparent");
	}

    else if (scroll >=anchoPantalla/4 && scroll <= (anchoPantalla/4)*1.9 ){

        $('#1').css("background","transparent");
		$('#2').css("background","white");
		$('#3').css("background","transparent");
    }

	else{

		$('#1').css("background","transparent");
		$('#2').css("background","transparent");
		$('#3').css("background","white");

	}    
});



function moveScroll2(pos) {

	var elem = $("#as");

	var scroll = $('#as').scrollLeft();
	var anchoPantalla = elem[0].scrollWidth

	switch (pos){
		case 1:

			$('#1').css("background","white");
			$('#2').css("background","transparent");
			$('#3').css("background","transparent");

			$('#as').scrollLeft($('#panel1')[0].offsetLeft-(anchoPantalla/100));

			break;

		case 2:
			$('#1').css("background","transparent");
			$('#2').css("background","white");
			$('#3').css("background","transparent");

			$('#as').scrollLeft($('#panel2')[0].offsetLeft-(anchoPantalla/100));
			break;

		case 3:

			$('#1').css("background","transparent");
			$('#2').css("background","transparent");
			$('#3').css("background","white");

			$('#as').scrollLeft($('#panel3')[0].offsetLeft-(anchoPantalla/100));
			break;
	}



	
	

}

    
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left

        break;

        case 38: // up
        break;

        case 39: // right	
        
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});