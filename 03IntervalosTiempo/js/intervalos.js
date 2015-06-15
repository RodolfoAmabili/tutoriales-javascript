//LIBRERIAS

//VARIABLES Y OBJETOS
var unaVez, muchasVeces;

//FUNCIONES
function reloj()
{
	var tiempo = document.querySelector("#tiempo");
	tiempo.innerHTML = Date();
}

function ejecutarIntervalos(evento)
{
	//alert("has pulsado un botón");
	//alert(evento.target.id);
	//console.log(evento);

	var queBoton = evento.target.id;

	switch(queBoton)
	{
		case "set-timeout":
			unaVez = setTimeout("reloj()",2000);
			break;
		case "clear-timeout":
			clearTimeout(unaVez);
			break;
		case "set-interval":
			muchasVeces = setInterval("reloj()",1000);
			break;
		case "clear-interval":
			clearInterval(muchasVeces);
			break;
	}
}

function intervalosTiempo(evento)
{
	//alert("funciona");
	//console.log(evento);
	var sT = document.getElementById("set-timeout");
	var cT = document.getElementById("clear-timeout");
	var sI = document.getElementById("set-interval");
	var cI = document.getElementById("clear-interval");

	sT.onclick = ejecutarIntervalos;
	cT.onclick = ejecutarIntervalos;
	sI.onclick = ejecutarIntervalos;
	cI.onclick = ejecutarIntervalos;
}

//EVENTOS
window.onload = intervalosTiempo;