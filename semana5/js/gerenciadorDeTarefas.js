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
            this.listarTarefas();
        }
    
        listarTarefas() {
            const tarefas = document.getElementById('listaTarefas');
            tarefas.innerHTML = "";
    
            this._tarefas.forEach((tarefa, index) => {
                const li = document.createElement('li');
                li.textContent = tarefa.nome;
                li.classList.add('linha');
    
                const btnDetalhes = document.createElement('button');
                btnDetalhes.textContent = 'Detalhes';
                btnDetalhes.classList.add('btn-detalhes');

                btnDetalhes.addEventListener('click', () => {
                    this.visualizarDetalhes(index);
                    
                });
    
                const btnConcluir = document.createElement('button');
                btnConcluir.textContent = 'Concluir';
                btnConcluir.classList.add('btn-concluir');

                btnConcluir.addEventListener('click', () => {
                    this.marcarComoConcluida(index);
    
                });

                const btnRemover = document.createElement('button');
                btnRemover.textContent = 'Remover';
                btnRemover.classList.add('btn-remover');

                btnRemover.addEventListener('click', () => {
                    this.removerTarefa(index);
                });
    
                li.appendChild(btnDetalhes);
                li.appendChild(btnConcluir);
                li.appendChild(btnRemover);
                tarefas.appendChild(li);
            });
        }
    
        visualizarDetalhes(index) {
            const detalhes = document.getElementById('detalhes-tarefa');
            detalhes.innerHTML = ""; 
        
            const tarefa = this._tarefas[index];
            const p = document.createElement('p');
            p.innerHTML = `Nome: ${tarefa.nome}<br>Descrição: ${tarefa.descricao}<br>Status: ${tarefa.status}`;
            
            detalhes.appendChild(p);
        }
    
        marcarComoConcluida(index) {
            this._tarefas[index].concluir();
        }
    
        removerTarefa(index) {
            this._tarefas.splice(index, 1);
            this.listarTarefas();
        }
    }
    
    // Inicializa o gerenciador
    const gerenciador = new GerenciadorDeTarefas();
    
    // Formulário de submissão de tarefa
    document.getElementById("tarefaForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const nome = document.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;
    
        const novaTarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(novaTarefa);
    
        document.getElementById("nome").value = "";
        document.getElementById("descricao").value = "";
    });
})



