function tienenPlagas(){
    var tienenPlagas 

    tienenPlagas = prompt ("Cuantas plagas tienen??")
    while(tienenPlagas <0 ){
    console.log("Repuesta no válida")
    tienenPlagas = prompt ("Cuantas plagas tienen??")
    }

    if ( tienenPlagas > 0){
        var cuales = prompt ("Cuales?")
        console.log ("No te preocupes te vamos a proponer soluciones para " + cuales + "  y explicarte como aplicarlas!")

        var solucionOrganica = true
        

        if (solucionOrganica){
            console.log ("Las opciones de preparados órganicos para combtair " + cuales + " son los siguientes")
        }

    }

    else{
        console.log("Genial! Segui disfrutando!")
    }
}



   var nroPlantas = parseInt( prompt ("Cuantas plantas tenés?"));
    
    if (nroPlantas > 0){
        var plagas = tienenPlagas();
   
    }
    else{
        console.log("Deberías empezar a tener plantas en tu casa!")
    }

function Plaga (causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionOrganica, dosificacionQuimica){
    this.causas = causas;
    this.efectos = efectos;
    this.solucionOrganica = solucionesOrganicas;
    this.solucionesQuimicas = solucionesQuimicas;
    this.dosificacionOrganica = dosificacionOrganica;
    this.dosificacionQuimica = dosificacionQuimica;
}

var cochinilla = new Plaga("Estres o planta debil", "La planta no puede seguir desarrollandose y muere", "Jabón Potasico y/o Aceite neem", "Mamboreta D", "5ml/l","2ml/l");

var especificacion = prompt("Que información necesitas sobre la cochinilla?");
if (!cochinilla[especificacion]) console.log("Te podemos hablas sobre causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionesOrganicas y dosificacionesQuimicas");
console.log(cochinilla[especificacion]);
especificacion = prompt ("Que información necesitas sobre la cochinilla?");
console.log (cochinilla[especificacion]);
//console.log (cochinilla);


   

