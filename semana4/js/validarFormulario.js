document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click', (event) => {
        if(validarFormulario()){
            console.log("Tudo OK");
        }
        else{
            console.log("Erro");
            event.preventDefault(); // Impede o envio do formulário se as validações falharem
        }
        
    })
   
    document.getElementById('nome').addEventListener('blur', validarNome);
    document.getElementById('email').addEventListener('blur', validarEmail);
    document.getElementById('dataNasc').addEventListener('blur', validarDataNasc);
    document.getElementById('telFixo').addEventListener('input', validarTelFixo);
});

function validarNome() {
    const nome = document.getElementById('nome').value;
    // Expressão regular para validar que o nome contém apenas letras e espaços
    const regex = /^[A-Za-z\s]+$/;
    const errorElement = document.getElementById('error-name');
    
    if (!regex.test(nome) || nome.trim() === '') {
        errorElement.textContent = "Nome Inválido";
        errorElement.style.color = 'red'; // Define a cor do texto para vermelho
        errorElement.style.marginTop = '10px';
        return false;

    } else {
        errorElement.textContent = ""; //remove a mensagem de erro após o nome ser válido
        return true;
    }
}

function validarEmail(){
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('error-email');

    if(!regex.test(email)) {
        errorElement.textContent = "Email Inválido";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        return false
    }
    else {
        errorElement.textContent = "";
        return true;
    }
}

function validarDataNasc(){
    const dataNasc = document.getElementById('dataNasc').value;
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    const errorElement = document.getElementById('error-date');

    if(!regexData.test(dataNasc)){
        errorElement.textContent = "Data de nascimento Inválido";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        return false;
    }
    else{
        errorElement.textContent = "";
        return true;
    }
}

function validarTelFixo() {
    const telFixoInput = document.getElementById('telFixo');
    let telFixo = telFixoInput.value;
    const regexNumeros = /^\d*$/; // Regex para permitir somente números

    // Remove todos os caracteres não numéricos
    let numeros = telFixo.replace(/\D/g, "");

    // Verifica se a string numérica é válida
    if (numeros.length >= 10) {
      // Limita a 11 dígitos se for maior
      numeros = numeros.substring(0, 10);
    }

    // Atualiza a formatação
    if (numeros.length >= 10) {
      telFixo = numeros.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } 
    else if (numeros.length >= 2) {
      telFixo = numeros.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
    } 
    else {
      telFixo = numeros; // Caso menos de 2 dígitos, mantém apenas números
    }

    // Atualiza o valor do input com a formatação
    telFixoInput.value = telFixo;

    // Mensagem de erro para caracteres não numéricos
    const errorElement = document.getElementById('error-telFixo');
    if (!regexNumeros.test(telFixo.replace(/\D/g, ''))) {
      errorElement.textContent = "É válido somente números";
      errorElement.style.color = "red";
      errorElement.style.marginTop = "10px";
      return false;
    } 
    else {
      errorElement.textContent = ""; // Limpa a mensagem de erro
      return true;
    }
}


function validarFormulario() {
    const validacoes = [
        validarNome(),
        validarEmail(),
        validarDataNasc(),
        validarTelFixo()
    ];

    return validacoes.every(Boolean); // Somente submeter se todos forem válidos
}