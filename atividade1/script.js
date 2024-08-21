function verificarNumeroImparPar(numero){

    if(numero % 2 == 0){
        alert(`O número ${numero} é Par.`); 
        return;
    }
    else{
        alert(`O número ${numero} é Ímpar`);
        return;
    }

}


function realizarVerificacao(){

    let continuar = true;

    while(continuar) {
        let input = prompt("Informe um número inteiro positivo");

        // Se o usuário clicar em "Cancelar", `input` será `null`
        if (input === null) {
            continuar = false;
            break;
        }

        let numeroDoInupt = parseInt(input);

        if(numeroDoInupt >= 0){
            verificarNumeroImparPar(numeroDoInupt);
        }
        else{
            alert("Por favor, informe um número inteiro positivo");
        }
    }

    alert("Verificação encerrada.");
}

realizarVerificacao();

