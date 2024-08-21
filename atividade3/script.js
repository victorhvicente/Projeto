function fatorial(numero){

    if(numero == 0 || numero == 1){
        
        alert(`Fatorial de ${numero} é 1`);
        return;
    }

    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial = fatorial * i;
    }

    alert(`Fatorial de ${numero} é ${fatorial}`);
    return;
}

function realizarVerificacao(){

    let continuar = true;

    while(continuar){

        let input = prompt("Informe um número inteiro positivo");

        if(input === null){
            continuar = false;
            break;
        }

        let numero = parseInt(input);

        if(numero > 0){
            fatorial(numero);
        }
        else{
            alert("Por favor, informe um número inteiro positivo");
        }
    }

    alert("Verificação encerrada.");
}

realizarVerificacao();