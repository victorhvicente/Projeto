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

    // Div para Homem/Mulher
    const divHomemMulher = document.createElement('div');
    divHomemMulher.style.width = '100px';
    divHomemMulher.style.height = '100px';
    divHomemMulher.style.background = 'red';
    divHomemMulher.style.marginTop = '20px';

    // Agrupando a divTotal e o botão na mesma linha
    const divTotalRecarregar = document.createElement('div');
    divTotalRecarregar.style.display = 'flex';
    divTotalRecarregar.style.background = 'red';
    divTotalRecarregar.style.width = '100%';
    divTotalRecarregar.style.justifyContent = 'space-between';
    divTotalRecarregar.style.alignItems = 'flex-start';
    divTotalRecarregar.appendChild(divTotal);
    divTotalRecarregar.appendChild(botaoRecarregar);

    // Estrutura do DOM
    h1.appendChild(textoTitulo);
    divTotal.appendChild(h1);
    divTotal.appendChild(divCampoResultado);

    // Adicionando ao contadorDiv
    contadorDiv.appendChild(divTotalRecarregar); // Adiciona a linha com divTotal e botão
    contadorDiv.appendChild(divHomemMulher); // Adiciona a divHomemMulher abaixo
}



