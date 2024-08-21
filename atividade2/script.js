function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
        alert(`O número ${numero} não é primo.`);
        return;
    }
    if (numero === 2) {
        alert(`O número ${numero} é primo.`);
        return;
    }
    if (numero % 2 === 0) {
        alert(`O número ${numero} não é primo.`);
        return;
    }
    
    // Verifica divisibilidade por números ímpares de 3 até a raiz quadrada do número
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            alert(`O número ${numero} não é primo.`);
            return;
        }
    }
    
    alert(`O número ${numero} é primo.`);
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
            verificarNumeroPrimo(numero)
        }
        else{
            alert("Por favor, informe um número inteiro positivo");
        }
    }
    
    alert("Verificação encerrada.");
    
}

realizarVerificacao();