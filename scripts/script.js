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


function Plaga (nombre, causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionOrganica, dosificacionQuimica){
    this.nombre = nombre;
    this.causas = causas;
    this.efectos = efectos;
    this.solucionOrganica = solucionesOrganicas;
    this.solucionesQuimicas = solucionesQuimicas;
    this.dosificacionOrganica = dosificacionOrganica;
    this.dosificacionQuimica = dosificacionQuimica;
}

let plaga = []

plaga.push(new Plaga("cochinilla", "Estres o planta debil", "La planta no puede seguir desarrollandose y muere", "Jabón Potasico y/o Aceite neem", "Mamboreta D", "5ml/l","2ml/l"));
plaga.push(new Plaga ("pulgon", "Exceso de nitrogeno", "Se alimenta de la salvia de la planta y esta no se puede desarrollar", "Jabón Potasico y/o Aceite neem", "Mamboreta D", "5ml/l","2ml/l"));
plaga.push(new Plaga("hormigas", "Hormiguero cerca", "Come las hojas de las plantas, dependiendo el tamaño de la planta puede generar que no logre hacer la fotosíntesis y morirá", "Tierra de diatomea, preparado de ají picante o arroz molido", "Hortal", "Dos cucharas por litro de diatomea por litro de agua o polvorear al rededor de la planta, 5ml de solucion picante por litro","5ml/l"));
plaga.push(new Plaga("araña roja", "altas temperaturas", "Se alimenta de celulas de la planta a una velocidad voraz, debilitandola y por ultimo matandola", "Jabón Potásico y/o Aceite de neem", "Mamboreta ABA", "5ml/l", "1ml/l"));



plaga.forEach(el => console.log(el))

/*
for (let plaga of plaga) {
    console.log(Plaga.nombre)
}*/

/*
var cochinilla = new Plaga("Estres o planta debil", "La planta no puede seguir desarrollandose y muere", "Jabón Potasico y/o Aceite neem", "Mamboreta D", "5ml/l","2ml/l");

var especificacion = prompt("Que información necesitas sobre la cochinilla?");
console.log (cochinilla[especificacion.toLowerCase()]);
while (!cochinilla[especificacion]){ console.log("Te podemos hablas sobre causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionesOrganicas y dosificacionesQuimicas");
console.log(cochinilla[especificacion]);
especificacion = prompt ("Que información necesitas sobre la cochinilla?");
console.log (cochinilla[especificacion.toLowerCase()]); } 
//console.log (cochinilla);

var pulgon = new Plaga("Exceso de nitrogeno", "Se alimenta de la salvia de la planta y esta no se puede desarrollar", "Jabón Potasico y/o Aceite neem", "Mamboreta D", "5ml/l","2ml/l");

var especificacion = prompt("Que información necesitas sobre el pulgón?");
console.log (pulgon[especificacion.toLowerCase()]);
while (!pulgon[especificacion]){ console.log("Te podemos hablas sobre causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionesOrganicas y dosificacionesQuimicas");
console.log(pulgon[especificacion]);
especificacion = prompt ("Que información necesitas sobre el pulgón?");
console.log (pulgon[especificacion.toLowerCase()]); }  

var hormiga = new Plaga("Hormiguero cerca", "Come las hojas de las plantas, dependiendo el tamaño de la planta puede generar que no logre hacer la fotosíntesis y morirá", "Tierra de diatomea, preparado de ají picante o arroz molido", "Hortal", "Dos cucharas por litro de diatomea por litro de agua o polvorear al rededor de la planta, 5ml de solucion picante por litro","5ml/l");

var especificacion = prompt("Que información necesitas sobre la hormiga?");
console.log (hormiga[especificacion.toLowerCase()]);

while (!hormiga[especificacion]){ console.log("Te podemos hablas sobre causas, efectos, solucionesOrganicas, solucionesQuimicas, dosificacionesOrganicas y dosificacionesQuimicas");
console.log(hormiga[especificacion]);
especificacion = prompt ("Que información necesitas sobre la hormiga?");
console.log (hormiga[especificacion.toLowerCase()]); 
}*/




