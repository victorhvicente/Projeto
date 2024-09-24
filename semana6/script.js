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

    // Ajustes na divCampoResultado
    divCampoResultado.style.height = '20px';
    divCampoResultado.style.width = '100px';
    divCampoResultado.style.border = '2px solid black';
    divCampoResultado.style.borderRadius = '10px';
    divCampoResultado.style.padding = '12px';
    divCampoResultado.style.display = 'flex';
    divCampoResultado.style.alignItems = 'center';
    divCampoResultado.style.justifyContent = 'center';

    const textoResultado = document.createTextNode('Resultado: 0');
    divCampoResultado.appendChild(textoResultado);

    // Adicionando o botão com uma imagem de recarregamento da página
    const botaoRecarregar = document.createElement('button');
    botaoRecarregar.style.border = 'none';
    botaoRecarregar.style.background = 'none';
    botaoRecarregar.style.cursor = 'pointer';
    botaoRecarregar.style.margin = '15px 20px';
    botaoRecarregar.setAttribute('type', 'reset');
    botaoRecarregar.setAttribute('id', 'botaoRecarregar');

    const imagemRecarregar = document.createElement('img');
    imagemRecarregar.src = 'img/recarregar.png';
    imagemRecarregar.style.width = '30px';
    imagemRecarregar.style.height = '30px';

    botaoRecarregar.appendChild(imagemRecarregar);

    // Agrupando a divTotal e o botão na mesma linha
    const divTotalRecarregar = document.createElement('div');
    divTotalRecarregar.style.display = 'flex';
    divTotalRecarregar.style.background = 'red';
    divTotalRecarregar.style.width = '100%';
    divTotalRecarregar.style.justifyContent = 'space-between';
    divTotalRecarregar.style.alignItems = 'flex-start';
    divTotalRecarregar.appendChild(divTotal);
    divTotalRecarregar.appendChild(botaoRecarregar);

    // Div para Homem/Mulher
    const divHomemMulher = document.createElement('div');
    divHomemMulher.style.width = '100%';
    divHomemMulher.style.height = '250px';
    divHomemMulher.style.background = 'red';
    divHomemMulher.style.marginTop = '20px';

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
    imagemDecrementarHomem.style.width = '40px';
    imagemDecrementarHomem.style.height = '40px';
    botaoDecrementarHomem.appendChild(imagemDecrementarHomem);

    divBotoesHomem.appendChild(botaoIncrementarHomem);
    divBotoesHomem.appendChild(botaoDecrementarHomem);
    divHomem.appendChild(divBotoesHomem);


    divHomemMulher.appendChild(divHomem);





    // Estrutura do DOM
    h1.appendChild(textoTitulo);
    divTotal.appendChild(h1);
    divTotal.appendChild(divCampoResultado);

    // Adicionando ao contadorDiv
    contadorDiv.appendChild(divTotalRecarregar); // Adiciona a linha com divTotal e botão
    contadorDiv.appendChild(divHomemMulher); // Adiciona a divHomemMulher abaixo
}



