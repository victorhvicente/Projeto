document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';

    contador();
});

function contador() {
    const contadorDiv = document.getElementById('div-contador');
    
    // Estilizando a div
    contadorDiv.style.width = '350px';
    contadorDiv.style.height = '500px';
    contadorDiv.style.display = 'flex';
    contadorDiv.style.flexDirection = 'column';
    contadorDiv.style.justifyContent = 'flex-start';
    contadorDiv.style.alignItems = 'center';
    contadorDiv.style.borderRight = '1px solid black';
    contadorDiv.style.borderBottom = '1px solid black';
    contadorDiv.style.boxShadow = '5px 5px 5px gray';

    const h1 = document.createElement('h1');
    const textoTitulo = document.createTextNode('Total');
    const divTotal = document.createElement('div');
    const divCampoResultado = document.createElement('div');

    divTotal.style.height = 'auto';
    divTotal.style.width = '100%';
    divTotal.style.display = 'flex';
    divTotal.style.flexDirection = 'column';
    divTotal.style.alignItems = 'center';
    divTotal.style.justifyContent = 'center';
    divTotal.style.paddingLeft = '80px';

    // Ajustes na divCampoResultado
    divCampoResultado.style.height = '30px';
    divCampoResultado.style.width = '100px';
    divCampoResultado.style.border = '2px solid black';
    divCampoResultado.style.borderRadius = '10px';
    divCampoResultado.style.padding = '12px';
    divCampoResultado.style.display = 'flex';
    divCampoResultado.style.alignItems = 'center';
    divCampoResultado.style.justifyContent = 'center';

    const resultadoTotalP = document.createElement('p');
    const resultadoTotal = document.createTextNode('0');
    resultadoTotalP.style.fontSize = '40px';

    resultadoTotalP.appendChild(resultadoTotal);

    divCampoResultado.appendChild(resultadoTotalP);

    const botaoReset = document.createElement('button');
    botaoReset.style.border = 'none';
    botaoReset.style.background = 'none';
    botaoReset.style.cursor = 'pointer';
    botaoReset.style.margin = '15px 20px';
    botaoReset.setAttribute('type', 'reset');
    botaoReset.setAttribute('id', 'botaoReset');

    const imagemReset = document.createElement('img');
    imagemReset.src = 'img/recarregar.png';
    imagemReset.style.width = '30px';
    imagemReset.style.height = '30px';

    botaoReset.appendChild(imagemReset);

    // adicionando funcionalidade para o botao reset
    botaoReset.addEventListener('click', () => {
        resultadoTotal.nodeValue = 0;
        resultadoTotalHomem.nodeValue = 0;
        resultadoTotalMulher.nodeValue = 0;
    });

    // Agrupando a divTotal e o botão na mesma linha
    const divTotalRecarregar = document.createElement('div');
    divTotalRecarregar.style.display = 'flex';
    divTotalRecarregar.style.background = 'red';
    divTotalRecarregar.style.width = '100%';
    divTotalRecarregar.style.justifyContent = 'space-between';
    divTotalRecarregar.style.alignItems = 'flex-start';
    divTotalRecarregar.appendChild(divTotal);
    divTotalRecarregar.appendChild(botaoReset);

    // Div para Homem/Mulher
    const divHomemMulher = document.createElement('div');
    divHomemMulher.style.display = 'flex';
    divHomemMulher.style.width = '100%';
    divHomemMulher.style.height = '250px';
    divHomemMulher.style.background = 'red';
    divHomemMulher.style.marginTop = '20px';

    // ---- Início DIV homem ---- //

    const divHomem = document.createElement('div');
    divHomem.style.width = '180px';
    divHomem.style.height = 'auto';
    divHomem.style.background = 'green';
    divHomem.style.display = 'flex';
    divHomem.style.flexDirection = 'column';
    divHomem.style.justifyContent = 'center';
    divHomem.style.alignItems = 'center';

    const imagemHomem = document.createElement('img');
    imagemHomem.src = 'img/homem.png';
    imagemHomem.style.width = '100px';
    imagemHomem.style.height = 'auto';
    divHomem.appendChild(imagemHomem);

    const divBotoesHomem = document.createElement('div');
    divBotoesHomem.style.display = 'flex';
    divBotoesHomem.style.marginTop = '15px';

    const botaoIncrementarHomem = document.createElement('button');
    botaoIncrementarHomem.style.border = 'none';
    botaoIncrementarHomem.style.background = 'none';
    botaoIncrementarHomem.style.cursor = 'pointer';

    const imagemIncrementarHomem = document.createElement('img');
    imagemIncrementarHomem.src = 'img/mais.png';
    imagemIncrementarHomem.style.width = '40px';
    imagemIncrementarHomem.style.height = '40px';

    botaoIncrementarHomem.appendChild(imagemIncrementarHomem);

    const botaoDecrementarHomem = document.createElement('button');
    botaoDecrementarHomem.style.border = 'none';
    botaoDecrementarHomem.style.background = 'none';
    botaoDecrementarHomem.style.cursor = 'pointer';

    const imagemDecrementarHomem = document.createElement('img');
    imagemDecrementarHomem.src = 'img/menos.png';
    imagemDecrementarHomem.style.width = '30px';
    imagemDecrementarHomem.style.height = '30px';
    botaoDecrementarHomem.appendChild(imagemDecrementarHomem);

    divBotoesHomem.appendChild(botaoIncrementarHomem);
    divBotoesHomem.appendChild(botaoDecrementarHomem);
    divHomem.appendChild(divBotoesHomem);

    const divTotalHomem = document.createElement('div');
    divTotalHomem.style.display = 'flex';
    divTotalHomem.style.justifyContent = 'center';
    divTotalHomem.style.alignItems = 'center';
    divTotalHomem.style.width = '120px';
    divTotalHomem.style.height = '60px';
    divTotalHomem.style.background = 'red';
    divTotalHomem.style.marginTop = '15px';
    divTotalHomem.style.borderRadius = '15px';

    const resultadoTotalHomemP = document.createElement('p');
    const resultadoTotalHomem = document.createTextNode('0');
    resultadoTotalHomemP.appendChild(resultadoTotalHomem);
    resultadoTotalHomemP.style.fontSize = '40px';

    divTotalHomem.appendChild(resultadoTotalHomemP);
    divHomem.appendChild(divTotalHomem);

    // Funcionalidades dos botões de incremento e decremento para Homem

    let contadorHomem = 0;

    botaoIncrementarHomem.addEventListener('click', () => {
        contadorHomem++;
        resultadoTotalHomem.nodeValue = contadorHomem;
        atualizarQuantidadeTotal();
    });

    botaoDecrementarHomem.addEventListener('click', () => {
        if(contadorHomem > 0){
            contadorHomem--;
            resultadoTotalHomem.nodeValue = contadorHomem;
            atualizarQuantidadeTotal();
        }
        
    });

    // ---- Fim DIV homem ---- //


    // ---- Início DIV mulher ---- //

    const divMulher = document.createElement('div');
    divMulher.style.width = '180px';
    divMulher.style.height = 'auto';
    divMulher.style.background = 'pink';
    divMulher.style.display = 'flex';
    divMulher.style.flexDirection = 'column';
    divMulher.style.justifyContent = 'center';
    divMulher.style.alignItems = 'center';

    const imagemMulher = document.createElement('img');
    imagemMulher.src = 'img/mulher.png';
    imagemMulher.style.width = '100px';
    imagemMulher.style.height = '100px';
    divMulher.appendChild(imagemMulher);

    const botoesMulher = document.createElement('div');
    botoesMulher.style.display = 'flex';
    botoesMulher.style.marginTop = '15px';

    const botaoIncrementarMulher = document.createElement('button');
    botaoIncrementarMulher.style.border = 'none';
    botaoIncrementarMulher.style.background = 'none';
    botaoIncrementarMulher.style.cursor = 'pointer';

    const imagemIncrementarMulher = document.createElement('img');
    imagemIncrementarMulher.src = 'img/mais.png';
    imagemIncrementarMulher.style.width = '40px';
    imagemIncrementarMulher.style.height = '40px';
    
    botaoIncrementarMulher.appendChild(imagemIncrementarMulher);
    botoesMulher.appendChild(botaoIncrementarMulher);

    const botaoDecrementarMulher = document.createElement('button');
    botaoDecrementarMulher.style.border = 'none';
    botaoDecrementarMulher.style.background = 'none';
    botaoDecrementarMulher.style.cursor = 'pointer';

    const imagemDecrementarMulher = document.createElement('img');
    imagemDecrementarMulher.src = 'img/menos.png';
    imagemDecrementarMulher.style.width = '30px';
    imagemDecrementarMulher.style.height = '30px';
    botaoDecrementarMulher.appendChild(imagemDecrementarMulher);
    botoesMulher.appendChild(botaoDecrementarMulher);
    divMulher.appendChild(botoesMulher);

    const divTotalMulher = document.createElement('div');
    divTotalMulher.style.display = 'flex';
    divTotalMulher.style.justifyContent = 'center';
    divTotalMulher.style.alignItems = 'center';
    divTotalMulher.style.width = '120px';
    divTotalMulher.style.height = '60px';
    divTotalMulher.style.background = 'red';
    divTotalMulher.style.marginTop = '15px';
    divTotalMulher.style.borderRadius = '15px';

    const resultadoTotalMulherP = document.createElement('p');
    const resultadoTotalMulher = document.createTextNode('0');

    resultadoTotalMulherP.style.fontSize = '40px';

    resultadoTotalMulherP.appendChild(resultadoTotalMulher);

    divTotalMulher.appendChild(resultadoTotalMulherP);
    divMulher.appendChild(divTotalMulher);

    // Funcionalidades dos botões de incremento e decremento para Mulher

    let contadorMulher = 0;

    botaoIncrementarMulher.addEventListener('click', () => {
        contadorMulher++;
        resultadoTotalMulher.nodeValue = contadorMulher;
        atualizarQuantidadeTotal();
    });

    botaoDecrementarMulher.addEventListener('click', () => {
        if(contadorMulher > 0){
            contadorMulher--;
            resultadoTotalMulher.nodeValue = contadorMulher;
            atualizarQuantidadeTotal();
        }
    });

    // ---- Fim DIV mulher ---- //

    // Criado uma função para somar os dois contadores Homem e Mulher
    // e atualiza automaticamente o valor total

    function atualizarQuantidadeTotal(){
        let somaTotal = contadorHomem + contadorMulher;
        resultadoTotal.nodeValue = somaTotal;    
    }
   

    divHomemMulher.appendChild(divHomem);
    divHomemMulher.appendChild(divMulher);

    // Estrutura do DOM
    h1.appendChild(textoTitulo);
    divTotal.appendChild(h1);
    divTotal.appendChild(divCampoResultado);

    // Adicionando ao contadorDiv
    contadorDiv.appendChild(divTotalRecarregar); // Adiciona a linha com divTotal e botão
    contadorDiv.appendChild(divHomemMulher); // Adiciona a divHomemMulher abaixo
}



