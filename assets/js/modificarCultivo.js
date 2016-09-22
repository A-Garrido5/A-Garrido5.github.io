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

function moveScroll(pos) {
	var scroll = $('#as').scrollLeft();
    console.log(scroll);

    switch (pos){
    	case 1:
			$('#as').scrollLeft(scroll-400);
			break;

		case 2:
			$('#as').scrollLeft(190+scroll);
			break;

		case 3:
			$('#as').scrollLeft(380+scroll);
			break;
	}
}


function moveScroll2() {
	var scroll = $('#as').scrollLeft();
    

    console.log(scroll)
}

    

