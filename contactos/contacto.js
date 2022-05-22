$(document).ready(function() {        
    $("#alertSI").hide();
    $("#alertNO").hide();
    $("#form1").submit(function(e){
       e.preventDefault();    
       nombre = $.trim($("#nombre").val());
       correo = $.trim($("#correo").val());
       mensaje = $.trim($("#mensaje").val());
       if(nombre.length>0 && correo.length>0 && mensaje.length>0){           
           $("#alertSI").fadeTo(2000, 500).slideUp(500, function() {
             $("#alertSI").slideUp(500);
           });        
       }else{
           $("#alertNO").fadeTo(2000, 500).slideUp(500, function() {
             $("#alertNO").slideUp(500);
           });
       }
       });   
});