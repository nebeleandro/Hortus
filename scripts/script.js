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



 
function Info(cantPlantas, plaga){
    this.cantPlantas=cantPlantas;
    this.plaga=plaga;
}

function calcularPrecio(event){

    console.log(event);

    // Pido los datos para el cálculo
    
    var cantPlantas= parseInt(document.getElementById("inputPlantas").value)
    var tipo = (document.getElementById("inputPlaga").value)

    console.log(cantPlantas)
    console.log(tipo)
    console.log(plagas[tipo])
   
    // Este es el cálculo de los litros

    var cantidadSv = cantPlantas / 30 + "l de preparado de agua más " + solucion(plagas[tipo]) + ". Las causas son: " + causa(plagas[tipo])
 
  

 
    var precio = document.getElementById("alert-calculo-precio")
    precio.innerText = cantidadSv;

    // Acá muestro la alerta

    document.getElementById("alert-calculo").className = "alert alert-warning alert-dismissible fade show"

    return Number.parseFloat(cantidadSv).toFixed(2);
}


function solucion(plaga){
    return plaga.solucionOrganica
}

function causa(plaga){
    return plaga.causas;
}

function validarCampo(event){

    console.log(event);

    var valor = event.target.value;

    if (valor == ""){
        event.target.className = "form-control is-invalid"
    } else {
        event.target.className = "form-control"
    }

}

let plagas = []

fetch('../scripts/const.json').then((res) => {
    res.json().then((data) =>{
        plagas = data
        console.log(plagas)
        })})


var cantPlantas = $("#inputPlantas")
var plaga = $("#inputPlagas")

$("#calcular").click(calcularPrecio);


$("#inputPlantas").blur(validarCampo)


$('.btn-close').click(function(){
    window.location.reload();
})


$('.aromaticas').hover(function(){
$('#infoClickArom').slideToggle()
})

$('.hortalizas').hover(function(){
    $('#infoClickHorta').slideToggle()
    })

$('.florales').hover(function(){
$('#infoClickFlor').slideToggle()
})

$('.frutales').hover(function(){
$('#infoClickFrut').slideToggle()
})
    
$('.arboles').hover(function(){
$('#infoClickArb').slideToggle()
})
    
$('.suculentas').hover(function(){
$('#infoClickSuc').slideToggle()
})
$('.amarilis').hover(function(){
$('#infoClickAma').slideToggle()
})
    
$('.montsera').hover(function(){
$('#infoClickMont').slideToggle()
})
    
$('.potus').hover(function(){
$('#infoClickPot').slideToggle()
})
    
$('.sanseveria').hover(function(){
$('#infoClickSans').slideToggle()
})
        
$('.croton').hover(function(){
$('#infoClickCrot').slideToggle()
})
        
$('.cala').hover(function(){
$('#infoClickCala').slideToggle()
})  