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
//modifica stile 
function modificaStile() {
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.style.backgroundColor = "#4CAF50";
    paragrafo.style.fontSize = "20px";
}

//aggiungere bottone in elemento html
function aggiungiBottone() {
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerHTML = paragrafo.innerHTML + `<button onclick="alert(\`hai cliccato il nuovo bottone!\`)">nuovoo bottone</button>`;
}