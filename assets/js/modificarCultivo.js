$(document).on("click", "#editar", function(e) {

	var $elem = $('#editar');

    
    $({deg: 0}).animate({deg: 45}, {
        duration: 50,
        step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

	document.getElementById('fade').style.display='block';
	document.getElementById('light').style.display='block';
});

$(document).on("click", "#fade", function(e) {

	var $elem = $('#editar');

    $({deg: 0}).animate({deg: -90}, {
        duration: 50,
        step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

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

    

