class Tarefa {
    nome;
    descricao;
    status = "pendente";

    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = this.concluir();
    }

    concluir(){
        this.status = "Concluída";
    }

    detalhes(){
        return `Tarefa: ${this.nome}\n Descrição: ${this.descricao}\n ${this.status}`;
    }
}