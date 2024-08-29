document.addEventListener("DOMContentLoaded", ()=>{

    function HoraAtual(){
        let agora = new Date();
    
        let hora = agora.getHours();
        let minuto = agora.getMinutes();
        let segundo = agora.getSeconds();
        
        return `${hora}:${minuto}:${segundo}`;
    }

    function atualizarHorario(){
        document.getElementById("hora").innerHTML = HoraAtual();
    }
    
    atualizarHorario();
    setInterval(atualizarHorario, 1000);

});



