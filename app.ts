interface IProdotto {
  tipo: string; // costume da bagno, pareo, cappello
  id: string;
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";
  assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;
  ordinaProdotto(prodotto: IProdotto): void;
}

interface IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];
  aggiungiProdotto(prodotto: IProdotto): void;
}

class Prodotto implements IProdotto {
  tipo: string;
  id: string;
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";

  constructor(
    tipo: string,
    id: string,
    taglia: string,
    colore: string,
    stato: "disponibile" | "esaurito"
  ) {
    this.tipo = tipo;
    this.id = id;
    this.taglia = taglia;
    this.colore = colore;
    this.stato = stato;
  }

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === "disponibile") {
      console.log(
        `Il cliente ${cliente.nome} ${cliente.cognome} ha ordinato il prodotto ${this.tipo} con id ${this.id} di taglia ${this.taglia} in colore ${this.colore}.`
      );
      this.stato = "esaurito";
    } else {
      console.log(`Prodotto ${this.tipo} non disponibile`);
    }
  }
}

class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamentoPreferito: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }
  ordinaProdotto(prodotto: IProdotto): void {
    prodotto.assegnaCliente(this);
  }
}
class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  constructor(
    nomeProcesso: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[] = []
  ) {
    this.nomeProcesso = nomeProcesso;
    this.descrizione = descrizione;
    this.prodottiInProduzione = prodottiInProduzione;
  }
  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Prodotto ${prodotto.tipo} con id ${prodotto.id} aggiunto al processo ${this.nomeProcesso}. `
    );
  }
}

const costume1 = new Prodotto(
  "costume da bagno",
  "001",
  "M",
  "blu",
  "disponibile"
);
const costume2 = new Prodotto(
  "costume da bagno",
  "002",
  "L",
  "rosso",
  "disponibile"
);
const costume3 = new Prodotto(
  "costume da bagno",
  "003",
  "S",
  "bianco",
  "disponibile"
);
const pareo1 = new Prodotto(
  "pareo",
  "004",
  "taglia unica",
  "pattern foglie",
  "disponibile"
);
const cappello1 = new Prodotto("cappello", "005", "52", "nero", "disponibile");

const cliente1 = new Cliente(
  "Andrea",
  "Ferrari",
  "andrea.ferrari@example.com",
  "Paypal"
);
const cliente2 = new Cliente(
  "Giorgio",
  "Mastrota",
  "vendo.pentole@example.com",
  "contanti"
);
const cliente3 = new Cliente(
  "Carlo",
  "Cracco",
  "carlo.cucina@example.com",
  "Carta di Credito"
);

const processo1 = new ProcessoProduzione(
  "Riciclo reti da pesca",
  "Processo che utilizza reti da pesca per creare filati riciclati."
);
const processo2 = new ProcessoProduzione(
  "Riciclo Plastica da Bottiglie",
  "Processo che utilizza bottiglie di plastica per creare nuovi materiali per la produzione di costumi.",
  []
);

const processo3 = new ProcessoProduzione(
  "Riciclo Rifiuti da Pescatori",
  "Processo che ricicla altri rifiuti da pescatori per creare nuovi filati e materiali.",
  []
);
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
