function verificarDado(dado) {
    if (!isNaN(dado)) {
        return 'Number';
    }
    return 'String';
}

function realizarVerificacao(){
    let continuar = true;

    while(continuar){

        let input = prompt("Informe um dado (pode ser um número, texto, etc.)");

        if(input === null){
            continuar = false;
            break;
        }
        
        let verificarTipoDado = confirm("Deseja verificar o tipo de dado que você enviou ?");

        if(verificarTipoDado){
            let tipoDado = verificarDado(input);

            alert (`O tipo de dado é:  ${tipoDado} `);
        }
        else{
            alert("Obrigado por visitar esta página.");
        }
    }

    alert("Verificação encerrada.");
}

realizarVerificacao();