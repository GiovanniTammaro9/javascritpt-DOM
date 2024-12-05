//getelementbyid
function modificaElemento() {
    let titolo = document.getElementById("titolo");
    titolo.innerHTML = "il testo è stato cambiato";
}
//queryselector
function modificaElemento() {
    let titolo = document.querySelector("#titolo");
    titolo.innerHTML = "il testo è stato cambiato";
}

//innertext
let paragrafo = document.createElement("p");
paragrafo.innerText = "questo è un paragrafo iniziale";

document.body.appendChild(paragrafo);
function modificaTesto() {
    paragrafo.innerText = "il testo del paragrafo è stato modificato";
}