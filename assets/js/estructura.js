$(document).ready(function() {

	$("html").attr("lang", "es")

	var head = "";
	var body = ""; 

	head += '<meta charset="utf-8">';
	head += '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
	head += '<meta name="viewport" content="width=device-width, initial-scale=1">'
	head += '<link href="assets/css/bootstrap.min.css" rel="stylesheet">'
	head += '<link href="assets/css/bootstrap.min.css" rel="stylesheet">'
	head += '<meta charset="utf-8">'

	$('head').append(head);


	//$('body').append('<div class="container-fluid"></div>');
	body += '<div class="container-fluid">';
	body += '	<div id="fade" class="overlay back"></div>';
	body += '	<div class="hidden-xs hidden-sm col-md-4 fondo"></div>';
	body += '	<div class="col-md-4 col-xs-12 col-sm-12 columna2">';
	body += '		<div class="row encabezado">';
	body += '			<div class="caption" style="text-align:center;">';
	body += '				<h2 class="titulo">Inicio</h2>';
	body += '			</div>';
	body += '		</div>';
	body += '		<div class="row cuerpo"></div>';
	body += '		<div class="row foot">';
	body += '			<div class="col-md-4 col-xs-4 col-sm-4 col-foot">';
	body += '				<button type="button" class="btn btn-default btn-lg" onclick="abrirNotificaciones()" style="width:100%;"><img  src="assets/images/notification.png" style="vertical-align:middle;height:5vh""></button>'
	body += '			</div>';
	body += '			<div class="col-md-4 col-xs-4 col-sm-4 col-foot">';
	body += '				<button type="button" class="btn btn-default btn-lg" onclick="goHome()" style="width:100%;"><img  src="assets/images/home.png" style="vertical-align:middle;height:5vh""></button>'
	body += '			</div>';
	body += '			<div class="col-md-4 col-xs-4 col-sm-4 col-foot">';
	body += '				<button type="button" class="btn btn-default btn-lg" onclick="abrirAyuda()" style="width:100%;"><img  src="assets/images/help.png" style="vertical-align:middle;height:5vh""></button>'
	body += '			</div>';
	body += '		</div>';
	body += '	</div>';
	body += '	<div class="hidden-xs hidden-sm col-md-4 fondo"></div>';
	body += '</div>';

	body += '<div id="mySidenavHelp" class="sidenav">';
	body += '	<div class="row headSideBarHelp">';
	body += '		<img  src="assets/images/help.png" >'
    body += '       <label>Ayuda</label>'
	body += '	</div>';
	body += '	<ul style="list-style-type:circle">'
	body += '	</ul>'
	body += '</div>';
	
	$('body').append(body);

});


function abrirAyuda() {

	$('#fade').css('display','block');


    if($('#mySidenavHelp').css('width')== '' || $('#mySidenavHelp').css('width') == "0px"){
    
      /*
      if (notificaciones.style.width=="300px"){
        notificaciones.style.width="0px";
      }*/
      $('#mySidenavHelp').css('width','250px');

    }

    else
      $('#mySidenavHelp').css('width',"0px");
    

    
}


$(document).on("click", "#fade", function(e){
  //document.getElementById("fade").style.display='none'
  $('#fade').css('display','none');
  $('#mySidenavHelp').css('width',"0px");
  //document.getElementById("mySidenav2").style.width = "0px";

});