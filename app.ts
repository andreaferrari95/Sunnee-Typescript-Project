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
    prodottiInProduzione: IProdotto[]
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
