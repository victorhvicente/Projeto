class Tarefa {
    nome;
    descricao;
    status = "Pendente";

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

class GerenciadorDeTarefas {
    _tarefas = [];

    adicionarTarefa(tarefa){
        this._tarefas.push(tarefa);
    }

    listarTarefas() {
        const tarefas = document.getElementById('listaTarefas');
        tarefas.innerHTML = "";

        const lista = document.createElement('ul');

        this._tarefas.forEach((tarefa, index) =>{

            
        })
    }
}