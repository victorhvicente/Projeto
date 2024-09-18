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

        this._tarefas.forEach((tarefa, index) =>{

            const btnDetalhes = document.createElement('button');
            btnDetalhes.addEventListener('click', () => {

            })
            
        })
    }

    marcarComoConcluida(index) {
        this._tarefas[index].concluir();
    }

    removerTarefa(index){
        this._tarefas[index].splice(index, 1);
    }

    visualizarDetalhes(index){  
        const detalhes = document.getElementById('detalhes-tarefa');

        if(this._tarefas[index]){
            const p = document.createElement('p');
            const conteudo = this._tarefas[index].detalhes();

            p.textContent = conteudo;

            detalhes.appendChild(p);
        }
    }
}