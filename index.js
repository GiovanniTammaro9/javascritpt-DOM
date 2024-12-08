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

//creare una lista con createElement
function creaLista() {
    let lista = document.createElement("ul");
    let item1 = document.createElement("li");
    item1.innerText = "elemento1";
    lista.appendChild(item1);

    let item2 = document.createElement("li");
    item2.innerText = "elemento2";
    lista.appendChild(item2);

    let item3 = document.createElement("li");
    item3.innerText = "elemento3";
    lista.appendChild(item3);

    document.body.appendChild(lista);
}

//form
function validateForm(event) {
    event.preventDeafault();

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    
    if(nome === "" || cognome === "") {
        alert("per favore, compila tutti i campi");
    }else {
        document.getElementById("myForm").submit();
    }
}