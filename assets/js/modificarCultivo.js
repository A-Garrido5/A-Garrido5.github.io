var button_pressed;

function crearPanelVacio(){
	var htmlDinamico="";	
	htmlDinamico+=' <a class="panel2" style="height:100%;width:49%;margin-right:0.5%;vertical-align:top;background:transparent;">';
	htmlDinamico+='</a>';

	
	$( "#contenedor" ).append( htmlDinamico );

}

function crearPanel(numero,clasePanel,nombre,dias,hora_inicio,hora_termino,maxTemp,minTemp,riegoPor,riegoMin,humedadMax,humedadMin){

	var htmlDinamico="";

	htmlDinamico+='<a id="p'+ numero+'" class="'+clasePanel+'" style="height:100%;width:49%;margin-right:1%;vertical-align:top;">';
	htmlDinamico+='	<div class="row first" style="height:10%;white-space:normal;position:relative;max-width:100%;">';
	htmlDinamico+='		<div class="col-md-10 col-sm-10 col-xs-10" style="height:100%;padding:0">';
	
	if(nombre=='germinacion')
		htmlDinamico+='		<img id=p"'+numero+'ico1" src="assets/images/planta.png"  style="height:100%;position:relative;">'
	
	else if (nombre=='plantula')
		htmlDinamico+='		<img id=p'+numero+'ico1" src="assets/images/vegetal.png"  style="height:100%;position:relative;">'

	else if (nombre=='vegetativo')
		htmlDinamico+='		<img id=p'+numero+'ico1" src="assets/images/flor.png"  style="height:100%;position:relative;">'
	
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b1" class="boton btn" style="background:transparent;height:75%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';
	
	htmlDinamico+='	<div class="row second" style="height:10%;position:relative;margin-top:5%;max-width:100%;">';
	
	if(nombre=='germinacion')
		htmlDinamico+='	<label id="p'+numero+'1etapa" style="height: 100%; font-size: 3.5vh;">Germinación</label>';

	else if (nombre=='plantula')
		htmlDinamico+='	<label id="p'+numero+'1etapa" style="height: 100%; font-size: 3.5vh;">Plántula</label>';

	else if (nombre=='vegetativo')
		htmlDinamico+='	<label id="p'+numero+'1etapa" style="height: 100%; font-size: 3.5vh;">Vegetativo</label>';

	htmlDinamico+='	</div>';

	htmlDinamico+='	<div class="row third" style="height:15%;white-space: normal; position:relative;max-width:100%;">';
	
	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0">';
	htmlDinamico+='			<img id="p'+numero+'ico2" src="assets/images/reloj.png"  style="height:50%; ">';
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-8 col-sm-8 col-xs-8" style="height:100%;padding:0">'
	htmlDinamico+='			<label id="p'+numero+'dias" style="font-size: 3vh;width: 100%; float:left">'+dias+' días</label>'
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b2" class="boton btn" style="background:transparent;height:50%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';

	htmlDinamico+='	<div class="row fourth" style="height:15%;white-space: normal; position:relative;max-width:100%;">'

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0">';
	htmlDinamico+='			<img id="p'+numero+'ico3" src="assets/images/ampolleta.png"  style="height:50%; ">';
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-8 col-sm-8 col-xs-8" style="height:100%;padding:0;margin:0;">';
	
	htmlDinamico+='			<div class="row" style="height:30%;">';
	htmlDinamico+='				<label id="p'+numero+'luz1" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+hora_inicio+'</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='			<div class="row" style="height:50%;">';
	htmlDinamico+='				<label id="p'+numero+'luz2" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+hora_termino+'</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b3" class="boton btn" style="background:transparent;height:50%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';

	htmlDinamico+='	<div class="row fifth" style="height:15%;white-space: normal; position:relative;max-width:100%;">'

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0">';
	htmlDinamico+='			<img id="p'+numero+'ico4" src="assets/images/temperature.png"  style="height:50%; ">';
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-8 col-sm-8 col-xs-8" style="height:100%;padding:0;margin:0;">';
	
	htmlDinamico+='			<div class="row" style="height:30%;">';
	htmlDinamico+='				<label id="p'+numero+'t1" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+maxTemp+'° C Máx</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='			<div class="row" style="height:50%;">';
	htmlDinamico+='				<label id="p'+numero+'t2" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+minTemp+'° C Min.</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b4" class="boton btn" style="background:transparent;height:50%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';

	htmlDinamico+='	<div class="row sixth" style="height:15%;white-space: normal; position:relative;max-width:100%;">'

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0">';
	htmlDinamico+='			<img id="p'+numero+'ico5" src="assets/images/riego.png"  style="height:50%; ">';
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-8 col-sm-8 col-xs-8" style="height:100%;padding:0;margin:0;">';
	
	htmlDinamico+='			<div class="row" style="height:30%;">';
	htmlDinamico+='				<label id="p'+numero+'r1" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+riegoPor+'% Min.</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='			<div class="row" style="height:50%;">';
	htmlDinamico+='				<label id="p'+numero+'r2" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+riegoMin+' ml.</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b5" class="boton btn" style="background:transparent;height:50%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';

	htmlDinamico+='	<div class="row seventh" style="height:15%;white-space: normal; position:relative;max-width:100%;">'

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0">';
	htmlDinamico+='			<img id="p'+numero+'ico6" src="assets/images/humedad.png"  style="height:50%; ">';
	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-8 col-sm-8 col-xs-8" style="height:100%;padding:0;margin:0;">';
	
	htmlDinamico+='			<div class="row" style="height:30%;">';
	htmlDinamico+='				<label id="p'+numero+'h1" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+humedadMax+'% Máx.</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='			<div class="row" style="height:50%;">';
	htmlDinamico+='				<label id="p'+numero+'h2" style="height: 100%; font-size: 2vh; vertical-align:top; ">'+humedadMin+'% Min.</label>';
	htmlDinamico+='			</div>';

	htmlDinamico+='		</div>';

	htmlDinamico+='		<div class="col-md-2 col-sm-2 col-xs-2" style="height:100%;padding:0;">'	
	htmlDinamico+='			<button id="p'+numero+'1b6" class="boton btn" style="background:transparent;height:50%;position:relative;">';
	htmlDinamico+='				<img src="assets/images/edit.png" alt="Responsive image" style="height:100%;">'
	htmlDinamico+='			</button>'
	htmlDinamico+='		</div>';

	htmlDinamico+='	</div>';


	htmlDinamico+='</a>';



	
	$( "#contenedor" ).append( htmlDinamico );
	

}

function crearIndicador(id){
	var htmlDinamico="";
	htmlDinamico+='<li id="'+id+'" onclick="moveScroll2('+id+')" data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>'
	$( "#indicators" ).append( htmlDinamico );
}

var total = 4

for(var i=0; i<total;i++){
	if(i%3==0)
		crearPanel('1','panel1','germinacion',30,'08:00 AM','02:00 PM',28,22,10,100,10,50)
	else if(i%3==1)
		crearPanel('2','panel2','plantula',20,'09:00 AM','03:00 PM',20,33,20,90,15,45)
	else
		crearPanel('3','panel3','vegetativo',10,'10:00 AM','04:00 PM',18,12,30,80,20,43)

	crearIndicador(i+1)

}

// 4 --> 850
// 6 --> 1260 



crearPanelVacio()


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
    	cancelar()





	}



});

$(document).on("click", ".ok", function(e) {

	var clase_boton = button_pressed.parent().parent().attr('class')

	switch(clase_boton){

		case 'row third':
			button_pressed.parent().parent().children('div').children('label').html($('#valor').html() + ' Días')
			break;	

		case 'row fourth':


		
			button_pressed.parent().find('label:eq(0)').html($('#valor1').children('div').children('.boton_input.hora').html() + ':' + $('#valor2').children('div').children('.boton_input.min').html() + ' '+ $('#valor3').children('div').children('.boton_input.ampm').html())
			button_pressed.parent().find('label:eq(1)').html($('#valor4').children('div').children('.boton_input.hora').html() + ':' + $('#valor5').children('div').children('.boton_input.min').html() + ' '+$('#valor6').children('div').children('.boton_input.ampm').html())
			break;

		case 'row fifth':
			button_pressed.parent().find('label:eq(0)').html($('#valor2').children('div').children('.boton_input.min').html() + '° C')
			button_pressed.parent().find('label:eq(1)').html($('#valor5').children('div').children('.boton_input.min').html() + '° C')
			break;
		
		case 'row sixth':
			button_pressed.parent().find('label:eq(0)').html($('#valor2').children('div').children('.boton_input.min').html() + '% Min.')
			button_pressed.parent().find('label:eq(1)').html($('#valor5').children('div').children('.boton_input.min').html() + ' ml.')
			break;

		case 'row seventh':
			button_pressed.parent().find('label:eq(0)').html($('#valor2').children('div').children('.boton_input.min').html() + '% Máx.')
			button_pressed.parent().find('label:eq(1)').html($('#valor5').children('div').children('.boton_input.min').html() + '% Min.')
			break;
	}	



	cancelar()

});

$(document).on("click", ".button", function(e) {

	$('.boton').css("z-index","4")
 	$(".row").css("z-index","4")
 	$(".edit").css("z-index","4")

	var clase_boton = button_pressed.parent().parent().attr('class')

	$('#unidad_1').css('display','none')
	$('#unidad_2').css('display','none')

	$('#valor1').css("visibility",'visible')
	$('#valor2').css("visibility",'visible')
    $('#valor3').css("visibility",'visible')

    $('#valor4').css("visibility",'visible')
	$('#valor5').css("visibility",'visible')
    $('#valor6').css("visibility",'visible')
	


	switch(clase_boton){
		case 'row third':

			var urlAbsolute = "assets/images/clock.png";
			$('#icon').attr("src", urlAbsolute)

			document.getElementById('set_period').style.display='block'	
			$('.boton').css("z-index","4")
		 	$(".row").css("z-index","4")
			$('#valor').html(parseInt(button_pressed.parent().parent().children('div').children('label').text(),10))
			
			break;

		case 'row fourth':
			console.log(button_pressed.parent().parent().children('div'))
			var hora_inicio = button_pressed.parent().children('div').children('div:eq(0)').children('label').html()
			var hora_termino = button_pressed.parent().children('div').children('div:eq(1)').children('label').html()


			document.getElementById('set_hor').style.display='block';


			$('#setting').html("Horario luz");
			$('#set1').html("Encendido");
			$('#set2').html("Apagado");
			$('.boton').css("z-index","4");
		 	$(".row").css("z-index","4");

		 	var hora = hora_inicio.split(':')
		 	var formato = hora[1].split(' ')

		 	$('#valor1').children('div:eq(1)').children('label').html(hora[0])
		 	$('#valor2').children('div:eq(1)').children('label').html(formato[0])
		 	$('#valor3').children('div:eq(1)').children('label').html(formato[1])
		 	
		 	hora = hora_termino.split(':')
		 	formato = hora[1].split(' ')

		 	$('#valor4').children('div:eq(1)').children('label').html(hora[0])
		 	$('#valor5').children('div:eq(1)').children('label').html(formato[0])
		 	$('#valor6').children('div:eq(1)').children('label').html(formato[1])
		 	
			break;

		case 'row fifth':

			var maxTemp = button_pressed.parent().children('div').children('div:eq(0)').children('label').html()
			var minTemp = button_pressed.parent().children('div').children('div:eq(1)').children('label').html()
			
			maxTemp = maxTemp.split('°')
			minTemp = minTemp.split('°')

			$('#valor2').children('div:eq(1)').children('label').html(maxTemp[0])
			$('#valor5').children('div:eq(1)').children('label').html(minTemp[0])

			var urlAbsolute = 'assets/images/temperature.png';
            $('#setting').html("Temperatura")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Máxima")
            $('#set2').html("Minima")

            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')

            var unidades = $('#valor3').children()[1]
            
            $('#unidad_1').css('display','block')
            $('#unidad_1').css('position','relative')
            $('#unidad_1').css('z-index','1005')
            $('#unidad_1').html('° C')
            $('#unidad_1').css("visibility",'visible')
            
            $('#unidad_2').css('display','block')
            $('#unidad_2').css('position','relative')
            $('#unidad_2').css('z-index','1005')
            $('#unidad_2').html('° C')
            $('#unidad_2').css("visibility",'visible')
            
			
			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;

		case 'row sixth':

			var porcentaje = button_pressed.parent().children('div').children('div:eq(0)').children('label').html()
			var riego = button_pressed.parent().children('div').children('div:eq(1)').children('label').html()

			porcentaje = porcentaje.split('%');
			riego = riego.split(' ')
			
			$('#valor2').children('div:eq(1)').children('label').html(porcentaje[0])
			$('#valor5').children('div:eq(1)').children('label').html(riego[0])
			

			var urlAbsolute = 'assets/images/riego.png';
            $('#setting').html("Riego")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Porcentaje")
            $('#set2').html("Riego Mínimo")


            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')

            $('#unidad_1').css('display','block')
            $('#unidad_1').css('position','relative')
            $('#unidad_1').css('z-index','1005')
            $('#unidad_1').html(' %')
            $('#unidad_1').css("visibility",'visible')
			
			$('#unidad_2').css('display','block')
            $('#unidad_2').css('position','relative')
            $('#unidad_2').css('z-index','1005')
            $('#unidad_2').html(' ml.')
            $('#unidad_2').css("visibility",'visible')

			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;

		case 'row seventh':

			var humedadMax = button_pressed.parent().children('div').children('div:eq(0)').children('label').html()
			var humedadMin = button_pressed.parent().children('div').children('div:eq(1)').children('label').html()

			humedadMax = humedadMax.split('%')
			humedadMin = humedadMin.split('%')

			$('#valor2').children('div:eq(1)').children('label').html(humedadMax[0])
			$('#valor5').children('div:eq(1)').children('label').html(humedadMin[0])
			

			var urlAbsolute = 'assets/images/humedad.png';
            $('#setting').html("Humedad")

            $('#icon').attr("src", urlAbsolute)

            $('#set1').html("Máxima")
            $('#set2').html("Minima")

            $('#valor1').css("visibility",'hidden')
            $('#valor3').css("visibility",'hidden')


            $('#unidad_1').css('display','block')
            $('#unidad_1').css('position','relative')
            $('#unidad_1').css('z-index','1005')
            $('#unidad_1').html(' %')
            $('#unidad_1').css("visibility",'visible')
			
			$('#unidad_2').css('display','block')
            $('#unidad_2').css('position','relative')
            $('#unidad_2').css('z-index','1005')
            $('#unidad_2').html(' %')
            $('#unidad_2').css("visibility",'visible')
			
			$('#valor4').css("visibility",'hidden')
            $('#valor6').css("visibility",'hidden')

			document.getElementById('set_hor').style.display='block';
			break;



	}

});

$(document).on("click", ".boton", function(e) {

	$(".edit").css("z-index","4")
	$("#selectProgram").css("z-index","4")


	button_pressed = $(this)

	var elem = $("#contenedor");

	var scroll = $('#contenedor').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth

	
	
	$('#contenedor').scrollLeft($('#'+$(this).parent().parent().parent().attr('id'))[0].offsetLeft-(anchoPantalla/100));
	
	var coordinates = $(this)[0].getBoundingClientRect()

	var $elem = $(this);

	document.getElementById('light2').style.display='block';



	$("#light").css({top: coordinates.top, left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	

	$("#light2").css({top: (coordinates.top - document.getElementById('light2').getBoundingClientRect().height*0.97), left: (coordinates.left-document.getElementById("blackL").getBoundingClientRect().width), position:'absolute'});
	document.getElementById('light2').style.display='none';
	$elem.css("z-index","1002");
	$(this).parent().parent().css("z-index","1002");

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

		cancelar();
    	document.getElementById('fade').style.display='none';
    	document.getElementById('light').style.display='none';
    	$elem.css("z-index","4");
    	$(this).parent().css("z-index","4");




	}


});


function cancelar(){
	$(".edit").css("z-index","4")
	$("#selectProgram").css("z-index","4")

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
}


$(document).on("click", ".cancel", function(e) {

	cancelar();

});



$(document).on("click", "#fade", function(e) {

	$(".edit").css("z-index","4")
	$("#selectProgram").css("z-index","4")
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
$('#1').css("background","white");

$('#contenedor').scroll(function(e) {

	var elem = $("#contenedor");

	var scroll = $('#contenedor').scrollLeft();

	var anchoPantalla = elem[0].scrollWidth

	var pixeles=(anchoPantalla/(total+1));


	$('.active').css("background","transparent");

	for (var i=0;i<total+1;i++){
		
		var panel=i+1;

		if (scroll>= (pixeles*panel - (pixeles)) && scroll <= pixeles*panel) {
			$('#'+panel).css("background","white");
		}
	}
	/*
	for (var i=0;i<total;i++){
		
		var panel=i+1;
		
		if (scroll >= (anchoPantalla/total)*(panel) && scroll <= (anchoPantalla/total)*1.9*(panel)) {
			$('#'+panel).css("background","white");	
		}
	}

	
	
	1047 -> 4

	if(scroll < anchoPantalla/total){
		$('#1').css("background","white");
		$('#2').css("background","transparent");
		$('#3').css("background","transparent");
	}

    else if (scroll >=anchoPantalla/total && scroll <= (anchoPantalla/total)*1.9 ){

        $('#1').css("background","transparent");
		$('#2').css("background","white");
		$('#3').css("background","transparent");
    }

	else{

		$('#1').css("background","transparent");
		$('#2').css("background","transparent");
		$('#3').css("background","white");

	} */   
});



function moveScroll2(pos) {

	var elem = $("#contenedor");

	var scroll = $('#contenedor').scrollLeft();
	var anchoPantalla = elem[0].scrollWidth;

	

	//console.log(total)

	//
	/*

	switch (pos){
		case 1:

			$('#1').css("background","white");
			$('#2').css("background","transparent");
			$('#3').css("background","transparent");

			$('#contenedor').scrollLeft($('#panel1')[0].offsetLeft-(anchoPantalla/100));

			break;

		case 2:
			$('#1').css("background","transparent");
			$('#2').css("background","white");
			$('#3').css("background","transparent");

			$('#contenedor').scrollLeft($('#panel2')[0].offsetLeft-(anchoPantalla/100));
			break;

		case 3:

			$('#1').css("background","transparent");
			$('#2').css("background","transparent");
			$('#3').css("background","white");

			$('#contenedor').scrollLeft($('#panel3')[0].offsetLeft-(anchoPantalla/100));
			break;
	}



	*/
	

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

  
  	if (parseInt(hora,10)<12) {
  		if(parseInt(hora,10) + 1<10 && parseInt(hora,10) + 1>0){
    		$(this).parent().parent().children("div").children('.boton_input.hora').html('0'+ (parseInt(hora, 10) + 1));
    	}

    	else{
    		$(this).parent().parent().children("div").children('.boton_input.hora').html(parseInt(hora, 10) + 1);	
    	}
	}	
  });

  $('.menos_hora').on('click', function() {

  	var hora = $(this).parent().parent().children("div").children(".boton_input.hora").html()

  	if (parseInt(hora,10)>1) {
    	if(parseInt(hora,10) - 1<10 && parseInt(hora,10) - 1>0){
    		$(this).parent().parent().children("div").children('.boton_input.hora').html('0'+ (parseInt(hora, 10) - 1));
    	}

    	else{
    		$(this).parent().parent().children("div").children('.boton_input.hora').html(parseInt(hora, 10) - 1);	
    	}
    }
  });
})(jQuery);




(function ($) {


  $('.mas_min').on('click', function(e) {

  	var min = $(this).parent().parent().children("div").children(".boton_input.min").html()

  	var clase_boton = button_pressed.parent().parent().attr('class')
  	
  	switch (clase_boton){
  		

  		case 'row fourth':

  			if (min<59) {
		  		if(parseInt(min,10) + 1<10){
		    		$(this).parent().parent().children("div").children('.boton_input.min').html('0'+ (parseInt(min, 10) + 1));
				}

				else{
		    		$(this).parent().parent().children("div").children('.boton_input.min').html(parseInt(min, 10) + 1);	
		    	}
			}

  			break;

  		case 'row fifth':
  			if(parseInt(min,10) + 1<10 && parseInt(min,10) + 1>0){
		    	$(this).parent().parent().children("div").children('.boton_input.min').html('0'+ (parseInt(min, 10) + 1));
			}

			else{
	    		$(this).parent().parent().children("div").children('.boton_input.min').html(parseInt(min, 10) + 1);	
	    	}
  			break;


  		case 'row sixth':
  			var variable = parseInt($(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html());
  			
  			

  			if(e.target.id == 'sumar'){
  				if(variable + 1 <=100){
		  			if (variable + 1 < 10){
		  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html('0'+ (variable+ 1))
		  			}

		  			else{
		  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html(variable+ 1)
		  			}
	  			}

	  			break;
  			}

  			else if(e.target.id == 'sumar2'){

  				if (variable + 1 < 10){
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html('0'+ (variable+ 1))
	  			}

	  			else{
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html(variable+ 1)
	  			}

	  			break;

  			}

  		case 'row seventh':

  			var variable = parseInt($(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html());

  			if(variable + 1 <=100){
	  			if (variable + 1 < 10){
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html('0'+ (variable+ 1))
	  			}

	  			else{
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html(variable+ 1)
	  			}
  			}

	  		break;





  	}
  
  	
  });

	$('.menos_min').on('click', function() {

  	var min = $(this).parent().parent().children("div").children(".boton_input.min").html()

  	var clase_boton = button_pressed.parent().parent().attr('class')
  	
  	switch (clase_boton){
  		

  		case 'row fourth':

  			if (min<59 && min >0) {
		  		if(parseInt(min,10) - 1<10){
		    		$(this).parent().parent().children("div").children('.boton_input.min').html('0'+ (parseInt(min, 10) - 1));
				}

				else{
		    		$(this).parent().parent().children("div").children('.boton_input.min').html(parseInt(min, 10) - 1);	
		    	}
			}

  			break;

  		case 'row fifth':
  			if(parseInt(min,10) - 1<10 && parseInt(min,10) - 1>0){
		    	$(this).parent().parent().children("div").children('.boton_input.min').html('0'+ (parseInt(min, 10) - 1));
			}

			else{
	    		$(this).parent().parent().children("div").children('.boton_input.min').html(parseInt(min, 10) - 1);	
	    	}
  			break;


  		case 'row sixth':
  			var porcentaje = parseInt($(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html())//parseInt(button_pressed.parent().children('div').children('div.row:eq(0)').children('label').html(),10)
  			var riego = parseInt(button_pressed.parent().children('div').children('div.row:eq(1)').children('label').html(),10)
  			//console.log(button_pressed.parent().children('div').children('div.row:eq(0)').children('label').html())
  			//console.log(button_pressed.parent().children('div').children('div.row:eq(1)').children('label').html())

  			console.log(porcentaje)
  			if(porcentaje - 1 >= 0){
	  			if (porcentaje - 1 < 10){
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html('0'+ (porcentaje- 1))
	  			}

	  			else{
	  				$(this).parent().parent().children("div:eq(1)").children('.boton_input.min').html(porcentaje- 1)
	  			}
  			}



  			/*

  			if(parseInt(min,10) - 1<10 && parseInt(min,10) - 1>0){
		    	$(this).parent().parent().children("div").children('.boton_input.min').html('0'+ (parseInt(min, 10) - 1));
			}

			else{
	    		$(this).parent().parent().children("div").children('.boton_input.min').html(parseInt(min, 10) - 1);	
	    	}*/
  			break;


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


