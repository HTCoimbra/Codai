var nome= "Coimbra";
var cargo="Mestre";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("text-1");
var texto2 = document.getElementById("text-2");

function ColocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}

function ColocarCargoNoHtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function LogarNome() {
    console.log(nome);
}

function ClicNoProjetos() {
    console.log("Clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function ClicNoSobre() {
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";

}

ColocarNomeNoHtml(nome);
ColocarCargoNoHtml(cargo);