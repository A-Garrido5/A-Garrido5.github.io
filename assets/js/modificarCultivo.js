$(document).on("click", "#edit", function(e) {

	var $elem = $('#edit');

	document.getElementById('fade').style.display='block';
	//document.getElementById('light').style.display='block';

	$('#edit').css("z-index","1002");
	$('#lista').css("z-index","1002");
	$('#selectProgram').css("z-index","1002");

	if(document.getElementById('edit').style.transform!='rotate(45deg)'){
    
	    $({deg: 0}).animate({deg: 45}, {
	        duration: 200,
	        step: function(now) {
	            
	            $elem.css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });
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
    	document.getElementById('light').style.display='none'



	}

});





$(document).on("click", "#edita", function(e) {

	var coordinates = document.getElementById('edita').getBoundingClientRect()

	console.log(coordinates)


	$("#light").css({top: coordinates.y, left: coordinates.x, position:'absolute'});

	$("#set").css({width: coordinates.width, height: coordinates.height, position:'absolute'});


	document.getElementById('fade').style.display='block';
	document.getElementById('light').style.display='block';
});

$(document).on("click", "#fade", function(e) {

	var $elem = $('#edit');

	if(document.getElementById('edit').style.transform='rotate(45deg)'){

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
		
	}
    

	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
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

    else if (scroll >=anchoPantalla/4 && scroll < (anchoPantalla/4)*2 ){

        $('#1').css("background","transparent");
		$('#2').css("background","white");30,697917938
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

    
