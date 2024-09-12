class Pessoa {
    nome;
    email;
    dataNascimento;
    telefoneFixo;
    telefoneCelular;
    matricula;

    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    area;
    lattes;

    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, area, lattes) {
        // Chama o construtor da classe base (Pessoa)
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        this.area = area;
        this.lattes = lattes;
    }
}

class Aluno extends Pessoa {
    curso;

    constructor(nome, email, dataNasc, telFixo, telCel, matricula, curso){
        super(nome, email, dataNasc, telFixo, telCel, matricula);
        this.curso = curso;
    }
}

function criarObjeto() {
    if (!validarFormulario()) {
        return;
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const telFixo = document.getElementById('telFixo').value;
    const telCel = document.getElementById('telCel').value;
    const matricula = document.getElementById('matricula').value;

    const tipoPessoa = document.querySelector('input[name="tipo_usuario"]:checked').value;
    let pessoa;

    if (tipoPessoa === 'professor') {
        const area = document.getElementById('area').value;
        const lattes = document.getElementById('lattes').value;
        pessoa = new Professor(nome, email, dataNasc, telFixo, telCel, matricula, area, lattes);
    } else if (tipoPessoa === 'aluno') {
        const curso = document.getElementById('curso').value;
        pessoa = new Aluno(nome, email, dataNasc, telFixo, telCel, matricula, curso);
    }

    console.log(pessoa);
}
