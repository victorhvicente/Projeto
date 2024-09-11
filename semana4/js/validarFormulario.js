document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click', () => {
        if(validarFormulario()){
            console.log("Tudo OK");
        }
        else{
            console.log("Erro");
        }
    })
   
    document.getElementById('nome').addEventListener('blur', validarNome);
});

function validarNome() {
    const nome = document.getElementById('nome').value;
    // Expressão regular para validar que o nome contém apenas letras e espaços
    const invalido = /^[A-Za-z\s]+$/;
    const errorElement = document.getElementById('error-name');
    
    if (!invalido.test(nome) || nome.trim() === '') {
        errorElement.textContent = "Nome Inválido";
        errorElement.style.color = 'red'; // Define a cor do texto para vermelho
        errorElement.style.marginTop = '10px';
        return false;
    } else {
        errorElement.textContent = ""; //remove a mensagem de erro após o nome ser válido
        return true;
    }
}


function validarFormulario() {
    const validacoes = [
        validarNome(),
    ];

    return validacoes.every(Boolean); // Somente submeter se todos forem válidos
}