function VerificarPeriodo(){
    let periodo = document.getElementById("periodo").value 
    if(periodo == "m"){
        document.getElementById("resultado").innerHTML = "Matutino"
    }else if(periodo == "v"){
        document.getElementById("resultado").innerHTML = "Vespertino"
    }else if(periodo == "n"){
        document.getElementById("resultado").innerHTML = "Noturno"
    }else{
        document.getElementById("resultado").innerHTML = "Período inválido"
    }
}

