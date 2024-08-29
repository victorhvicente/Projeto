document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("verificar").addEventListener("click", () => {

        function verificarPalindromo() {
            let valor = document.getElementById("texto").value;
            // converte para minúsculas
            let texto = valor.toLowerCase();
            // Divide a string em caracteres, inverte e junta novamente
            let textoContrario = texto.split('').reverse().join('');

            // Compara a string original com a invertida
            if (texto === textoContrario) {
                alert("É Palíndromo");
            } else {
                alert("Não é Palíndromo");
            }
        }

        verificarPalindromo();
    });
});


