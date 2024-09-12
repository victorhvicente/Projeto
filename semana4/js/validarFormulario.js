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

    document.getElementById('redefinir').addEventListener('click', () => {
        const formulario = document.getElementById('formulario');
        formulario.reset(); // Reseta todos os campos do formulário
    });

    // Adicionar eventos 'blur' para cada campo e chamando as funções

    document.getElementById('nome').addEventListener('blur', validarNome);
    document.getElementById('email').addEventListener('blur', validarEmail);
    document.getElementById('dataNasc').addEventListener('blur', validarDataNasc);
    document.getElementById('telFixo').addEventListener('blur', validarTelFixo);
    document.getElementById('telCel').addEventListener('blur', validarTelCel);
    document.getElementById('matricula').addEventListener('blur', validarMatricula);
});

function professor() {
    const newElement = document.getElementById('new-opcao');
    
    // Limpa o conteúdo existente
    newElement.innerHTML = '';

    // Cria os novos elementos dinamicamente

    // Div para Área
    const groupArea = document.createElement('div');
    groupArea.className = 'group-area';

    const labelArea = document.createElement('label');
    labelArea.setAttribute('for', 'area');
    labelArea.textContent = 'Área:';

    const inputArea = document.createElement('input');
    inputArea.setAttribute('type', 'text');
    inputArea.setAttribute('id', 'area');
    inputArea.setAttribute('placeholder', 'Digite sua área de atuação');
    inputArea.setAttribute('required', '');

    groupArea.appendChild(labelArea);
    groupArea.appendChild(inputArea);

    // Div para Lattes
    const groupLattes = document.createElement('div');
    groupLattes.className = 'group-lattes';

    const labelLattes = document.createElement('label');
    labelLattes.setAttribute('for', 'lattes');
    labelLattes.textContent = 'Lattes:';

    const inputLattes = document.createElement('input');
    inputLattes.setAttribute('type', 'text');
    inputLattes.setAttribute('id', 'lattes');
    inputLattes.setAttribute('placeholder', 'Digite aqui o endereço para seu lattes');
    inputLattes.setAttribute('required', '');

    groupLattes.appendChild(labelLattes);
    groupLattes.appendChild(inputLattes);

    // Adiciona os novos elementos ao DOM
    newElement.appendChild(groupArea);
    newElement.appendChild(groupLattes);
}

function aluno() {
    const newElement = document.getElementById('new-opcao');
    
    newElement.innerHTML = '';

    const groupCurso = document.createElement('div');
    groupCurso.className = 'group-curso';
    
    const label = document.createElement('label');
    label.setAttribute('for', 'curso');
    label.textContent = 'Curso:';
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'curso');
    input.setAttribute('placeholder', 'Digite seu curso');
    input.setAttribute('required', ''); 
    
    groupCurso.appendChild(label);
    groupCurso.appendChild(input);
    newElement.appendChild(groupCurso);
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

    // Verifica se o número contém apenas números e tem 10 dígitos
    if (numeros.length !== 10) {
        errorElement.textContent = "O telefone fixo deve conter exatamente 10 dígitos numéricos.";
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
        errorElement.textContent = "O telefone Celular deve conter exatamente 11 dígitos numéricos.";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        return false;
    }
    
    // Formata o telefone
    telCelInput.value = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    errorElement.textContent = ""; // Limpa a mensagem de erro
    return true;
}

function validarMatricula() {
    const matriculaInput = document.getElementById('matricula');
    const matricula = matriculaInput.value.trim(); // Remove espaços em branco no início e no fim
    const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked');
    const errorElement = document.getElementById('error-matricula');
    let regexMatricula;

    if (!tipoUsuario) {
        // Se nenhum tipo de usuário estiver selecionado
        errorElement.textContent = 'Selecione um tipo de usuário.';
        errorElement.style.color = 'red';
        errorElement.style.marginTop = '10px';
        return false;
    }

    if (tipoUsuario.value === "professor") {
        regexMatricula = /^\d{5}$/;
        if (regexMatricula.test(matricula)) {
            errorElement.textContent = '';
            return true;
        } else {
            errorElement.textContent = 'Matrícula de professor inválida. Deve conter exatamente 5 dígitos.';
            errorElement.style.color = 'red';
            errorElement.style.marginTop = '10px';
            return false;
        }
    } else if (tipoUsuario.value === "aluno") {
        regexMatricula = /^\d{10}$/;
        if (regexMatricula.test(matricula)) {
            errorElement.textContent = '';
            return true;
        } else {
            errorElement.textContent = 'Matrícula de aluno inválida. Deve conter exatamente 10 dígitos.';
            errorElement.style.color = 'red';
            errorElement.style.marginTop = '10px';
            return false;
        }
    }
}

//essa função contém um vetor com as funções de validações, retorna true se todas funções forem true
function validarFormulario() {
    const validacoes = [
        validarNome(),
        validarEmail(),
        validarDataNasc(),
        validarTelFixo(),
        validarTelCel(),
        validarMatricula()
    ];

    return validacoes.every(Boolean); // Somente submeter se todos forem válidos
}