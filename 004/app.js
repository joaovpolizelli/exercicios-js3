function VerificarDia()
{
    let dia = document.getElementById('dia').value 
    dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")

    ("<h1> Hoje é " + dayName[dia.getDay() ] )    
    document.getElementById("resultado").innerHTML = dayName[d.getDay()];
}
