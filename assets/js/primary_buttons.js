
ayuda = document.getElementById("mySidenav");
notificaciones = document.getElementById("mySidenav2");
     

function abrirAyuda() {

    if(ayuda.style.width== '' || ayuda.style.width == "0px"){
      
      if (notificaciones.style.width=="300px"){
        notificaciones.style.width="0px";
      }

      ayuda.style.width = "250px";
    }

    else{

      ayuda.style.width="0px";
    }

    
}

function abrirNotificaciones(){

    if(notificaciones.style.width== '' || notificaciones.style.width == "0px"){
      
      if (ayuda.style.width=="250px") {
        ayuda.style.width="0px";
      }
      
      notificaciones.style.width = "300px";
    }

    else{
      notificaciones.style.width="0px";
    }          

}

function goHome(){
  location.href="index.html"  
}


function cerrarBarras() {

  if (ayuda.style.width=="250px") {
    document.getElementById("mySidenav").style.width = "0px";
  }

  if (notificaciones.style.width=="300px") {
    document.getElementById("mySidenav2").style.width = "0px";
  }        

}


