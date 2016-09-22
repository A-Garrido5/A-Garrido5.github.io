$('#select_program').on('change', function() {
  $('#paneles').show()
});

$(document).on("click", "#boton", function(e) {
            bootbox.dialog({
  
  message: '<h1 style="color:#000;">¡Felicitaciones, tu cultivo se ha iniciado con éxito</h1>',
  buttons: {
    success: {
      label: "Ok",
      
      
	}
}
});
        });


 





