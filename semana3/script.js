const myArray = [];

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btn").addEventListener("click", (evento) => {
        
        evento.preventDefault(); // Evita o recarregamento da página

        var nomeInput = document.getElementById("nome");
        var idadeInput = document.getElementById("idade");

        // Certifique-se de que estamos adicionando um objeto com as propriedades 'nome' e 'idade'
        myArray.push({nome: nomeInput.value, idade: idadeInput.value});

         // Limpa os campos do input la do HTML
         nomeInput.value = "";
         idadeInput.value = "";
    });

    document.getElementById("btnSim").addEventListener("click", ()=>{

        let t = document.createElement("h2");
        let titulo = document.createTextNode("Dados Cadastrados.");
        t.appendChild(titulo);
        document.body.appendChild(t);

        myArray.forEach(dados =>{

            let p = document.createElement("p");
            let dadosArray = document.createTextNode(`Nome: ${dados.nome}, Idade: ${dados.idade}.`);
    
            p.appendChild(dadosArray);
            document.body.appendChild(p);
        });
    });
});
