

/*
$(document).on("click", "#send", function(e) {
            bootbox.dialog({
  
  message: '<h1 style="color:#000;">¡Felicitaciones, tu mensaje se ha enviado con éxito</h1>',
  buttons: {
    success: {
      label: "Ok",
      
      
	}
}
});
        });
*/

$(document).on("click", "#send", function(e) {

	   console.log(e)

	document.getElementById('fade').style.display='block';
	document.getElementById('light').style.display='block';
});

$(document).on("click", "#fade", function(e) {

	

	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
});
