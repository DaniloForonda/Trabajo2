var vec=["Diego","Maria","Jorge","Ana"];
console.log(vec);

var si=function()
{
	var i=0;
	var nom=document.getElementById("nom").value;
	var ul=vec.length-1; 
	while(i<vec.length)
	{
		if(nom==vec[i])
		{
			var ult=vec[ul];
			vec[ul]=vec[i];
			vec[i]=ult;
			vec.pop();
			console.log(vec);
			i=vec.length;
			document.getElementById("resp").value=nom+" fue eliminado correctamente";
			document.getElementById("nom").value="";
		}
		else
		{
			i=i+1;
			if (nom!=vec[i])
			{
				document.getElementById("resp").value=nom+" no está registrado";
			}
		}
	}
}

var ingresar=function()
{
	var nombre=document.getElementById("nombre").value;
	vec.push(nombre);
	console.log(vec);
	document.getElementById("nombre").value="";
}