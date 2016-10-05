var button_pressed;

$(document).on("click", ".edit", function(e) {


	var coordinates = $(this)[0].getBoundingClientRect()

	var $elem = $(this);
	document.getElementById('light3').style.display='block';
	

	$(this).css("z-index","1002");
	$('#selectProgram').css("z-index","1002");
	
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
    	$('#selectProgram').css("z-index","4");





	}


});


$(document).on("click", ".button", function(e) {

	$('.boton').css("z-index","4")
 	$(".row").css("z-index","4")

	var clase_boton = button_pressed.parent().attr('class')

	$('#valor1').css("visibility",'visible')
	$('#valor2').css("visibility",'visible')
    $('#valor3').css("visibility",'visible')

    $('#valor4').css("visibility",'visible')
	$('#valor5').css("visibility",'visible')
    $('#valor6').css("visibility",'visible')
	

	switch(clase_boton){
		case 'row third':
			console.log("asdad")
			var urlAbsolute = "assets/images/clock.png";
			$('#icon').attr("src", urlAbsolute)

			document.getElementById('set_period').style.display='block'	
			$('.boton').css("z-index","4")
		 	$(".row").css("z-index","4")
			break;

		case 'row fourth':
			document.getElementById('set_hor').style.display='block';
			

			$('#setting').html("Horario luz");
			$('#set1').html("Encendido");
			$('#set2').html("Apagado");
			$('.boton').css("z-index","4");
		 	$(".row").css("z-index","4");
			break;

		case 'row fifth':
			
			var urlAbsolute = 'assets/images/temperature.png';
            $('#setting').html("Temperatura")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Máxima")
            $('#set2').html("Minima")

            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')
			
			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;

		case 'row sixth':
			var urlAbsolute = 'assets/images/riego.png';
            $('#setting').html("Riego")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Porcentaje")
            $('#set2').html("Riego Mínimo")

            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')
			
			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;

		case 'row seventh':

			var urlAbsolute = 'assets/images/humedad.png';
            $('#setting').html("Humedad")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Máxima")
            $('#set2').html("Minima")

            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')
			
			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;



	}

});

$(document).on("click", ".boton", function(e) {


	button_pressed = $(this)
	
	var elem = $("#as");

	var scroll = $('#as').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth

	
	
	$('#as').scrollLeft($('#'+$(this).parent().parent().attr('id'))[0].offsetLeft-(anchoPantalla/100));
	
	var coordinates = $(this)[0].getBoundingClientRect()

	var $elem = $(this);

	document.getElementById('light2').style.display='block';



	$("#light").css({top: coordinates.top, left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	

	$("#light2").css({top: (coordinates.top - document.getElementById('light2').getBoundingClientRect().height*0.97), left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	document.getElementById('light2').style.display='none';
	$elem.css("z-index","1002");
	$(this).parent().css("z-index","1002");

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

	    if (coordinates.top < $(window).height()/2) {
    		document.getElementById('light').style.display='block';
    	}

    	else{
    		document.getElementById('light2').style.display='block';	
    	}

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
    	$elem.css("z-index","4");
    	$(this).parent().css("z-index","4");




	}


});

//

$(document).on("click", ".cancel", function(e) {

	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
	document.getElementById('light2').style.display='none';
	document.getElementById('light3').style.display='none';
	document.getElementById('set_period').style.display='none';
	document.getElementById('set_hor').style.display='none';

	var current_pull = parseInt($('.boton').css('transform').split(',')[5]);

 	var rotacion_edit = parseInt($('.edit').css('transform').split(',')[5]);

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


 	$('.boton').css("z-index","4")
 	$(".row").css("z-index","4")

});



$(document).on("click", "#fade", function(e) {

	
 	$('.boton').css("z-index","4")
 	$(".row").css("z-index","4")
 	

 	var current_pull = parseInt($('.boton').css('transform').split(',')[5]);

 	var rotacion_edit = parseInt($('.edit').css('transform').split(',')[5]);

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
	document.getElementById('set_period').style.display='none';
	document.getElementById('set_hor').style.display='none';

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



(function ($) {
  $('#mas').on('click', function() {
    $('#valor').html( parseInt($('#valor').html(), 10) + 1);
  });
  $('#menos').on('click', function() {
    $('#valor').html( parseInt($('#valor').html(), 10) - 1);
  });
})(jQuery);


(function ($) {
  $('.mas_hora').on('click', function(e) {

  	var hora = $(this).parent().parent().children("div").children(".boton_input.hora").html()

  
  	if (hora<12) {
    	$(this).parent().parent().children("div").children('.boton_input.hora').html( parseInt(hora, 10) + 1);
	}
  });

  $('.menos_hora').on('click', function() {

  	var hora = $(this).parent().parent().children("div").children(".boton_input.hora").html()

  	if (hora>1) {
    	$(this).parent().parent().children("div").children('.boton_input.hora').html( parseInt(hora, 10) - 1);
    }
  });
})(jQuery);




(function ($) {
  $('.mas_min').on('click', function(e) {

  	var min = $(this).parent().parent().children("div").children(".boton_input.min").html()

  
  	if (min<59) {
    	$(this).parent().parent().children("div").children('.boton_input.min').html( parseInt(min, 10) + 1);
	}
  });

  $('.menos_min').on('click', function() {

  	var min = $(this).parent().parent().children("div").children(".boton_input.min").html()

  	if (min>1) {
    	$(this).parent().parent().children("div").children('.boton_input.min').html( parseInt(min, 10) - 1);
    }
  });
})(jQuery);


(function ($) {
  $('.am').on('click', function(e) {

  	var ampm = $(this).parent().parent().children("div").children(".ampm").html()
  	 
  
  	if (ampm=='AM') {
    	$(this).parent().parent().children("div").children('.ampm').html('PM');
	}

	else{
		$(this).parent().parent().children("div").children('.ampm').html('AM');	
	}
  });
})(jQuery);


