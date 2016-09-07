window.addEventListener("load", function() {
	var button = document.getElementById("calcular");
	button.addEventListener("click", function() {
		var ingresoSegundos = parseInt(document.getElementById("ingresoSegundos").value);
		
		var resultado = document.getElementById("resultado");
		setInterval(color,ingresoSegundos * 1000);
		
		function color(){ 
			document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16); 
			document.getElementById("ingresoSegundos").value="";
		}
		
	});
});

