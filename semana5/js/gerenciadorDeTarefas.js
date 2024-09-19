document.addEventListener('DOMContentLoaded', () => {
    
    class Tarefa {
        constructor(nome, descricao) {
            this.nome = nome;
            this.descricao = descricao;
            this.status = 'pendente';
        }

        concluir() {
            this.status = 'concluída';
        }

        detalhes() {
            return `Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`;
        }
    }

    class GerenciadorDeTarefas {
        _tarefas = [];

        adicionarTarefa(tarefa) {
            this._tarefas.push(tarefa);
            this.listarTarefas(); // Atualiza a lista após adicionar uma nova tarefa
        }

        listarTarefas() {
            const tarefas = document.getElementById('listaTarefas');
            tarefas.innerHTML = ""; // Limpa a lista existente

            this._tarefas.forEach((tarefa, index) => {
                const li = document.createElement('li');
                li.textContent = tarefa.nome;

                const btnDetalhes = document.createElement('button');
                btnDetalhes.textContent = 'Detalhes';
                btnDetalhes.addEventListener('click', () => {
                    this.visualizarDetalhes(index);
                });

                li.appendChild(btnDetalhes);
                tarefas.appendChild(li);
            });
        }

        visualizarDetalhes(index) {
            const detalhes = document.getElementById('datalhes-tarefa');
                detalhes.innerHTML = ""; 

            if (this._tarefas[index]) {
                const tarefa = this._tarefas[index];
                const p = document.createElement('p');
                const conteudo = tarefa.detalhes();

                p.textContent = conteudo;
                detalhes.appendChild(p); 
            }
        }
    }

    const gerenciador = new GerenciadorDeTarefas();

    document.getElementById("tarefa").addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nomeTarefa").value;
        const descricao = document.getElementById("descricaoTarefa").value;

        const novaTarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(novaTarefa);

        document.getElementById("nomeTarefa").value = "";
        document.getElementById("descricaoTarefa").value = "";
    });
});
