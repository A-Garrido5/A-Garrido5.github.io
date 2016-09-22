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

// diferencia 362

// 6 paneles 2169
// 5 paneles 1807

// 4 paneles 1445	
// 3 paneles 1082

// 2 paneles 720


function moveScroll2() {
	var scroll = $('#as').scrollLeft();
	

	var elem = $("#as");
	var anchoPantalla = elem[0].scrollWidth
	var maxScrollTop = elem[0].scrollWidth - elem.outerWidth();
    

    $('#as').scrollLeft(scroll+55*(elem.outerWidth()/100))

    console.log()
}

    

