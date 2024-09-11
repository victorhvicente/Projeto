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
    document.getElementById('telFixo').addEventListener('blur', validarTelFixo);
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
    const telFixo = telFixoInput.value;
    const regexTelFixo = /^\d*$/; // Regex para permitir somente números
    const errorElement = document.getElementById('error-telFixo');

    // Validação: Verifica se o valor contém somente números
    if (!regexTelFixo.test(telFixo)) {
      errorElement.textContent = "É válido somente números";
      errorElement.style.color = "red";
      errorElement.style.marginTop = "10px";
      return false;
    } else {
      // Remove caracteres não numéricos e limita a 11 dígitos
      let limparValor = telFixo.replace(/\D/g, "").substring(0, 11);

      // Aplica a formatação
      if (limparValor.length >= 11) {
        limparValor = limparValor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (limparValor.length >= 2) {
        limparValor = limparValor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      }

      // Atualiza o valor do input com a formatação
      telFixoInput.value = limparValor;

      // Limpa a mensagem de erro se a validação for bem-sucedida
      errorElement.textContent = "";
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