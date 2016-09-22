function revisar(elemento) {
    if (elemento.value==""){

      if( elemento.name=="name"){
        
      }

      else if(elemento.name=="mensaje"){
        alert("El campo de mensaje esta vacio");
      }

    } 
}

function revisaremail(elemento) {
    if (elemento.value!=""){
        var dato = elemento.value;
        var expresion = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
        if (!expresion.test(dato)) {

            alert("Ingrese una direccion de correo valida");
            return false;

        }
        else{
          return true;
        } 
     }
    else{
      alert("Ingrese una direccion de correo electronico");
      return false;
    }
}


function validar(form){ 

  
  if(form.name.value=="") { //Si este campo está vacío
    alert('No has escrito tu nombre'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(!revisaremail(form.email)){
    return false;
  }
  
  if(form.email.value=="") { //Si este campo está vacío
    alert('No has escrito tu e-Mail'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  if(form.mensaje.value=="") { //Si este campo está vacío
    alert('No has escrito el mensaje'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
 
  return true; // Si esta todo bien, devolvemos Ok, positivo
}
   





