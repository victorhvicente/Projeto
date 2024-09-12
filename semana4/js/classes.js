class Pessoa {
    #nome;
    #email;
    #dataNascimento;
    #telefoneFixo;
    #telefoneCelular;
    #matricula;

    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        this.#nome = nome;
        this.#email = email;
        this.#dataNascimento = dataNascimento;
        this.#telefoneFixo = telefoneFixo;
        this.#telefoneCelular = telefoneCelular;
        this.#matricula = matricula;
    }
}

class Professor extends Pessoa {
    #area;
    #letts;

    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, area, letts) {
        // Chama o construtor da classe base (Pessoa)
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        this.#area = area;
        this.#letts = letts;
    }
}

class Aluno extends Pessoa {
    #curso;

    constructor(nome, email, dataNasc, telFixo, telCel, matricula, curso){
        super(nome, email, dataNasc, telFixo, telCel, matricula);
        this.#curso = curso;
    }

}
