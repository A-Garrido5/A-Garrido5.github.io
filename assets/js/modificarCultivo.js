$(document).on("click", "#editar", function(e) {

	document.getElementById('fade').style.display='block';
	document.getElementById('light').style.display='block';
});

$(document).on("click", "#fade", function(e) {

	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
});

/*
$('#editard').click(function () {
    var leftPos = $('#as').scrollLeft();
    console.log(leftPos);    
    $("as").animate({
        scrollLeft: leftPos + 700
    }, 800);
}); */


var lastScrollLeft = 0;

$('#as').scroll(function() {

	var elem = $("#as");

	var scroll = $('#as').scrollLeft();

	console.log(scroll)

	var anchoPantalla = elem[0].scrollWidth

	console.log(anchoPantalla)

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

// diferencia 360

// 6 paneles 2159		
// 5 paneles 1799

// 4 paneles 1438	
// 3 paneles 1077

// 2 paneles 719


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



	
	

	//console.log(scroll)
	
	//
	//var anchoPantalla = elem[0].scrollWidth
	//var maxScrollTop = elem[0].scrollWidth - elem.outerWidth();
    
	//$('#as').scrollLeft()
	//$('#as').scrollLeft(scroll+50.8*(elem.outerWidth()/100))

	
    //$('#as').scrollLeft(scroll+50.069541029*(elem.outerWidth()/100))

    //console.log(anchoPantalla)

    //console.log(Math.round(anchoPantalla/361.5))
}

    

