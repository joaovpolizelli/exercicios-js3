function VerificarDia(){
    let dia = document.getElementById("dia").value 
    if(dia == "1"){
        document.getElementById("resultado").innerHTML = "Segunda-feira"
    }else if(dia == "2"){
        document.getElementById("resultado").innerHTML = "Terça-Feira"
    }else if(dia == "3"){
        document.getElementById("resultado").innerHTML = "Quarta-Feira"
    }else if(dia == "4"){
        document.getElementById("resultado").innerHTML = "Quinta-Feira"
    }else if(dia == "5"){
        document.getElementById("resultado").innerHTML = "Sexta-Feira"
    }else if(dia == "6"){
        document.getElementById("resultado").innerHTML = "Sábado"
    }else if(dia == "7"){
        document.getElementById("resultado").innerHTML = "Domingo"
    }
    else{
        document.getElementById("resultado").innerHTML = "Valor inválido"
    }
}

