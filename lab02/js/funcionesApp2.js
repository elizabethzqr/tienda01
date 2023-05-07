function fnValidar06()
{
	var xTurno = document.getElementById("lstTurno").value;
	if(xTurno=="")
	{
		alert("Seleccione TURNO...");
		return false;
	}
	
	var xResult = document.getElementById("txtResult").value;
	if(xResult=="" || xResult==0)
	{
		alert("Revice... Resultado ¿0 o VACIO?)");
		return false;
	}
	
	/// Caso contrario ///
	return true;
}

function verConteoGenero(genero, mtzAlumnos)
{
	contadorGenero = 0;
	if(mtzAlumnos.length > 0){
		mtzAlumnos.forEach(element => {
			if(element[4]==genero){
				contadorGenero++;
			}
		});

		//Por que es equivalente
		/*
		for (var i = 0; i < mtzAlumnos.length; i++) {
			mtzGenero = mtzAlumnos[i][3];	//Turno
			if(mtzGenero == genero){
				contadorGenero++;
			}
		}
		*/
	}
	document.getElementById("txtResult").value = contadorGenero;
}