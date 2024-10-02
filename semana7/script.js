
function Convite({ carta }) {
    return <h1>{carta}</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const texto = "Venha estudar na FATEC"; 
let cont = 0;


function tick() {
    if (cont < texto.length) {
        // Atualize 'carta' para incluir o texto até o índice atual
        let carta = texto.slice(0, cont + 1); 
        root.render(<Convite carta={carta} />);
        cont++;
    }  
    else {
        clearInterval(interval); // Pare o intervalo quando todo o texto for exibido
    }
}


const interval = setInterval(tick, 1000);


