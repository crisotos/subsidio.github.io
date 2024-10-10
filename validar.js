function subsidio()
{
	var s;
	var e=Number(document.getElementById('edad').value);
	
	if(e>=18)
		s=50000;
	else
		s=100000;
	
	document.getElementById('subsidio').value=s;
}

function limpiar()
{
	document.getElementById('edad').value="";
	document.getElementById('subsidio').value="";
}
