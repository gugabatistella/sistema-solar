const GRAVIDADE_TERRA = 9.8;
const PESO_MINIMO = 1;
const PESO_MAXIMO = 300;

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoPeso = document.getElementById("peso");
const mensagem = document.getElementById("mensagem");

const mercurio = document.getElementById("mercurio");
const venus = document.getElementById("venus");
const marte = document.getElementById("marte");
const jupiter = document.getElementById("jupiter");
const saturno = document.getElementById("saturno");
const urano = document.getElementById("urano");
const netuno = document.getElementById("netuno");

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

function calcularPeso(peso, gravidade) {
    return (peso * gravidade / GRAVIDADE_TERRA).toFixed(1) + " kg";
}

function mostrarPesos(peso) {
    mercurio.textContent = calcularPeso(peso, 3.7);
    venus.textContent = calcularPeso(peso, 8.9);
    marte.textContent = calcularPeso(peso, 3.7);
    jupiter.textContent = calcularPeso(peso, 23.1);
    saturno.textContent = calcularPeso(peso, 9.0);
    urano.textContent = calcularPeso(peso, 8.7);
    netuno.textContent = calcularPeso(peso, 11.0);
}

function limparPesos() {
    mercurio.textContent = "—";
    venus.textContent = "—";
    marte.textContent = "—";
    jupiter.textContent = "—";
    saturno.textContent = "—";
    urano.textContent = "—";
    netuno.textContent = "—";
}

function validarDados(nome, pesoDigitado) {
    if (nome === "") {
        throw new Error("Informe o seu nome.");
    }

    if (nome.length < 2) {
        throw new Error("O nome precisa ter pelo menos 2 letras.");
    }

    if (pesoDigitado === "") {
        throw new Error("Informe o seu peso na Terra usando apenas números.");
    }

    const peso = Number(pesoDigitado);

    if (isNaN(peso)) {
        throw new Error("O peso precisa ser um número. Exemplo: 55");
    }

    if (peso < PESO_MINIMO || peso > PESO_MAXIMO) {
        throw new Error("O peso precisa estar entre " + PESO_MINIMO + " e " + PESO_MAXIMO + " kg.");
    }

    return peso;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    try {
        const nome = campoNome.value.trim();
        const pesoDigitado = campoPeso.value.trim();

        const peso = validarDados(nome, pesoDigitado);

        mostrarPesos(peso);
        mostrarMensagem(nome + ", na Terra a balança marca " + peso + " kg. Veja quanto ela marcaria em cada planeta!", "sucesso");
    } catch (erro) {
        limparPesos();
        mostrarMensagem("Não foi possível calcular: " + erro.message, "erro");
    }
});
