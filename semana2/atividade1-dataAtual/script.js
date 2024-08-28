document.addEventListener("DOMContentLoaded", ()=>{
    
    let data = new Date();
    let diaAtual = data.getDate();
    let anoAtual = data.getFullYear();

    let frase = `${DiaSemana()}, ${diaAtual} de ${Mes()} de ${anoAtual}`;
    document.getElementById("dataAtual").innerHTML = frase;
})

function DiaSemana() {
    let data = new Date(); 
    let diaSemana = data.getDay();

    switch(diaSemana) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
    }
}

function Mes(){
    let mes = new Date();
    let mesAno = mes.getMonth();

    switch(mesAno) {
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";   
    }
}





