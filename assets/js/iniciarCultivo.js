$('#select_program').on('change', function() {
  $('#paneles').show()
});


$(document).on("click", "#boton", function(e) {

 
	document.getElementById('fade').style.display='block';	    
	document.getElementById('light').style.display='block';

});

$(document).on("click", "#fade", function(e) {

	document.getElementById('fade').style.display='none';	    
	document.getElementById('light').style.display='none';

});

