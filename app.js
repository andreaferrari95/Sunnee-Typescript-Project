var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.stato === "disponibile") {
            console.log("Il cliente ".concat(cliente.nome, " ").concat(cliente.cognome, " ha ordinato il prodotto ").concat(this.tipo, " con id ").concat(this.id, " di taglia ").concat(this.taglia, " in colore ").concat(this.colore, "."));
            this.stato = "esaurito";
        }
        else {
            console.log("Prodotto ".concat(this.tipo, " non disponibile"));
        }
    };
    return Prodotto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        prodotto.assegnaCliente(this);
    };
    return Cliente;
}());
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione, prodottiInProduzione) {
        if (prodottiInProduzione === void 0) { prodottiInProduzione = []; }
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Prodotto ".concat(prodotto.tipo, " con id ").concat(prodotto.id, " aggiunto al processo ").concat(this.nomeProcesso, ". "));
    };
    return ProcessoProduzione;
}());
var costume1 = new Prodotto("costume da bagno", "001", "M", "blu", "disponibile");
var costume2 = new Prodotto("costume da bagno", "002", "L", "rosso", "disponibile");
var costume3 = new Prodotto("costume da bagno", "003", "S", "bianco", "disponibile");
var pareo1 = new Prodotto("pareo", "004", "taglia unica", "pattern foglie", "disponibile");
var cappello1 = new Prodotto("cappello", "005", "52", "nero", "disponibile");
var cliente1 = new Cliente("Andrea", "Ferrari", "andrea.ferrari@example.com", "Paypal");
var cliente2 = new Cliente("Giorgio", "Mastrota", "vendo.pentole@example.com", "contanti");
var cliente3 = new Cliente("Carlo", "Cracco", "carlo.cucina@example.com", "Carta di Credito");
var processo1 = new ProcessoProduzione("Riciclo reti da pesca", "Processo che utilizza reti da pesca per creare filati riciclati.");
var processo2 = new ProcessoProduzione("Riciclo Plastica da Bottiglie", "Processo che utilizza bottiglie di plastica per creare nuovi materiali per la produzione di costumi.", []);
var processo3 = new ProcessoProduzione("Riciclo Rifiuti da Pescatori", "Processo che ricicla altri rifiuti da pescatori per creare nuovi filati e materiali.", []);
//aggiungi prodotti alla produzione
processo1.aggiungiProdotto(costume1);
processo1.aggiungiProdotto(costume2);
processo2.aggiungiProdotto(costume3);
processo2.aggiungiProdotto(pareo1);
processo3.aggiungiProdotto(cappello1);
//Ordina prodotti
cliente1.ordinaProdotto(costume1);
cliente2.ordinaProdotto(cappello1);
cliente3.ordinaProdotto(pareo1);
//test prodotto esaurito (mastrota ha comprato il cappello che volevo)
cliente1.ordinaProdotto(cappello1);
