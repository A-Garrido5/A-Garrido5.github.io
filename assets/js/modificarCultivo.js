$(document).on("click", "#edit", function(e) {

	document.getElementById('fade').style.display='none';
    document.getElementById('light').style.display='none'

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

	var $elem = $('#edita');


	$("#light").css({top: coordinates.top, left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	
	$('#edita').css("z-index","1003");
	
	if(document.getElementById('edita').style.transform!='rotate(45deg)'){
    
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
    	$('#edita').css("z-index","4");




	}


});



$(document).on("click", "#set", function(e) {

	
	var elem = $("#as");

	var scroll = $('#as').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth
	
	//.css("left", document.getElementById('panel1').getBoundingClientRect().left );
	$('#as').scrollLeft($('#'+$('#'+e.target.id).parent().parent().attr('id'))[0].offsetLeft-(anchoPantalla/100));
	//$('#as').scrollLeft($('#set').parent().position().left - 42);
	var coordinates = document.getElementById('set').getBoundingClientRect()

	var $elem = $('#set');


	$("#light").css({top: coordinates.top, left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	
	$('#set').css("z-index","1003");
	
	if(document.getElementById('set').style.transform!='rotate(45deg)'){
    
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



$(document).on("click", "#ed", function(e) {

	var coordinates = document.getElementById('ed').getBoundingClientRect()

	var $elem = $('#ed');

	console.log(coordinates)

	document.getElementById('light2').style.display='block';
	$("#light2").css({top: (coordinates.top - document.getElementById('light2').getBoundingClientRect().height*0.97), left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	
	$('#ed').css("z-index","1002");
	
	if(document.getElementById('ed').style.transform!='rotate(-45deg)'){
    
	    $({deg: 0}).animate({deg: -45}, {
	        duration: 200,
	        step: function(now) {
	            
	            $elem.css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        }
	    });

	    document.getElementById('fade').style.display='block';
    	


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
    	document.getElementById('light2').style.display='none';
    	$('#ed').css("z-index","4");


	}


});

$(document).on("click", "#fade", function(e) {

	var $elem = $('#edit');
	var e = $('#edita');
	var ed = $('#ed');
	var set = $('#set')

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
    
    if(document.getElementById('edita').style.transform='rotate(45deg)'){

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            e.css({
                transform: 'rotate(' + now + 'deg)'
            });
        	}
    	});
		
	}

	if(document.getElementById('ed').style.transform='rotate(45deg)'){

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            ed.css({
                transform: 'rotate(' + now + 'deg)'
            });
        	}
    	});
		
	}


	if(document.getElementById('set').style.transform='rotate(45deg)'){

		$({deg: 0}).animate({deg: 0}, {
        duration: 200,
        step: function(now) {
            
            set.css({
                transform: 'rotate(' + now + 'deg)'
            });
        	}
    	});
		
	}

	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
	document.getElementById('light2').style.display='none';

	$('#edita').css("z-index","4");
	$('#ed').css("z-index","4");
	$('#set').css("z-index","4");
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

    
