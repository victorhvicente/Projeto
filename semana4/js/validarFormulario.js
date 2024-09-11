document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('professor').addEventListener('click', professor);

    document.getElementById('aluno').addEventListener('click', aluno);

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
    document.getElementById('telCel').addEventListener('blur', validarTelCel);
});

function professor() {

    const newElement = document.getElementById('new-opcao');
    newElement.innerHTML = `
    <div class="group-area">
        <label for="area">Área:</label>
        <input type="text" id="area" placeholder="Digite sua área de atuação" required>
    </div>
    <div class="group-lattes">
        <label for="lattes">Lattes:</label>
        <input type="text" id="lattes" placeholder="Digite aqui o endereço para seu lattes" required>
    </div>`;
}

function aluno(){

    const newElement = document.getElementById('new-opcao');
    newElement.innerHTML = `
        <div class="group-curso">
            <label for="curso">Curso:</label>
            <input type="text" id="curso" placeholder="Digite seu curso">
        </div>`;
}

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
    const errorElement = document.getElementById('error-telFixo');
    
    // Remove caracteres não numéricos
    const numeros = telFixo.replace(/\D/g, "");
    
    // Verifica se o número tem 10 dígitos
    if (numeros.length !== 10) {
        errorElement.textContent = "O telefone fixo deve ter 10 dígitos.";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        return false;
    }
    
    // Formata o telefone
    telFixoInput.value = numeros.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    errorElement.textContent = ""; // Limpa a mensagem de erro
    return true;
}

function validarTelCel() {
    const telCelInput = document.getElementById('telCel');
    const telCel = telCelInput.value;
    const errorElement = document.getElementById('error-telCel');
    
    // Remove caracteres não numéricos
    const numeros = telCel.replace(/\D/g, "");
    
    // Verifica se o número tem 11 dígitos
    if (numeros.length !== 11) {
        errorElement.textContent = "O telefone celular deve ter 11 dígitos.";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        return false;
    }
    
    // Formata o telefone
    telCelInput.value = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    errorElement.textContent = ""; // Limpa a mensagem de erro
    return true;
}


function validarFormulario() {
    const validacoes = [
        validarNome(),
        validarEmail(),
        validarDataNasc(),
        validarTelFixo(),
        validarTelCel()
    ];

    return validacoes.every(Boolean); // Somente submeter se todos forem válidos
}